"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OptionPredicator = void 0;
var OptionPredicator;
(function (OptionPredicator) {
    OptionPredicator.numeric = (options) => OptionPredicator.finite(options) || options.numeric === true;
    OptionPredicator.functional = (options) => options.functional === true;
    OptionPredicator.finite = (options) => options.finite === true;
    OptionPredicator.undefined = (options) => options.undefined !== false;
})(OptionPredicator || (exports.OptionPredicator = OptionPredicator = {}));
