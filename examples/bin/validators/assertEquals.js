import typia from "typia";
import * as __typia_transform__accessExpressionAsString from "typia/lib/internal/_accessExpressionAsString.js";
import * as __typia_transform__assertGuard from "typia/lib/internal/_assertGuard.js";
import * as __typia_transform__isFormatEmail from "typia/lib/internal/_isFormatEmail.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__isTypeUint32 from "typia/lib/internal/_isTypeUint32.js";
import { v4 } from "uuid";

(() => {
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
  const _ao0 = (input, _path, _exceptionable = true) =>
    (("string" === typeof input.id &&
      (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.assertEquals",
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.assertEquals",
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.email &&
      (__typia_transform__isFormatEmail._isFormatEmail(input.email) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.assertEquals",
            path: _path + ".email",
            expected: 'string & Format<"email">',
            value: input.email,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.assertEquals",
          path: _path + ".email",
          expected: '(string & Format<"email">)',
          value: input.email,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.age &&
      (__typia_transform__isTypeUint32._isTypeUint32(input.age) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.assertEquals",
            path: _path + ".age",
            expected: 'number & Type<"uint32">',
            value: input.age,
          },
          _errorFactory,
        )) &&
      (19 < input.age ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.assertEquals",
            path: _path + ".age",
            expected: "number & ExclusiveMinimum<19>",
            value: input.age,
          },
          _errorFactory,
        )) &&
      (input.age <= 100 ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.assertEquals",
            path: _path + ".age",
            expected: "number & Maximum<100>",
            value: input.age,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.assertEquals",
          path: _path + ".age",
          expected:
            '(number & Type<"uint32"> & ExclusiveMinimum<19> & Maximum<100>)',
          value: input.age,
        },
        _errorFactory,
      )) &&
    (3 === Object.keys(input).length ||
      false === _exceptionable ||
      Object.keys(input).every((key) => {
        if (["id", "email", "age"].some((prop) => key === prop)) return true;
        const value = input[key];
        if (undefined === value) return true;
        return __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.assertEquals",
            path:
              _path +
              __typia_transform__accessExpressionAsString._accessExpressionAsString(
                key,
              ),
            expected: "undefined",
            value: value,
          },
          _errorFactory,
        );
      }));
  const __is = (input, _exceptionable = true) =>
    "object" === typeof input && null !== input && _io0(input, true);
  let _errorFactory;
  return (input, errorFactory) => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input, _path, _exceptionable = true) =>
        ((("object" === typeof input && null !== input) ||
          __typia_transform__assertGuard._assertGuard(
            true,
            {
              method: "typia.assertEquals",
              path: _path + "",
              expected: "IMember",
              value: input,
            },
            _errorFactory,
          )) &&
          _ao0(input, _path + "", true)) ||
        __typia_transform__assertGuard._assertGuard(
          true,
          {
            method: "typia.assertEquals",
            path: _path + "",
            expected: "IMember",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
})()({
  id: v4(),
  email: "samchon.github@gmail.com",
  age: 30,
  sex: 1, // extra
});
