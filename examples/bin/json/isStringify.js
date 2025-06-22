import typia from "typia";
import * as __typia_transform__isFormatDate from "typia/lib/internal/_isFormatDate.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__isTypeInt32 from "typia/lib/internal/_isTypeInt32.js";
import * as __typia_transform__isTypeUint32 from "typia/lib/internal/_isTypeUint32.js";
import * as __typia_transform__jsonStringifyNumber from "typia/lib/internal/_jsonStringifyNumber.js";
import * as __typia_transform__jsonStringifyString from "typia/lib/internal/_jsonStringifyString.js";
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
    age: (
      _generator?.integer ?? __typia_transform__randomInteger._randomInteger
    )({
      type: "integer",
      minimum: 0,
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
const json = (() => {
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
  const _so0 = (input) =>
    `{"id":${__typia_transform__jsonStringifyString._jsonStringifyString(input.id)},"name":${__typia_transform__jsonStringifyString._jsonStringifyString(input.name)},"limit":${__typia_transform__jsonStringifyNumber._jsonStringifyNumber(input.limit)},"clerks":${`[${input.clerks.map((elem) => _so1(elem)).join(",")}]`}}`;
  const _so1 = (input) =>
    `{"name":${__typia_transform__jsonStringifyString._jsonStringifyString(input.name)},"age":${__typia_transform__jsonStringifyNumber._jsonStringifyNumber(input.age)},"authority":${__typia_transform__jsonStringifyNumber._jsonStringifyNumber(input.authority)},"joined_at":${__typia_transform__jsonStringifyString._jsonStringifyString(input.joined_at)}}`;
  const __is = (input) =>
    "object" === typeof input && null !== input && _io0(input);
  const __stringify = (input) => _so0(input);
  return (input) => (__is(input) ? __stringify(input) : null);
})()(department);
console.log(json); // not null, but string
