import typia from "typia";
import * as __typia_transform__assertGuard from "typia/lib/internal/_assertGuard.js";
import * as __typia_transform__httpParameterReadNumber from "typia/lib/internal/_httpParameterReadNumber.js";
import * as __typia_transform__httpParameterReadString from "typia/lib/internal/_httpParameterReadString.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__isTypeUint32 from "typia/lib/internal/_isTypeUint32.js";

(input) => {
  const assert = (() => {
    const __is = (input) =>
      "string" === typeof input &&
      __typia_transform__isFormatUuid._isFormatUuid(input);
    let _errorFactory;
    return (input, errorFactory) => {
      if (false === __is(input)) {
        _errorFactory = errorFactory;
        ((input, _path, _exceptionable = true) =>
          ("string" === typeof input &&
            (__typia_transform__isFormatUuid._isFormatUuid(input) ||
              __typia_transform__assertGuard._assertGuard(
                true,
                {
                  method: "typia.http.createParameter",
                  path: _path + "",
                  expected: 'string & Format<"uuid">',
                  value: input,
                },
                _errorFactory,
              ))) ||
          __typia_transform__assertGuard._assertGuard(
            true,
            {
              method: "typia.http.createParameter",
              path: _path + "",
              expected: '(string & Format<"uuid">)',
              value: input,
            },
            _errorFactory,
          ))(input, "$input", true);
      }
      return input;
    };
  })();
  const value =
    __typia_transform__httpParameterReadString._httpParameterReadString(input);
  return assert(value);
};
(input) => {
  const assert = (() => {
    const __is = (input) =>
      "number" === typeof input &&
      __typia_transform__isTypeUint32._isTypeUint32(input);
    let _errorFactory;
    return (input, errorFactory) => {
      if (false === __is(input)) {
        _errorFactory = errorFactory;
        ((input, _path, _exceptionable = true) =>
          ("number" === typeof input &&
            (__typia_transform__isTypeUint32._isTypeUint32(input) ||
              __typia_transform__assertGuard._assertGuard(
                true,
                {
                  method: "typia.http.createParameter",
                  path: _path + "",
                  expected: 'number & Type<"uint32">',
                  value: input,
                },
                _errorFactory,
              ))) ||
          __typia_transform__assertGuard._assertGuard(
            true,
            {
              method: "typia.http.createParameter",
              path: _path + "",
              expected: '(number & Type<"uint32">)',
              value: input,
            },
            _errorFactory,
          ))(input, "$input", true);
      }
      return input;
    };
  })();
  const value =
    __typia_transform__httpParameterReadNumber._httpParameterReadNumber(input);
  return assert(value);
};
