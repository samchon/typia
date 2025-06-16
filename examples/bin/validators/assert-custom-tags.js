import typia from "typia";
import * as __typia_transform__assertGuard from "typia/lib/internal/_assertGuard.js";

export const assertSomething = (() => {
  const _io0 = (input) =>
    "string" === typeof input.dollar &&
    input.dollar[0] === "$" &&
    !isNaN(Number(input.dollar.substring(1).split(",").join(""))) &&
    "string" === typeof input.postfix &&
    input.postfix.endsWith("!!!") &&
    "number" === typeof input.isEven &&
    Number.isFinite(input.isEven) &&
    input.isEven % 2 === 0;
  const _ao0 = (input, _path, _exceptionable = true) =>
    (("string" === typeof input.dollar &&
      ((input.dollar[0] === "$" &&
        !isNaN(Number(input.dollar.substring(1).split(",").join("")))) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.createAssert",
            path: _path + ".dollar",
            expected: "string & Dollar",
            value: input.dollar,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.createAssert",
          path: _path + ".dollar",
          expected: "(string & Dollar)",
          value: input.dollar,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.postfix &&
      (input.postfix.endsWith("!!!") ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.createAssert",
            path: _path + ".postfix",
            expected: 'string & Postfix<"!!!">',
            value: input.postfix,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.createAssert",
          path: _path + ".postfix",
          expected: '(string & Postfix<"!!!">)',
          value: input.postfix,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.isEven &&
      (Number.isFinite(input.isEven) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.createAssert",
            path: _path + ".isEven",
            expected: "number",
            value: input.isEven,
          },
          _errorFactory,
        )) &&
      (input.isEven % 2 === 0 ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.createAssert",
            path: _path + ".isEven",
            expected: "number & IsEven<number>",
            value: input.isEven,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.createAssert",
          path: _path + ".isEven",
          expected: "(number & IsEven<number>)",
          value: input.isEven,
        },
        _errorFactory,
      ));
  const __is = (input) =>
    "object" === typeof input && null !== input && _io0(input);
  let _errorFactory;
  return (input, errorFactory) => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input, _path, _exceptionable = true) =>
        ((("object" === typeof input && null !== input) ||
          __typia_transform__assertGuard._assertGuard(
            true,
            {
              method: "typia.createAssert",
              path: _path + "",
              expected: "Something",
              value: input,
            },
            _errorFactory,
          )) &&
          _ao0(input, _path + "", true)) ||
        __typia_transform__assertGuard._assertGuard(
          true,
          {
            method: "typia.createAssert",
            path: _path + "",
            expected: "Something",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
})();
