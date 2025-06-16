import typia from "typia";
import * as __typia_transform__assertGuard from "typia/lib/internal/_assertGuard.js";

(() => {
  const __is = (input) =>
    input instanceof Map &&
    (() =>
      [...input].every(
        (elem) =>
          Array.isArray(elem) &&
          elem.length === 2 &&
          "string" === typeof elem[0] &&
          ("string" === typeof elem[1] ||
            ("number" === typeof elem[1] && Number.isFinite(elem[1])) ||
            "boolean" === typeof elem[1]),
      ))();
  let _errorFactory;
  return (input, errorFactory) => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input, _path, _exceptionable = true) =>
        ((input instanceof Map ||
          __typia_transform__assertGuard._assertGuard(
            true,
            {
              method: "typia.createAssert",
              path: _path + "",
              expected: "Map<string, (boolean | number | string)>",
              value: input,
            },
            _errorFactory,
          )) &&
          (() =>
            [...input].every(
              (elem, _index2) =>
                ((Array.isArray(elem) ||
                  __typia_transform__assertGuard._assertGuard(
                    true,
                    {
                      method: "typia.createAssert",
                      path: _path + "[" + _index2 + "]",
                      expected: "[string, (boolean | number | string)]",
                      value: elem,
                    },
                    _errorFactory,
                  )) &&
                  (elem.length === 2 ||
                    __typia_transform__assertGuard._assertGuard(
                      true,
                      {
                        method: "typia.createAssert",
                        path: _path + "[" + _index2 + "]",
                        expected: "[string, (boolean | number | string)]",
                        value: elem,
                      },
                      _errorFactory,
                    )) &&
                  ("string" === typeof elem[0] ||
                    __typia_transform__assertGuard._assertGuard(
                      true,
                      {
                        method: "typia.createAssert",
                        path: _path + "[" + _index2 + "][0]",
                        expected: "string",
                        value: elem[0],
                      },
                      _errorFactory,
                    )) &&
                  ("string" === typeof elem[1] ||
                    ("number" === typeof elem[1] && Number.isFinite(elem[1])) ||
                    "boolean" === typeof elem[1] ||
                    __typia_transform__assertGuard._assertGuard(
                      true,
                      {
                        method: "typia.createAssert",
                        path: _path + "[" + _index2 + "][1]",
                        expected: "(boolean | number | string)",
                        value: elem[1],
                      },
                      _errorFactory,
                    ))) ||
                __typia_transform__assertGuard._assertGuard(
                  true,
                  {
                    method: "typia.createAssert",
                    path: _path + "[" + _index2 + "]",
                    expected: "[string, (boolean | number | string)]",
                    value: elem,
                  },
                  _errorFactory,
                ),
            ))()) ||
        __typia_transform__assertGuard._assertGuard(
          true,
          {
            method: "typia.createAssert",
            path: _path + "",
            expected: "Map<string, (boolean | number | string)>",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
})();
