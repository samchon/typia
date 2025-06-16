import typia from "typia";
import * as __typia_transform__validateReport from "typia/lib/internal/_validateReport.js";

const func = (() => {
  const __validate_param_0 = (() => {
    const __is = (input) => "number" === typeof input && Number.isFinite(input);
    let errors;
    let _report;
    return (input) => {
      if (false === __is(input)) {
        errors = [];
        _report = __typia_transform__validateReport._validateReport(errors);
        ((input, _path, _exceptionable = true) =>
          ("number" === typeof input && Number.isFinite(input)) ||
          _report(true, {
            path: _path + "",
            expected: "number",
            value: input,
          }))(input, "$input", true);
        const success = 0 === errors.length;
        return success
          ? {
              success,
              data: input,
            }
          : {
              success,
              errors,
              data: input,
            };
      }
      return {
        success: true,
        data: input,
      };
    };
  })();
  const __validate_param_1 = (() => {
    const __is = (input) => "number" === typeof input && Number.isFinite(input);
    let errors;
    let _report;
    return (input) => {
      if (false === __is(input)) {
        errors = [];
        _report = __typia_transform__validateReport._validateReport(errors);
        ((input, _path, _exceptionable = true) =>
          ("number" === typeof input && Number.isFinite(input)) ||
          _report(true, {
            path: _path + "",
            expected: "number",
            value: input,
          }))(input, "$input", true);
        const success = 0 === errors.length;
        return success
          ? {
              success,
              data: input,
            }
          : {
              success,
              errors,
              data: input,
            };
      }
      return {
        success: true,
        data: input,
      };
    };
  })();
  const __validate_return = (() => {
    const __is = (input) => "number" === typeof input && Number.isFinite(input);
    let errors;
    let _report;
    return (input) => {
      if (false === __is(input)) {
        errors = [];
        _report = __typia_transform__validateReport._validateReport(errors);
        ((input, _path, _exceptionable = true) =>
          ("number" === typeof input && Number.isFinite(input)) ||
          _report(true, {
            path: _path + "",
            expected: "number",
            value: input,
          }))(input, "$input", true);
        const success = 0 === errors.length;
        return success
          ? {
              success,
              data: input,
            }
          : {
              success,
              errors,
              data: input,
            };
      }
      return {
        success: true,
        data: input,
      };
    };
  })();
  return (x, y) => {
    const paramErrorResults = [__validate_param_0(x), __validate_param_1(y)]
      .map((r, i) =>
        true === r.success
          ? r
          : {
              ...r,
              errors: r.errors.map((error) => ({
                ...error,
                path: error.path.replace("$input", `$input.parameters[${i}]`),
              })),
            },
      )
      .filter((r) => false === r.success);
    if (0 !== paramErrorResults.length)
      return {
        success: false,
        errors: paramErrorResults.map((r) => r.errors).flat(),
      };
    const result = __validate_return(((x, y) => x + y)(x, y));
    if (false === result.success)
      result.errors = result.errors.map((error) => ({
        ...error,
        path: error.path.replace("$input", "$input.return"),
      }));
    return result;
  };
})();
func(3, 4);
func(4, 5);
