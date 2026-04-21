"use strict";

const { definePlugin } = require("@typia/ttsc/plugin");

module.exports = definePlugin((config) => ({
  name: "banner-plugin",
  transformOutput(context) {
    const banner = typeof config.banner === "string" ? config.banner : "/* plugin */";
    return `${banner}\n${context.code}`;
  },
}));
