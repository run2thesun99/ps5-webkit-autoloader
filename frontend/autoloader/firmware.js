"use strict";

// This build bundles only the PS5 10.01 offsets and always loads that table.
// Firmware detection and version rejection are intentionally disabled.
window.fw_str = "10.01";
window.firmware = {
  rejection() {
    return null;
  },
};
