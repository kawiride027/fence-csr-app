// ============================================================
// SCRIPT PANEL — Renders call scripts based on current flow/step
// ============================================================

var ScriptPanel = {
  currentFlow: null,
  currentStep: null,

  showDefault: function () {
    this.currentFlow = null;
    this.currentStep = null;
    var el = document.getElementById("script-content");
    el.innerHTML = '<div class="script-block">' +
      '<div class="script-say">Select a call type to get started. The script will guide you through each step of the conversation.</div>' +
      '</div>';
  },

  showForFlow: function (flowType, stepKey) {
    // Don't re-render if already showing this step
    if (this.currentFlow === flowType && this.currentStep === stepKey) return;
    this.currentFlow = flowType;
    this.currentStep = stepKey;

    var flowData = SCRIPT_DATA[flowType];
    if (!flowData || !flowData[stepKey]) {
      // If no specific script for this step, keep current
      return;
    }

    var script = flowData[stepKey];
    var el = document.getElementById("script-content");
    var html = "";

    // Say block
    if (script.say) {
      html += '<div class="script-block">';
      html += '<div class="script-block-title">What to Say</div>';
      html += '<div class="script-say">' + script.say + '</div>';
      html += '</div>';
    }

    // Ask block
    if (script.ask) {
      html += '<div class="script-block">';
      html += '<div class="script-block-title">Key Question</div>';
      html += '<div class="script-ask">' + script.ask + '</div>';
      html += '</div>';
    }

    // Tips block
    if (script.tips && script.tips.length > 0) {
      html += '<div class="script-block script-tips">';
      html += '<div class="script-block-title">Tips</div>';
      html += '<ul>';
      script.tips.forEach(function (tip) {
        html += '<li>' + tip + '</li>';
      });
      html += '</ul>';
      html += '</div>';
    }

    // Objections block
    if (script.objections && script.objections.length > 0) {
      html += '<div class="script-block script-objections">';
      html += '<div class="script-block-title">If They Say...</div>';
      script.objections.forEach(function (obj, idx) {
        html += '<div class="objection-card" id="objection-' + flowType + '-' + stepKey + '-' + idx + '">';
        html += '<button class="objection-trigger" onclick="ScriptPanel.toggleObjection(this)">' + obj.trigger + '</button>';
        html += '<div class="objection-response">' + obj.response + '</div>';
        html += '</div>';
      });
      html += '</div>';
    }

    el.innerHTML = html;
  },

  toggleObjection: function (btn) {
    var card = btn.parentElement;
    card.classList.toggle("open");
  },

  toggleMobile: function () {
    var panel = document.getElementById("script-panel");
    panel.classList.toggle("expanded");
    var toggle = document.getElementById("script-toggle");
    if (panel.classList.contains("expanded")) {
      toggle.innerHTML = "&#x1F4D6; Call Script &#x25BC;";
    } else {
      toggle.innerHTML = "&#x1F4D6; Call Script &#x25B2;";
    }
  }
};
