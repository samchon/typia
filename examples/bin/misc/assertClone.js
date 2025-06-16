import typia from "typia";
import * as __typia_transform__assertGuard from "typia/lib/internal/_assertGuard.js";
import * as __typia_transform__randomArray from "typia/lib/internal/_randomArray.js";
import * as __typia_transform__randomFormatDate from "typia/lib/internal/_randomFormatDate.js";
import * as __typia_transform__randomFormatUuid from "typia/lib/internal/_randomFormatUuid.js";
import * as __typia_transform__randomInteger from "typia/lib/internal/_randomInteger.js";
import * as __typia_transform__randomNumber from "typia/lib/internal/_randomNumber.js";
import * as __typia_transform__randomString from "typia/lib/internal/_randomString.js";

const department = (() => {
  const _ro0 = (_recursive = false, _depth = 0) => ({
    id: (
      _generator?.uuid ?? __typia_transform__randomFormatUuid._randomFormatUuid
    )(),
    name: (_generator?.string ?? __typia_transform__randomString._randomString)(
      {
        type: "string",
        minLength: 3,
      },
    ),
    limit: (
      _generator?.integer ?? __typia_transform__randomInteger._randomInteger
    )({
      type: "integer",
    }),
    clerks: (_generator?.array ?? __typia_transform__randomArray._randomArray)({
      type: "array",
      element: () => _ro1(_recursive, _recursive ? 1 + _depth : _depth),
    }),
  });
  const _ro1 = (_recursive = false, _depth = 0) => ({
    name: (_generator?.string ?? __typia_transform__randomString._randomString)(
      {
        type: "string",
      },
    ),
    age: (_generator?.number ?? __typia_transform__randomNumber._randomNumber)({
      type: "number",
      exclusiveMinimum: 19,
      maximum: 100,
    }),
    authority: (
      _generator?.number ?? __typia_transform__randomNumber._randomNumber
    )({
      type: "number",
    }),
    joined_at: (
      _generator?.date ?? __typia_transform__randomFormatDate._randomFormatDate
    )(),
  });
  let _generator;
  return (generator) => {
    _generator = generator;
    return _ro0();
  };
})()();
const cloned = (() => {
  const _cp0 = (input) => input.map((elem) => _co1(elem));
  const _io0 = (input) =>
    "string" === typeof input.id &&
    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
      input.id,
    ) &&
    "string" === typeof input.name &&
    3 <= input.name.length &&
    "number" === typeof input.limit &&
    Math.floor(input.limit) === input.limit &&
    -2147483648 <= input.limit &&
    input.limit <= 2147483647 &&
    Array.isArray(input.clerks) &&
    input.clerks.every(
      (elem) => "object" === typeof elem && null !== elem && _io1(elem),
    );
  const _io1 = (input) =>
    "string" === typeof input.name &&
    "number" === typeof input.age &&
    19 < input.age &&
    input.age <= 100 &&
    "number" === typeof input.authority &&
    Number.isFinite(input.authority) &&
    "string" === typeof input.joined_at &&
    /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(input.joined_at);
  const _ao0 = (input, _path, _exceptionable = true) =>
    (("string" === typeof input.id &&
      (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
        input.id,
      ) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.misc.assertClone",
            path: _path + ".id",
            expected: 'string & Format<"uuid">',
            value: input.id,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.assertClone",
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
            method: "typia.misc.assertClone",
            path: _path + ".name",
            expected: "string & MinLength<3>",
            value: input.name,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.assertClone",
          path: _path + ".name",
          expected: "(string & MinLength<3>)",
          value: input.name,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.limit &&
      ((Math.floor(input.limit) === input.limit &&
        -2147483648 <= input.limit &&
        input.limit <= 2147483647) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.misc.assertClone",
            path: _path + ".limit",
            expected: 'number & Type<"int32">',
            value: input.limit,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.assertClone",
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
          method: "typia.misc.assertClone",
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
                method: "typia.misc.assertClone",
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
              method: "typia.misc.assertClone",
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
          method: "typia.misc.assertClone",
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
          method: "typia.misc.assertClone",
          path: _path + ".name",
          expected: "string",
          value: input.name,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.age &&
      (19 < input.age ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.misc.assertClone",
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
            method: "typia.misc.assertClone",
            path: _path + ".age",
            expected: "number & Maximum<100>",
            value: input.age,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.assertClone",
          path: _path + ".age",
          expected: "(number & ExclusiveMinimum<19> & Maximum<100>)",
          value: input.age,
        },
        _errorFactory,
      )) &&
    (("number" === typeof input.authority &&
      Number.isFinite(input.authority)) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.assertClone",
          path: _path + ".authority",
          expected: "number",
          value: input.authority,
        },
        _errorFactory,
      )) &&
    (("string" === typeof input.joined_at &&
      (/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(
        input.joined_at,
      ) ||
        __typia_transform__assertGuard._assertGuard(
          _exceptionable,
          {
            method: "typia.misc.assertClone",
            path: _path + ".joined_at",
            expected: 'string & Format<"date">',
            value: input.joined_at,
          },
          _errorFactory,
        ))) ||
      __typia_transform__assertGuard._assertGuard(
        _exceptionable,
        {
          method: "typia.misc.assertClone",
          path: _path + ".joined_at",
          expected: '(string & Format<"date">)',
          value: input.joined_at,
        },
        _errorFactory,
      ));
  const _co0 = (input) => ({
    id: input.id,
    name: input.name,
    limit: input.limit,
    clerks: _cp0(input.clerks),
  });
  const _co1 = (input) => ({
    name: input.name,
    age: input.age,
    authority: input.authority,
    joined_at: input.joined_at,
  });
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
              method: "typia.misc.assertClone",
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
            method: "typia.misc.assertClone",
            path: _path + "",
            expected: "IDepartment",
            value: input,
          },
          _errorFactory,
        ))(input, "$input", true);
    }
    return input;
  };
  const __clone = (input) => _co0(input);
  return (input, errorFactory) => __clone(__assert(input, errorFactory));
})()(department);
console.log(cloned);
