// ============================================================
// RENTAL ESTIMATOR — Fence Rental flow (8-step progressive)
// Adapted from fence-estimator with script panel integration
// ============================================================

var RentalEstimator = {
  init: function () {
    this.bindEvents();
  },

  bindEvents: function () {
    var self = this;

    // Step 1: Coverage
    document.getElementById("rental-linear-feet").addEventListener("input", function () {
      self.checkStep1();
      self.recalculate();
    });
    document.getElementById("rental-linear-feet").addEventListener("focus", function () {
      CallFlow.onStepChange("fence-rental", "coverage");
    });

    // Step 2: Height
    document.querySelectorAll('input[name="rental-height"]').forEach(function (r) {
      r.addEventListener("change", function () {
        self.unlockStep(3);
        self.updateGateLabels();
        self.resetStepsFrom(4);
        self.recalculate();
        CallFlow.onStepChange("fence-rental", "height");
      });
    });

    // Step 3: Surface
    document.querySelectorAll('input[name="rental-surface"]').forEach(function (r) {
      r.addEventListener("change", function () {
        self.handleSurfaceChange();
        self.recalculate();
        CallFlow.onStepChange("fence-rental", "surface");
      });
    });
    document.querySelectorAll('input[name="rental-install-type"]').forEach(function (r) {
      r.addEventListener("change", function () {
        self.unlockStep(4);
        self.resetStepsFrom(6);
        self.checkStep5();
        self.recalculate();
      });
    });

    // Step 4: Privacy
    document.querySelectorAll('input[name="rental-privacy"]').forEach(function (r) {
      r.addEventListener("change", function () {
        self.unlockStep(5);
        self.recalculate();
        CallFlow.onStepChange("fence-rental", "privacy");
      });
    });

    // Step 5: Gates
    document.querySelectorAll('input[name="rental-vehicle-gate"]').forEach(function (r) {
      r.addEventListener("change", function () {
        var show = r.value === "yes" && r.checked;
        document.getElementById("rental-vehicle-gate-type-group").classList.toggle("hidden", !show);
        if (!show) {
          document.querySelectorAll('input[name="rental-vehicle-gate-type"]').forEach(function (rt) { rt.checked = false; });
        }
        self.checkStep5();
        self.recalculate();
        CallFlow.onStepChange("fence-rental", "gates");
      });
    });
    document.querySelectorAll('input[name="rental-vehicle-gate-type"]').forEach(function (r) {
      r.addEventListener("change", function () {
        self.checkStep5();
        self.recalculate();
      });
    });
    document.querySelectorAll('input[name="rental-ped-gate"]').forEach(function (r) {
      r.addEventListener("change", function () {
        self.checkStep5();
        self.recalculate();
      });
    });

    // Step 6: Sandbags
    document.getElementById("rental-sandbag-qty").addEventListener("input", function () {
      this.setAttribute("data-auto-filled", "false");
      self.unlockStep(7);
      self.recalculate();
      CallFlow.onStepChange("fence-rental", "sandbags");
    });

    // Step 7: Duration
    document.getElementById("rental-duration").addEventListener("change", function () {
      self.unlockStep(8);
      self.recalculate();
      CallFlow.onStepChange("fence-rental", "duration");
    });

    // Step 8: Delivery
    document.getElementById("rental-zip").addEventListener("input", function () {
      self.recalculate();
      CallFlow.onStepChange("fence-rental", "delivery");
    });
  },

  checkStep1: function () {
    var feet = parseInt(document.getElementById("rental-linear-feet").value);
    if (feet > 0) {
      this.unlockStep(2);
    }
  },

  handleSurfaceChange: function () {
    var installGroup = document.getElementById("rental-install-type-group");
    installGroup.classList.remove("hidden");
    document.querySelectorAll('input[name="rental-install-type"]').forEach(function (r) {
      r.checked = false;
    });
  },

  updateGateLabels: function () {
    var height = Utils.getRadioValue("rental-height");
    var h = height === "8ft" ? "8" : "6";
    var stdLabel = document.getElementById("rental-vgate-standard-label");
    var dwLabel = document.getElementById("rental-vgate-doublewide-label");
    if (stdLabel) stdLabel.textContent = h + "\u00D710 / " + h + "\u00D712 Standard \u2014 $" + CONFIG.rental.gates.vehicleStandard;
    if (dwLabel) dwLabel.textContent = h + "\u00D720 Double-Wide \u2014 $" + CONFIG.rental.gates.vehicleDoubleWide;
  },

  checkStep5: function () {
    var vehicleGate = Utils.getRadioValue("rental-vehicle-gate");
    var pedGate = Utils.getRadioValue("rental-ped-gate");
    if (!vehicleGate || !pedGate) return;
    if (vehicleGate === "yes") {
      var gateType = Utils.getRadioValue("rental-vehicle-gate-type");
      if (!gateType) return;
    }
    var installType = Utils.getRadioValue("rental-install-type");
    if (installType === "in-ground") {
      document.getElementById("rental-sandbag-qty").value = 0;
      document.getElementById("rental-sandbag-qty").setAttribute("data-auto-filled", "false");
      var step6 = document.getElementById("rental-step-6");
      if (step6 && !step6.classList.contains("locked")) {
        step6.classList.add("locked");
        step6.classList.remove("active", "completed");
      }
      this.unlockStep(7);
      this.unlockStep(8);
    } else {
      this.unlockStep(6);
      this.updateSandbagRecommendation();
    }
  },

  updateSandbagRecommendation: function () {
    var height = Utils.getRadioValue("rental-height");
    var privacy = Utils.getRadioValue("rental-privacy");
    var linearFeet = parseInt(document.getElementById("rental-linear-feet").value) || 0;
    var panels = Utils.panelCount(linearFeet);
    if (!height || panels === 0) return;
    var key = privacy === "yes" ? "withPrivacy" : "withoutPrivacy";
    var range = CONFIG.rental.sandbagRecommendations[height][key];
    var min = panels * range[0];
    var max = panels * range[1];
    var recEl = document.getElementById("rental-sandbag-recommendation");
    recEl.textContent = "Recommended: " + min + "\u2013" + max + " sandbags (" + panels + " panels \u00D7 " + range[0] + "\u2013" + range[1] + " each)";
    var qtyInput = document.getElementById("rental-sandbag-qty");
    if (qtyInput.getAttribute("data-auto-filled") !== "false") {
      qtyInput.value = max;
      qtyInput.setAttribute("data-auto-filled", "true");
      this.unlockStep(7);
      this.unlockStep(8);
    }
  },

  unlockStep: function (stepNum) {
    var step = document.getElementById("rental-step-" + stepNum);
    if (!step) return;
    if (step.classList.contains("locked")) {
      step.classList.remove("locked");
      step.classList.add("active");
      var prevStep = document.getElementById("rental-step-" + (stepNum - 1));
      if (prevStep) prevStep.classList.add("completed");
      var self = this;
      clearTimeout(this._scrollTimer);
      this._scrollTimer = setTimeout(function () {
        step.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 150);
    }
  },

  resetStepsFrom: function (stepNum) {
    for (var i = stepNum; i <= 8; i++) {
      var step = document.getElementById("rental-step-" + i);
      if (!step) continue;
      if (!step.classList.contains("locked")) {
        step.classList.add("locked");
        step.classList.remove("active", "completed");
      }
    }
  },

  recalculate: function () {
    var linearFeet = parseInt(document.getElementById("rental-linear-feet").value) || 0;
    var height = Utils.getRadioValue("rental-height");
    var surface = Utils.getRadioValue("rental-surface");
    var installType = Utils.getRadioValue("rental-install-type");
    var privacy = Utils.getRadioValue("rental-privacy");
    var vehicleGate = Utils.getRadioValue("rental-vehicle-gate");
    var vehicleGateType = Utils.getRadioValue("rental-vehicle-gate-type");
    var pedGate = Utils.getRadioValue("rental-ped-gate");
    var sandbagQty = parseInt(document.getElementById("rental-sandbag-qty").value) || 0;
    var duration = parseInt(document.getElementById("rental-duration").value) || 6;
    var zip = document.getElementById("rental-zip").value.trim();

    if (linearFeet <= 0 || !height) {
      this.renderSummary(null);
      return;
    }

    var roundedFeet = Utils.roundUpToPanel(linearFeet);
    var panels = Utils.panelCount(linearFeet);
    var rates = CONFIG.rental.rates[height];
    var fenceCost = roundedFeet * rates.fence;

    var concreteSurcharge = 0;
    var postCount = 0;
    var postCost = 0;
    if (installType === "in-ground") {
      postCount = panels * CONFIG.rental.postsPerPanel;
      postCost = postCount * CONFIG.rental.inGroundPostPrice;
      if (surface === "concrete") {
        concreteSurcharge = roundedFeet * CONFIG.rental.concreteSurcharge;
      }
      sandbagQty = 0;
    }

    var vehicleGateCost = 0;
    var vehicleGateLabel = "";
    if (vehicleGate === "yes" && vehicleGateType) {
      if (vehicleGateType === "standard") {
        vehicleGateCost = CONFIG.rental.gates.vehicleStandard;
        vehicleGateLabel = "Vehicle Gate (Standard)";
      } else if (vehicleGateType === "double-wide") {
        vehicleGateCost = CONFIG.rental.gates.vehicleDoubleWide;
        vehicleGateLabel = "Vehicle Gate (Double-Wide)";
      }
    }
    var pedGateCost = 0;
    if (pedGate === "yes") {
      pedGateCost = CONFIG.rental.gates.pedestrian;
    }
    var totalGateCost = vehicleGateCost + pedGateCost;

    var delivery = { miles: null, cost: 0, free: false, error: false };
    var deliveryInfo = document.getElementById("rental-delivery-info");
    if (zip.length === 5) {
      delivery = Distance.rentalDeliveryCost(zip);
      if (delivery.error) {
        deliveryInfo.textContent = "Zip code not in our delivery area \u2014 please call for a quote.";
        deliveryInfo.style.color = "var(--error)";
      } else if (delivery.free) {
        deliveryInfo.textContent = delivery.miles + " miles \u2014 Free delivery (within " + CONFIG.rental.delivery.freeRadiusMiles + " mi)";
        deliveryInfo.style.color = "var(--accent)";
      } else {
        deliveryInfo.textContent = delivery.miles + " miles \u2014 " + delivery.billableMiles + " mi beyond " + CONFIG.rental.delivery.freeRadiusMiles + " mi \u00D7 $" + CONFIG.rental.delivery.perMileRate + "/mi = " + Utils.formatCurrency(delivery.cost);
        deliveryInfo.style.color = "var(--text-muted)";
      }
    } else {
      deliveryInfo.textContent = "";
    }

    var privacyScreenCost = 0;
    if (privacy === "yes") {
      privacyScreenCost = linearFeet * rates.privacyScreen;
    }
    var sandbagCost = sandbagQty * CONFIG.rental.sandbagPrice;
    var purchaseSubtotal = privacyScreenCost + sandbagCost;
    var purchaseTax = purchaseSubtotal * CONFIG.salesTaxRate;

    var nonTaxableTotal = fenceCost + concreteSurcharge + postCost + totalGateCost + delivery.cost;
    var purchaseTotal = purchaseSubtotal + purchaseTax;
    var trueInvoiceTotal = nonTaxableTotal + purchaseTotal;

    var installRemovalFee = 0;
    if (trueInvoiceTotal < CONFIG.rental.minimumRentalPrice) {
      installRemovalFee = CONFIG.rental.minimumRentalPrice - trueInvoiceTotal;
    }

    var extensionBase = nonTaxableTotal + installRemovalFee;
    var ext = Utils.calculateExtensionCharges(extensionBase, duration);
    var grandTotal = nonTaxableTotal + installRemovalFee + ext.extensionTotal + purchaseTotal;

    document.getElementById("rental-save-pdf").style.display = "inline-block";

    // Update script to closing when we have a full estimate
    if (zip.length === 5) {
      CallFlow.onStepChange("fence-rental", "closing");
    }

    this.renderSummary({
      linearFeet: linearFeet, roundedFeet: roundedFeet, panels: panels, height: height,
      surface: surface, installType: installType, rates: rates, fenceCost: fenceCost,
      concreteSurcharge: concreteSurcharge, postCount: postCount, postCost: postCost,
      vehicleGate: vehicleGate, vehicleGateType: vehicleGateType, vehicleGateCost: vehicleGateCost,
      vehicleGateLabel: vehicleGateLabel, pedGate: pedGate, pedGateCost: pedGateCost,
      totalGateCost: totalGateCost, delivery: delivery, nonTaxableTotal: nonTaxableTotal,
      installRemovalFee: installRemovalFee, extensionBase: extensionBase, ext: ext,
      privacy: privacy, privacyScreenCost: privacyScreenCost, sandbagQty: sandbagQty,
      sandbagCost: sandbagCost, purchaseSubtotal: purchaseSubtotal, purchaseTax: purchaseTax,
      purchaseTotal: purchaseTotal, grandTotal: grandTotal, duration: duration
    });
  },

  renderSummary: function (data) {
    var el = document.getElementById("rental-summary-content");
    if (!data) {
      el.innerHTML = '<p class="empty-state">Fill in the steps above to see your estimate.</p>';
      document.getElementById("rental-save-pdf").style.display = "none";
      return;
    }

    var html = "";
    html += '<div class="summary-section">';
    html += '<div class="summary-section-title">Rental Charges (6-month base)</div>';
    html += '<div class="summary-line"><span class="label">Fence <small>' + data.roundedFeet + " LF of " + data.height + " @ " + Utils.formatCurrency(data.rates.fence) + '/LF</small></span><span class="value">' + Utils.formatCurrency(data.fenceCost) + "</span></div>";

    if (data.concreteSurcharge > 0) {
      html += '<div class="summary-line"><span class="label">Concrete drilling surcharge <small>' + data.roundedFeet + ' LF @ $1.50/LF</small></span><span class="value">' + Utils.formatCurrency(data.concreteSurcharge) + "</span></div>";
    }
    if (data.postCost > 0) {
      html += '<div class="summary-line"><span class="label">In-ground posts <small>' + data.postCount + " posts \u00D7 $" + CONFIG.rental.inGroundPostPrice + '</small></span><span class="value">' + Utils.formatCurrency(data.postCost) + "</span></div>";
    }
    if (data.vehicleGateCost > 0) {
      html += '<div class="summary-line"><span class="label">' + data.vehicleGateLabel + ' <small>wheel included</small></span><span class="value">' + Utils.formatCurrency(data.vehicleGateCost) + "</span></div>";
    }
    if (data.pedGateCost > 0) {
      html += '<div class="summary-line"><span class="label">Pedestrian Gate</span><span class="value">' + Utils.formatCurrency(data.pedGateCost) + "</span></div>";
    }
    if (data.delivery.miles !== null && !data.delivery.error) {
      if (data.delivery.free) {
        html += '<div class="summary-line"><span class="label">Delivery <small>' + data.delivery.miles + ' mi</small><span class="summary-badge badge-free">Free</span></span><span class="value">$0.00</span></div>';
      } else {
        html += '<div class="summary-line"><span class="label">Delivery <small>' + data.delivery.billableMiles + " mi \u00D7 $" + CONFIG.rental.delivery.perMileRate + '/mi</small></span><span class="value">' + Utils.formatCurrency(data.delivery.cost) + "</span></div>";
      }
    }
    if (data.installRemovalFee > 0) {
      html += '<div class="summary-line"><span class="label">Install & Removal Fee <span class="summary-badge badge-min">Min $950</span></span><span class="value">' + Utils.formatCurrency(data.installRemovalFee) + "</span></div>";
    }
    html += '<hr class="summary-divider">';
    html += '<div class="summary-line"><span class="label"><strong>Rental Subtotal</strong></span><span class="value"><strong>' + Utils.formatCurrency(data.nonTaxableTotal + data.installRemovalFee) + "</strong></span></div>";
    html += "</div>";

    if (data.ext.extensionMonths > 0) {
      html += '<div class="summary-section">';
      html += '<div class="summary-section-title">Extension Charges</div>';
      var extMinNote = data.ext.extensionMinApplied ? ' <span class="summary-badge badge-min">Min $94.35/mo</span>' : '';
      if (data.ext.isYearCommitment) {
        html += '<div class="summary-line"><span class="label">' + data.ext.extensionMonths + " months extension <small>(1 month free)</small>" + '<span class="summary-badge badge-discount">1-Yr Commitment</span>' + extMinNote + '</span><span class="value">' + Utils.formatCurrency(data.ext.extensionTotal) + "</span></div>";
      } else {
        html += '<div class="summary-line"><span class="label">' + data.ext.extensionMonths + " month(s) @ " + Utils.formatCurrency(data.ext.monthlyExtension) + '/mo' + extMinNote + '</span><span class="value">' + Utils.formatCurrency(data.ext.extensionTotal) + "</span></div>";
      }
      html += "</div>";
    }

    if (data.purchaseSubtotal > 0) {
      html += '<div class="summary-section">';
      html += '<div class="summary-section-title">Purchase Charges (one-time, taxable)</div>';
      if (data.privacyScreenCost > 0) {
        html += '<div class="summary-line"><span class="label">Privacy screen <small>' + data.linearFeet + " LF @ " + Utils.formatCurrency(data.rates.privacyScreen) + '/LF</small></span><span class="value">' + Utils.formatCurrency(data.privacyScreenCost) + "</span></div>";
      }
      if (data.sandbagCost > 0) {
        html += '<div class="summary-line"><span class="label">Sandbags <small>' + data.sandbagQty + " \u00D7 $" + CONFIG.rental.sandbagPrice.toFixed(2) + '</small></span><span class="value">' + Utils.formatCurrency(data.sandbagCost) + "</span></div>";
      }
      html += '<div class="summary-line"><span class="label">Sales Tax (9.5%)</span><span class="value">' + Utils.formatCurrency(data.purchaseTax) + "</span></div>";
      html += '<hr class="summary-divider">';
      html += '<div class="summary-line"><span class="label"><strong>Purchase Total</strong></span><span class="value"><strong>' + Utils.formatCurrency(data.purchaseTotal) + "</strong></span></div>";
      html += "</div>";
    }

    html += '<hr class="summary-divider">';
    html += '<div class="summary-total"><span>Estimated Total</span><span>' + Utils.formatCurrency(data.grandTotal) + "</span></div>";

    if (data.duration <= 6) {
      var noteText = "Monthly extension rate after 6 months: " + Utils.formatCurrency(data.ext.monthlyExtension) + "/mo";
      if (data.ext.extensionMinApplied) {
        noteText += " (min $94.35/mo applied)";
      } else {
        noteText += " (16% of rental charges)";
      }
      html += '<div class="summary-note info">' + noteText + "</div>";
    }

    if (data.installType === "in-ground") {
      html += '<div class="summary-note">Dig Alert (811) notification required at least 2 working days before excavation.</div>';
    }

    el.innerHTML = html;
  }
};
