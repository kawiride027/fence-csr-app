// ============================================================
// CALL FLOW — Call type selection and screen routing
// ============================================================

var CallFlow = {
  currentFlow: null,

  start: function (flowType) {
    this.currentFlow = flowType;

    // Hide all screens
    var screens = document.querySelectorAll('[id^="screen-"]');
    screens.forEach(function (s) { s.classList.add("hidden"); });

    // Show selected screen
    var screen = document.getElementById("screen-" + flowType);
    if (screen) {
      screen.classList.remove("hidden");
    }

    // Update script panel
    ScriptPanel.showForFlow(flowType, "intro");

    // Scroll main panel to top
    document.getElementById("main-panel").scrollTop = 0;
  },

  reset: function () {
    this.currentFlow = null;

    // Hide all screens, show home
    var screens = document.querySelectorAll('[id^="screen-"]');
    screens.forEach(function (s) { s.classList.add("hidden"); });
    document.getElementById("screen-home").classList.remove("hidden");

    // Reset script panel
    ScriptPanel.showDefault();

    // Scroll to top
    document.getElementById("main-panel").scrollTop = 0;

    // Collapse mobile script panel if expanded
    var scriptPanel = document.getElementById("script-panel");
    scriptPanel.classList.remove("expanded");
  },

  // Called by estimators when a step changes — updates the script panel
  onStepChange: function (flowType, stepKey) {
    ScriptPanel.showForFlow(flowType, stepKey);
  }
};
