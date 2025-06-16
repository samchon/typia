import typia from "typia";
import * as __typia_transform__randomFormatDatetime from "typia/lib/internal/_randomFormatDatetime.js";
import * as __typia_transform__randomInteger from "typia/lib/internal/_randomInteger.js";
import * as __typia_transform__randomNumber from "typia/lib/internal/_randomNumber.js";
import * as __typia_transform__randomPattern from "typia/lib/internal/_randomPattern.js";
import * as __typia_transform__randomPick from "typia/lib/internal/_randomPick.js";
import * as __typia_transform__randomString from "typia/lib/internal/_randomString.js";

const data = (() => {
  const _ro0 = (_recursive = false, _depth = 0) => ({
    type: (
      _generator?.integer ?? __typia_transform__randomInteger._randomInteger
    )({
      type: "integer",
    }),
    number: __typia_transform__randomPick._randomPick([
      () => undefined,
      () =>
        (_generator?.number ?? __typia_transform__randomNumber._randomNumber)({
          type: "number",
          exclusiveMinimum: 19,
          maximum: 100,
        }),
    ])(),
    string: (
      _generator?.string ?? __typia_transform__randomString._randomString
    )({
      type: "string",
      minLength: 3,
    }),
    pattern: (
      _generator?.pattern ?? __typia_transform__randomPattern._randomPattern
    )(new RegExp("^[a-z]+$")),
    format: __typia_transform__randomPick._randomPick([
      () => null,
      () =>
        (
          _generator?.datetime ??
          __typia_transform__randomFormatDatetime._randomFormatDatetime
        )(),
    ])(),
  });
  let _generator;
  return (generator) => {
    _generator = generator;
    return _ro0();
  };
})()();
console.log(data);
