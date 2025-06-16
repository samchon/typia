import typia from "typia";
import * as __typia_transform__accessExpressionAsString from "typia/lib/internal/_accessExpressionAsString.js";
import * as __typia_transform__isFormatEmail from "typia/lib/internal/_isFormatEmail.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__isTypeUint32 from "typia/lib/internal/_isTypeUint32.js";
import * as __typia_transform__validateReport from "typia/lib/internal/_validateReport.js";

const res = (() => {
  const _io0 = (input, _exceptionable = true) =>
    "string" === typeof input.id &&
    __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
    "string" === typeof input.email &&
    __typia_transform__isFormatEmail._isFormatEmail(input.email) &&
    "number" === typeof input.age &&
    __typia_transform__isTypeUint32._isTypeUint32(input.age) &&
    19 < input.age &&
    input.age <= 100 &&
    (3 === Object.keys(input).length ||
      Object.keys(input).every((key) => {
        if (["id", "email", "age"].some((prop) => key === prop)) return true;
        const value = input[key];
        if (undefined === value) return true;
        return false;
      }));
  const _vo0 = (input, _path, _exceptionable = true) =>
    [
      ("string" === typeof input.id &&
        (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
          _report(_exceptionable, {
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          }))) ||
        _report(_exceptionable, {
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        }),
      ("string" === typeof input.email &&
        (__typia_transform__isFormatEmail._isFormatEmail(input.email) ||
          _report(_exceptionable, {
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          }))) ||
        _report(_exceptionable, {
          path: _path + ".email",
          expected: '(string & Format<"email">)',
          value: input.email,
        }),
      ("number" === typeof input.age &&
        (__typia_transform__isTypeUint32._isTypeUint32(input.age) ||
          _report(_exceptionable, {
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          })) &&
        (19 < input.age ||
          _report(_exceptionable, {
            path: _path + ".age",
            expected: "number & ExclusiveMinimum<19>",
            value: input.age,
          })) &&
        (input.age <= 100 ||
          _report(_exceptionable, {
            path: _path + ".age",
            expected: "number & Maximum<100>",
            value: input.age,
          }))) ||
        _report(_exceptionable, {
          path: _path + ".age",
          expected:
            '(number & Type<"uint32"> & ExclusiveMinimum<19> & Maximum<100>)',
          value: input.age,
        }),
      3 === Object.keys(input).length ||
        false === _exceptionable ||
        Object.keys(input)
          .map((key) => {
            if (["id", "email", "age"].some((prop) => key === prop))
              return true;
            const value = input[key];
            if (undefined === value) return true;
            return _report(_exceptionable, {
              path:
                _path +
                __typia_transform__accessExpressionAsString._accessExpressionAsString(
                  key,
                ),
              expected: "undefined",
              value: value,
            });
          })
          .every((flag) => flag),
    ].every((flag) => flag);
  const __is = (input, _exceptionable = true) =>
    "object" === typeof input && null !== input && _io0(input, true);
  let errors;
  let _report;
  return (input) => {
    if (false === __is(input)) {
      errors = [];
      _report = __typia_transform__validateReport._validateReport(errors);
      ((input, _path, _exceptionable = true) =>
        ((("object" === typeof input && null !== input) ||
          _report(true, {
            path: _path + "",
            expected: "IMember",
            value: input,
          })) &&
          _vo0(input, _path + "", true)) ||
        _report(true, {
          path: _path + "",
          expected: "IMember",
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
})()({
  age: 30,
  email: "samchon.github@gmail.com",
  id: "something", // wrong, must be string (uuid)
  sex: 1, // extra property
});
if (res.success === false) console.log(res.errors);
