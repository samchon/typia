import * as __typia_transform__validateReport from "typia/lib/internal/_validateReport.js";
import * as __typia_transform__createStandardSchema from "typia/lib/internal/_createStandardSchema.js";
import typia from "typia";
const is = /* @__PURE__ */ (() => {
  return (input) => true;
})();
const random = /* @__PURE__ */ (() => {
  let _generator;
  return (generator) => {
    _generator = generator;
    return "any type used...";
  };
})();
const validate = (() => {
  const __is = (input) => true;
  let errors;
  let _report;
  return __typia_transform__createStandardSchema._createStandardSchema((input) => {
    if (false === __is(input)) {
      errors = [];
      _report = __typia_transform__validateReport._validateReport(errors);
      /* @__PURE__ */ ((input2, _path, _exceptionable = true) => true)(input, "$input", true);
      const success = 0 === errors.length;
      return success ? {
        success,
        data: input
      } : {
        success,
        errors,
        data: input
      };
    }
    return {
      success: true,
      data: input
    };
  });
})();
is({});
validate({});
random();
