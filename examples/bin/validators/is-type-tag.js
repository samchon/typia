import typia from "typia";
import * as __typia_transform__isFormatIpv4 from "typia/lib/internal/_isFormatIpv4.js";
import * as __typia_transform__isFormatIpv6 from "typia/lib/internal/_isFormatIpv6.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__isTypeUint32 from "typia/lib/internal/_isTypeUint32.js";

export const checkCustomTag = (() => {
  const _io0 = (input) =>
    "number" === typeof input.type &&
    __typia_transform__isTypeUint32._isTypeUint32(input.type) &&
    (undefined === input.number ||
      ("number" === typeof input.number &&
        19 < input.number &&
        input.number <= 100)) &&
    "string" === typeof input.string &&
    3 <= input.string.length &&
    "string" === typeof input.pattern &&
    RegExp("^[a-z]+$").test(input.pattern) &&
    (null === input.format ||
      ("string" === typeof input.format &&
        (__typia_transform__isFormatIpv4._isFormatIpv4(input.format) ||
          __typia_transform__isFormatIpv6._isFormatIpv6(input.format)))) &&
    Array.isArray(input.array) &&
    3 <= input.array.length &&
    input.array.length <= 100 &&
    input.array.every(
      (elem) =>
        "string" === typeof elem &&
        __typia_transform__isFormatUuid._isFormatUuid(elem),
    ) &&
    input.map instanceof Map &&
    (() =>
      [...input.map].every(
        (elem) =>
          Array.isArray(elem) &&
          elem.length === 2 &&
          "number" === typeof elem[0] &&
          __typia_transform__isTypeUint32._isTypeUint32(elem[0]) &&
          Array.isArray(elem[1]) &&
          1 <= elem[1].length &&
          elem[1].every(
            (elem) =>
              "string" === typeof elem &&
              __typia_transform__isFormatUuid._isFormatUuid(elem),
          ),
      ))();
  return (input) => "object" === typeof input && null !== input && _io0(input);
})();
