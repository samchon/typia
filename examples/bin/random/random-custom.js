import typia from "typia";
import * as __typia_transform__randomFormatUuid from "typia/lib/internal/_randomFormatUuid.js";
import * as __typia_transform__randomNumber from "typia/lib/internal/_randomNumber.js";
import { _randomNumber } from "typia/lib/internal/_randomNumber.js";
import * as __typia_transform__randomString from "typia/lib/internal/_randomString.js";
import { _randomString } from "typia/lib/internal/_randomString.js";

const data = (() => {
  const _ro0 = (_recursive = false, _depth = 0) => ({
    id: (
      _generator?.uuid ?? __typia_transform__randomFormatUuid._randomFormatUuid
    )(),
    dollar: (
      _generator?.string ?? __typia_transform__randomString._randomString
    )({
      type: "string",
      "x-typia-monetary": "dollar",
    }),
    postfix: (
      _generator?.string ?? __typia_transform__randomString._randomString
    )({
      type: "string",
      "x-typia-postfix": "abcd",
    }),
    powerOf: (
      _generator?.number ?? __typia_transform__randomNumber._randomNumber
    )({
      type: "number",
      "x-typia-powerOf": 2,
    }),
  });
  let _generator;
  return (generator) => {
    _generator = generator;
    return _ro0();
  };
})()({
  string: (schema) => {
    if (schema["x-typia-monetary"] === "dollar")
      return "$" + Math.floor(Math.random() * 1_000);
    else if (schema["x-typia-postfix"] !== undefined)
      return _randomString(schema) + schema["x-typia-postfix"];
    return _randomString(schema);
  },
  number: (schema) => {
    if (schema["x-typia-powerOf"] !== undefined) {
      const powerOf = schema["x-typia-powerOf"];
      return Math.pow(powerOf, Math.floor(Math.random() * 10) + 1);
    }
    return _randomNumber(schema);
  },
});
console.log(data);
