import typia from "typia";
import * as __typia_transform__createStandardSchema from "typia/lib/internal/_createStandardSchema.js";
import * as __typia_transform__validateReport from "typia/lib/internal/_validateReport.js";

export const validateSomething = (() => {
  const _io0 = (input) =>
    "string" === typeof input.dollar &&
    input.dollar[0] === "$" &&
    !isNaN(Number(input.dollar.substring(1).split(",").join(""))) &&
    "string" === typeof input.postfix &&
    input.postfix.endsWith("!!!") &&
    "number" === typeof input.isEven &&
    Number.isFinite(input.isEven) &&
    input.isEven % 2 === 0;
  const _vo0 = (input, _path, _exceptionable = true) =>
    [
      ("string" === typeof input.dollar &&
        ((input.dollar[0] === "$" &&
          !isNaN(Number(input.dollar.substring(1).split(",").join("")))) ||
          _report(_exceptionable, {
            path: _path + ".dollar",
            expected: "string & Dollar",
            value: input.dollar,
          }))) ||
        _report(_exceptionable, {
          path: _path + ".dollar",
          expected: "(string & Dollar)",
          value: input.dollar,
        }),
      ("string" === typeof input.postfix &&
        (input.postfix.endsWith("!!!") ||
          _report(_exceptionable, {
            path: _path + ".postfix",
            expected: 'string & Postfix<"!!!">',
            value: input.postfix,
          }))) ||
        _report(_exceptionable, {
          path: _path + ".postfix",
          expected: '(string & Postfix<"!!!">)',
          value: input.postfix,
        }),
      ("number" === typeof input.isEven &&
        (Number.isFinite(input.isEven) ||
          _report(_exceptionable, {
            path: _path + ".isEven",
            expected: "number",
            value: input.isEven,
          })) &&
        (input.isEven % 2 === 0 ||
          _report(_exceptionable, {
            path: _path + ".isEven",
            expected: "number & IsEven<number>",
            value: input.isEven,
          }))) ||
        _report(_exceptionable, {
          path: _path + ".isEven",
          expected: "(number & IsEven<number>)",
          value: input.isEven,
        }),
    ].every((flag) => flag);
  const __is = (input) =>
    "object" === typeof input && null !== input && _io0(input);
  let errors;
  let _report;
  return __typia_transform__createStandardSchema._createStandardSchema(
    (input) => {
      if (false === __is(input)) {
        errors = [];
        _report = __typia_transform__validateReport._validateReport(errors);
        ((input, _path, _exceptionable = true) =>
          ((("object" === typeof input && null !== input) ||
            _report(true, {
              path: _path + "",
              expected: "Something",
              value: input,
            })) &&
            _vo0(input, _path + "", true)) ||
          _report(true, {
            path: _path + "",
            expected: "Something",
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
    },
  );
})();
