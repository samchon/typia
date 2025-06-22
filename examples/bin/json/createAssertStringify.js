import typia from "typia";
import * as __typia_transform__assertGuard from "typia/lib/internal/_assertGuard.js";
import * as __typia_transform__isFormatDate from "typia/lib/internal/_isFormatDate.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__isTypeInt32 from "typia/lib/internal/_isTypeInt32.js";
import * as __typia_transform__isTypeUint32 from "typia/lib/internal/_isTypeUint32.js";
import * as __typia_transform__jsonStringifyNumber from "typia/lib/internal/_jsonStringifyNumber.js";
import * as __typia_transform__jsonStringifyString from "typia/lib/internal/_jsonStringifyString.js";

export const assertDepartment = (() => {
  const _io0 = (input) =>
    "string" === typeof input.id &&
    __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
    "string" === typeof input.name &&
    3 <= input.name.length &&
    "number" === typeof input.limit &&
    __typia_transform__isTypeInt32._isTypeInt32(input.limit) &&
    Array.isArray(input.clerks) &&
    input.clerks.every(
      (elem) => "object" === typeof elem && null !== elem && _io1(elem),
    );
  const _io1 = (input) =>
    "string" === typeof input.name &&
    "number" === typeof input.age &&
    __typia_transform__isTypeUint32._isTypeUint32(input.age) &&
    19 < input.age &&
    input.age <= 100 &&
    "number" === typeof input.authority &&
    Number.isFinite(input.authority) &&
    "string" === typeof input.joined_at &&
    __typia_transform__isFormatDate._isFormatDate(input.joined_at);
  const _ao0 = (input, _path, _exceptionable = true) =>
    (("string" === typeof input.id &&
      (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.json.createAssertStringify",
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertStringify",
          path: _path + ".id",
          expected: '(string & Format<"uuid">)',
          value: input.id,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.name &&
      (3 <= input.name.length ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.json.createAssertStringify",
            path: _path + ".name",
            expected: "string & MinLength<3>",
            value: input.name,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertStringify",
          path: _path + ".name",
          expected: "(string & MinLength<3>)",
          value: input.name,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.limit &&
      (__typia_transform__isTypeInt32._isTypeInt32(input.limit) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.json.createAssertStringify",
            path: _path + ".limit",
            expected: 'number & Type<"int32">',
            value: input.limit,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertStringify",
          path: _path + ".limit",
          expected: '(number & Type<"int32">)',
          value: input.limit,
        },
        _errorFactory,
      )) &&
    (((Array.isArray(input.clerks) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertStringify",
          path: _path + ".clerks",
          expected: "Array<IClerk>",
          value: input.clerks,
        },
        _errorFactory,
      )) &&
      input.clerks.every(
        (elem, _index2) =>
          ((("object" === typeof elem && null !== elem) ||
            __typia_transform__assertGuard._assertGuard(
              _exceptionable,
              {
                method: "typia.json.createAssertStringify",
                path: _path + ".clerks[" + _index2 + "]",
                expected: "IClerk",
                value: elem,
              },
              _errorFactory,
            )) &&
            _ao1(
              elem,
              _path + ".clerks[" + _index2 + "]",
              true && _exceptionable,
            )) ||
          __typia_transform__assertGuard._assertGuard(
            _exceptionable,
            {
              method: "typia.json.createAssertStringify",
              path: _path + ".clerks[" + _index2 + "]",
              expected: "IClerk",
              value: elem,
            },
            _errorFactory,
          ),
      )) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertStringify",
          path: _path + ".clerks",
          expected: "Array<IClerk>",
          value: input.clerks,
        },
        _errorFactory,
      ));
  const _ao1 = (input, _path, _exceptionable = true) =>
    ("string" === typeof input.name ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertStringify",
          path: _path + ".name",
          expected: "string",
          value: input.name,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.age &&
      (__typia_transform__isTypeUint32._isTypeUint32(input.age) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.json.createAssertStringify",
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
            method: "typia.json.createAssertStringify",
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
            method: "typia.json.createAssertStringify",
            path: _path + ".age",
            expected: "number & Maximum<100>",
            value: input.age,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertStringify",
          path: _path + ".age",
          expected:
            '(number & Type<"uint32"> & ExclusiveMinimum<19> & Maximum<100>)',
          value: input.age,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.authority &&
      Number.isFinite(input.authority)) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertStringify",
          path: _path + ".authority",
          expected: "number",
          value: input.authority,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.joined_at &&
      (__typia_transform__isFormatDate._isFormatDate(input.joined_at) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.json.createAssertStringify",
            path: _path + ".joined_at",
            expected: 'string & Format<"date">',
            value: input.joined_at,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.json.createAssertStringify",
          path: _path + ".joined_at",
          expected: '(string & Format<"date">)',
          value: input.joined_at,
        },
        _errorFactory,
      ));
  const _so0 = (input) =>
    `{"id":${__typia_transform__jsonStringifyString._jsonStringifyString(input.id)},"name":${__typia_transform__jsonStringifyString._jsonStringifyString(input.name)},"limit":${__typia_transform__jsonStringifyNumber._jsonStringifyNumber(input.limit)},"clerks":${`[${input.clerks.map((elem) => _so1(elem)).join(",")}]`}}`;
  const _so1 = (input) =>
    `{"name":${__typia_transform__jsonStringifyString._jsonStringifyString(input.name)},"age":${__typia_transform__jsonStringifyNumber._jsonStringifyNumber(input.age)},"authority":${__typia_transform__jsonStringifyNumber._jsonStringifyNumber(input.authority)},"joined_at":${__typia_transform__jsonStringifyString._jsonStringifyString(input.joined_at)}}`;
  const __is = (input) =>
    "object" === typeof input && null !== input && _io0(input);
  let _errorFactory;
  const __assert = (input, errorFactory) => {
    if (false === __is(input)) {
      _errorFactory = errorFactory;
      ((input, _path, _exceptionable = true) =>
        ((("object" === typeof input && null !== input) ||
          __typia_transform__assertGuard._assertGuard(
            true,
            {
              method: "typia.json.createAssertStringify",
              path: _path + "",
              expected: "IDepartment",
              value: input,
            },
            _errorFactory,
          )) &&
          _ao0(input, _path + "", true)) ||
        __typia_transform__assertGuard._assertGuard(
          true,
          {
            method: "typia.json.createAssertStringify",
            path: _path + "",
            expected: "IDepartment",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
  const __stringify = (input) => _so0(input);
  return (input, errorFactory) => {
    __assert(input, errorFactory);
    return __stringify(input);
  };
})();
