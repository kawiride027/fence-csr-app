// ============================================================
// SLACK — Copy formatted call summary to clipboard for pasting
// into Slack. CSR clicks "Copy for Slack" then pastes in channel.
// ============================================================

var Slack = {
  copyToClipboard: function (flowType) {
    var text = this.buildText(flowType);
    if (!text) {
      Utils.showToast("Please fill in the form first", "error");
      return;
    }

    navigator.clipboard.writeText(text).then(function () {
      Utils.showToast("Copied! Paste it in your Slack channel", "success");
    }).catch(function () {
      // Fallback for older browsers
      var ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      Utils.showToast("Copied! Paste it in your Slack channel", "success");
    });
  },

  buildText: function (flowType) {
    switch (flowType) {
      case "fence-rental":
        return this.buildRentalText();
      case "barricade-rental":
        return this.buildBarricadeText();
      case "fence-purchase":
        return this.buildPurchaseText();
      case "issue":
        return this.buildIssueText();
      case "removal":
        return this.buildRemovalText();
      case "general":
        return this.buildGeneralText();
      default:
        return null;
    }
  },

  // ---- RENTAL ----
  buildRentalText: function () {
    var name = document.getElementById("rental-cust-name").value.trim();
    var phone = document.getElementById("rental-cust-phone").value.trim();
    var email = document.getElementById("rental-cust-email").value.trim();
    var address = document.getElementById("rental-cust-address").value.trim();
    var csrName = document.getElementById("rental-csr-name").value.trim();
    var outcome = document.getElementById("rental-call-outcome").value;
    var notes = document.getElementById("rental-csr-notes").value.trim();

    var lf = document.getElementById("rental-linear-feet").value || "N/A";
    var height = Utils.getRadioValue("rental-height") || "N/A";
    var surface = Utils.getRadioValue("rental-surface") || "N/A";
    var installType = Utils.getRadioValue("rental-install-type") || "N/A";
    var privacy = Utils.getRadioValue("rental-privacy") || "N/A";
    var vehicleGate = Utils.getRadioValue("rental-vehicle-gate") || "N/A";
    var pedGate = Utils.getRadioValue("rental-ped-gate") || "N/A";
    var sandbags = document.getElementById("rental-sandbag-qty").value || "0";
    var duration = document.getElementById("rental-duration").value || "6";
    var zip = document.getElementById("rental-zip").value.trim() || "N/A";

    var totalEl = document.querySelector("#rental-summary-content .summary-total");
    var total = totalEl ? totalEl.lastElementChild.textContent : "N/A";

    return "\uD83C\uDFD7\uFE0F *NEW FENCE RENTAL INQUIRY*\n" +
      "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n" +
      "*Customer:* " + (name || "N/A") + "\n" +
      "*Phone:* " + (phone || "N/A") + "\n" +
      "*Email:* " + (email || "N/A") + "\n" +
      "*Job Site:* " + (address || "N/A") + "\n\n" +
      "*Estimate Details:*\n" +
      "\u2022 " + lf + " LF of " + height + " fence (" + installType + ", " + surface + ")\n" +
      "\u2022 Privacy screen: " + privacy + "\n" +
      "\u2022 Vehicle gate: " + vehicleGate + " | Ped gate: " + pedGate + "\n" +
      "\u2022 Sandbags: " + sandbags + "\n" +
      "\u2022 Duration: " + duration + " months\n" +
      "\u2022 Delivery zip: " + zip + "\n\n" +
      "*Estimated Total: " + total + "*\n\n" +
      "*CSR:* " + (csrName || "N/A") + "\n" +
      "*Outcome:* " + (outcome || "N/A") +
      (notes ? "\n*Notes:* " + notes : "");
  },

  // ---- BARRICADE ----
  buildBarricadeText: function () {
    var name = document.getElementById("barricade-cust-name").value.trim();
    var phone = document.getElementById("barricade-cust-phone").value.trim();
    var email = document.getElementById("barricade-cust-email").value.trim();
    var address = document.getElementById("barricade-cust-address").value.trim();
    var csrName = document.getElementById("barricade-csr-name").value.trim();
    var outcome = document.getElementById("barricade-call-outcome").value;
    var notes = document.getElementById("barricade-csr-notes").value.trim();

    var lf = document.getElementById("barricade-linear-feet").value || "N/A";
    var durationEl = document.querySelector('input[name="barricade-duration"]:checked');
    var months = durationEl ? durationEl.value : "N/A";
    var zip = document.getElementById("barricade-zip").value.trim() || "N/A";

    var totalEl = document.querySelector("#barricade-summary-content .summary-total");
    var total = totalEl ? totalEl.lastElementChild.textContent : "N/A";

    var barricadeCount = lf !== "N/A" ? Math.ceil(parseInt(lf) / CONFIG.rental.barricadeLengthFt) : "N/A";

    return "\uD83D\uDEA7 *BARRICADE RENTAL INQUIRY*\n" +
      "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n" +
      "*Customer:* " + (name || "N/A") + "\n" +
      "*Phone:* " + (phone || "N/A") + "\n" +
      "*Email:* " + (email || "N/A") + "\n" +
      "*Job Site:* " + (address || "N/A") + "\n\n" +
      "*Estimate Details:*\n" +
      "\u2022 " + lf + " LF (" + barricadeCount + " barricades)\n" +
      "\u2022 Duration: " + months + " month(s)\n" +
      "\u2022 Delivery zip: " + zip + "\n\n" +
      "*Estimated Total: " + total + "*\n\n" +
      "*CSR:* " + (csrName || "N/A") + "\n" +
      "*Outcome:* " + (outcome || "N/A") +
      (notes ? "\n*Notes:* " + notes : "");
  },

  // ---- PURCHASE ----
  buildPurchaseText: function () {
    var name = document.getElementById("sales-cust-name").value.trim();
    var phone = document.getElementById("sales-cust-phone").value.trim();
    var email = document.getElementById("sales-cust-email").value.trim();
    var address = document.getElementById("sales-cust-address").value.trim();
    var csrName = document.getElementById("sales-csr-name").value.trim();
    var outcome = document.getElementById("sales-call-outcome").value;
    var notes = document.getElementById("sales-csr-notes").value.trim();

    var products = [];
    document.querySelectorAll("#sales-product-body tr").forEach(function (row) {
      var input = row.querySelector("input");
      var qty = parseInt(input.value) || 0;
      if (qty > 0) {
        var productName = row.querySelector("td").textContent;
        products.push(qty + "x " + productName);
      }
    });

    var totalEl = document.querySelector("#sales-summary-content .summary-total");
    var total = totalEl ? totalEl.lastElementChild.textContent : "N/A";

    return "\uD83D\uDED2 *FENCE PURCHASE INQUIRY*\n" +
      "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n" +
      "*Customer:* " + (name || "N/A") + "\n" +
      "*Phone:* " + (phone || "N/A") + "\n" +
      "*Email:* " + (email || "N/A") + "\n" +
      "*Delivery Address:* " + (address || "N/A") + "\n\n" +
      "*Items:*\n" +
      (products.length > 0 ? products.map(function (p) { return "\u2022 " + p; }).join("\n") : "\u2022 None") + "\n\n" +
      "*Estimated Total: " + total + "*\n\n" +
      "*CSR:* " + (csrName || "N/A") + "\n" +
      "*Outcome:* " + (outcome || "N/A") +
      (notes ? "\n*Notes:* " + notes : "");
  },

  // ---- ISSUE ----
  buildIssueText: function () {
    var name = document.getElementById("issue-cust-name").value.trim();
    var phone = document.getElementById("issue-cust-phone").value.trim();
    var address = document.getElementById("issue-site-address").value.trim();
    var orderNum = document.getElementById("issue-order-num").value.trim();
    var issueType = Utils.getRadioValue("issue-type") || "N/A";
    var description = document.getElementById("issue-description").value.trim();
    var priority = Utils.getRadioValue("issue-priority") || "N/A";
    var csrName = document.getElementById("issue-csr-name").value.trim();
    var outcome = document.getElementById("issue-call-outcome").value;
    var notes = document.getElementById("issue-csr-notes").value.trim();

    return "\u26A0\uFE0F *RENTAL ISSUE REPORTED*\n" +
      "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n" +
      "*Customer:* " + (name || "N/A") + "\n" +
      "*Phone:* " + (phone || "N/A") + "\n" +
      "*Rental Site:* " + (address || "N/A") + "\n" +
      "*Order #:* " + (orderNum || "N/A") + "\n\n" +
      "*Issue Type:* " + issueType + "\n" +
      "*Description:* " + (description || "N/A") + "\n" +
      "*Priority:* " + priority + "\n\n" +
      "*CSR:* " + (csrName || "N/A") + "\n" +
      "*Outcome:* " + (outcome || "N/A") +
      (notes ? "\n*Notes:* " + notes : "");
  },

  // ---- REMOVAL ----
  buildRemovalText: function () {
    var name = document.getElementById("removal-cust-name").value.trim();
    var phone = document.getElementById("removal-cust-phone").value.trim();
    var address = document.getElementById("removal-site-address").value.trim();
    var orderNum = document.getElementById("removal-order-num").value.trim();
    var prefDate = document.getElementById("removal-preferred-date").value || "N/A";
    var instructions = document.getElementById("removal-instructions").value.trim();
    var csrName = document.getElementById("removal-csr-name").value.trim();
    var outcome = document.getElementById("removal-call-outcome").value;
    var notes = document.getElementById("removal-csr-notes").value.trim();

    return "\uD83D\uDCE6 *REMOVAL REQUEST*\n" +
      "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n" +
      "*Customer:* " + (name || "N/A") + "\n" +
      "*Phone:* " + (phone || "N/A") + "\n" +
      "*Rental Site:* " + (address || "N/A") + "\n" +
      "*Order #:* " + (orderNum || "N/A") + "\n\n" +
      "*Preferred Date:* " + prefDate + "\n" +
      (instructions ? "*Special Instructions:* " + instructions + "\n\n" : "\n") +
      "*CSR:* " + (csrName || "N/A") + "\n" +
      "*Outcome:* " + (outcome || "N/A") +
      (notes ? "\n*Notes:* " + notes : "");
  },

  // ---- GENERAL ----
  buildGeneralText: function () {
    var name = document.getElementById("general-cust-name").value.trim();
    var phone = document.getElementById("general-cust-phone").value.trim();
    var topic = document.getElementById("general-topic").value || "N/A";
    var summary = document.getElementById("general-summary").value.trim();
    var csrName = document.getElementById("general-csr-name").value.trim();
    var followUp = document.getElementById("general-call-outcome").value;
    var notes = document.getElementById("general-csr-notes").value.trim();

    return "\u2753 *GENERAL INQUIRY*\n" +
      "\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n" +
      "*Customer:* " + (name || "N/A") + "\n" +
      "*Phone:* " + (phone || "N/A") + "\n\n" +
      "*Topic:* " + topic + "\n" +
      "*Summary:* " + (summary || "N/A") + "\n\n" +
      "*CSR:* " + (csrName || "N/A") + "\n" +
      "*Follow-up needed:* " + (followUp || "N/A") +
      (notes ? "\n*Notes:* " + notes : "");
  }
};
