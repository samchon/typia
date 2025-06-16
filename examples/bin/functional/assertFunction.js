import typia from "typia";
import * as __typia_transform__assertGuard from "typia/lib/internal/_assertGuard.js";
import * as __typia_transform__functionalTypeGuardErrorFactory from "typia/lib/internal/_functionalTypeGuardErrorFactory.js";

const func = (() => {
  const errorFactoryWrapper =
    __typia_transform__functionalTypeGuardErrorFactory._functionalTypeGuardErrorFactory;
  const __assert_param_0 = (() => {
    const __is = (input) => "number" === typeof input && Number.isFinite(input);
    let _errorFactory;
    return (
      input,
      errorFactory = (p) =>
        errorFactoryWrapper({
          ...p,
          path: p.path
            ? p.path.replace("$input", "$input.parameters[0]")
            : undefined,
        }),
    ) => {
      if (false === __is(input)) {
        _errorFactory = errorFactory;
        ((input, _path, _exceptionable = true) =>
          ("number" === typeof input && Number.isFinite(input)) ||
          __typia_transform__assertGuard._assertGuard(
            true,
            {
              method: "typia.functional.assertFunction",
              path: _path + "",
              expected: "number",
              value: input,
            },
            _errorFactory,
          ))(input, "$input", true);
      }
      return input;
    };
  })();
  const __assert_param_1 = (() => {
    const __is = (input) => "number" === typeof input && Number.isFinite(input);
    let _errorFactory;
    return (
      input,
      errorFactory = (p) =>
        errorFactoryWrapper({
          ...p,
          path: p.path
            ? p.path.replace("$input", "$input.parameters[1]")
            : undefined,
        }),
    ) => {
      if (false === __is(input)) {
        _errorFactory = errorFactory;
        ((input, _path, _exceptionable = true) =>
          ("number" === typeof input && Number.isFinite(input)) ||
          __typia_transform__assertGuard._assertGuard(
            true,
            {
              method: "typia.functional.assertFunction",
              path: _path + "",
              expected: "number",
              value: input,
            },
            _errorFactory,
          ))(input, "$input", true);
      }
      return input;
    };
  })();
  const __assert_return = (() => {
    const __is = (input) => "number" === typeof input && Number.isFinite(input);
    let _errorFactory;
    return (
      input,
      errorFactory = (p) =>
        errorFactoryWrapper({
          ...p,
          path: p.path ? p.path.replace("$input", "$input.return") : undefined,
        }),
    ) => {
      if (false === __is(input)) {
        _errorFactory = errorFactory;
        ((input, _path, _exceptionable = true) =>
          ("number" === typeof input && Number.isFinite(input)) ||
          __typia_transform__assertGuard._assertGuard(
            true,
            {
              method: "typia.functional.assertFunction",
              path: _path + "",
              expected: "number",
              value: input,
            },
            _errorFactory,
          ))(input, "$input", true);
      }
      return input;
    };
  })();
  return (x, y) => {
    __assert_param_0(x);
    __assert_param_1(y);
    return __assert_return(((x, y) => x + y)(x, y));
  };
})();
func(3, 4);
func(4, 5);
