import typia from "typia";
import * as __typia_transform__randomFormatEmail from "typia/lib/internal/_randomFormatEmail.js";
import * as __typia_transform__randomFormatUuid from "typia/lib/internal/_randomFormatUuid.js";
import * as __typia_transform__randomInteger from "typia/lib/internal/_randomInteger.js";

const member = (() => {
  const _ro0 = (_recursive = false, _depth = 0) => ({
    id: (
      _generator?.uuid ?? __typia_transform__randomFormatUuid._randomFormatUuid
    )(),
    email: (
      _generator?.email ??
      __typia_transform__randomFormatEmail._randomFormatEmail
    )(),
    age: (
      _generator?.integer ?? __typia_transform__randomInteger._randomInteger
    )({
      type: "integer",
      minimum: 0,
      exclusiveMinimum: 19,
      maximum: 100,
    }),
  });
  let _generator;
  return (generator) => {
    _generator = generator;
    return _ro0();
  };
})()();
console.log(member);
