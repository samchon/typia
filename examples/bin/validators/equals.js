import typia from "typia";
import * as __typia_transform__isFormatEmail from "typia/lib/internal/_isFormatEmail.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__isTypeUint32 from "typia/lib/internal/_isTypeUint32.js";
import { v4 } from "uuid";

const input = {
  id: v4(),
  email: "samchon.github@gmail.com",
  age: 30,
  extra: "superfluous property", // extra
};
const is = (() => {
  const _io0 = (input) =>
    "string" === typeof input.id &&
    __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
    "string" === typeof input.email &&
    __typia_transform__isFormatEmail._isFormatEmail(input.email) &&
    "number" === typeof input.age &&
    __typia_transform__isTypeUint32._isTypeUint32(input.age) &&
    19 < input.age &&
    input.age <= 100;
  return (input) => "object" === typeof input && null !== input && _io0(input);
})()(input);
const equals = (() => {
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
  return (input, _exceptionable = true) =>
    "object" === typeof input && null !== input && _io0(input, true);
})()(input);
console.log(is, equals); // true, false
