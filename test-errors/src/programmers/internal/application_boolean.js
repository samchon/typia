"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.application_boolean = void 0;
const application_default_1 = require("./application_default");
/**
 * @internal
 */
const application_boolean = (attribute) => ({
    ...attribute,
    default: (0, application_default_1.application_default)(attribute)((alias) => alias === "true" || alias === "false")((str) => Boolean(str)),
    type: "boolean",
});
exports.application_boolean = application_boolean;
