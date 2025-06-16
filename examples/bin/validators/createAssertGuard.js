import typia from "typia";
import * as __typia_transform__assertGuard from "typia/lib/internal/_assertGuard.js";

//MUST DECLARE THE VARIABLE TYPE
const explicit = (() => {
  const __is = (input) => "number" === typeof input && Number.isFinite(input);
  let _errorFactory;
  return (input, errorFactory) => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input, _path, _exceptionable = true) =>
        ("number" === typeof input && Number.isFinite(input)) ||
        __typia_transform__assertGuard._assertGuard(
          true,
          {
            method: "typia.createAssertGuard",
            path: _path + "",
            expected: "number",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
  };
})();
// IF NOT, COMPILATION ERROR BE OCCURRED
const implicit = (() => {
  const __is = (input) => "number" === typeof input && Number.isFinite(input);
  let _errorFactory;
  return (input, errorFactory) => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input, _path, _exceptionable = true) =>
        ("number" === typeof input && Number.isFinite(input)) ||
        __typia_transform__assertGuard._assertGuard(
          true,
          {
            method: "typia.createAssertGuard",
            path: _path + "",
            expected: "number",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
  };
})();
