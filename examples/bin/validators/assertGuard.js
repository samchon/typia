import typia from "typia";
import * as __typia_transform__assertGuard from "typia/lib/internal/_assertGuard.js";

const input = { x: 1, y: 2 };
// PERFORM THE ASSERTION GUARD
(() => {
  const _io0 = (input) =>
    "number" === typeof input.x &&
    Number.isFinite(input.x) &&
    "number" === typeof input.y &&
    Number.isFinite(input.y);
  const _ao0 = (input, _path, _exceptionable = true) =>
    (("number" === typeof input.x && Number.isFinite(input.x)) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.assertGuard",
          path: _path + ".x",
          expected: "number",
          value: input.x,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.y && Number.isFinite(input.y)) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.assertGuard",
          path: _path + ".y",
          expected: "number",
          value: input.y,
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
              method: "typia.assertGuard",
              path: _path + "",
              expected: "IPoint",
              value: input,
            },
            _errorFactory,
          )) &&
          _ao0(input, _path + "", true)) ||
        __typia_transform__assertGuard._assertGuard(
          true,
          {
            method: "typia.assertGuard",
            path: _path + "",
            expected: "IPoint",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
  };
})()(input);
// FROM NOW ON, "input" IS THE "IPoint" TYPE
input.x; // OK
input.y; // OK
