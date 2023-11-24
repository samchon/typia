import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_is_ObjectHttpTypeTag = _test_is(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
  ((input: any): input is ObjectHttpTypeTag => {
    const $io0 = (input: any): boolean =>
      "number" === typeof input.int32 &&
      Math.floor(input.int32) === input.int32 &&
      -2147483648 <= input.int32 &&
      input.int32 <= 2147483647 &&
      "bigint" === typeof input.uint64 &&
      BigInt(0) <= input.uint64 &&
      "string" === typeof input.uuid &&
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
        input.uuid,
      ) &&
      Array.isArray(input.range) &&
      10 <= input.range.length &&
      input.range.length <= 100 &&
      input.range.every(
        (elem: any) => "number" === typeof elem && 3 <= elem && elem <= 7,
      ) &&
      Array.isArray(input.length) &&
      10 <= input.length.length &&
      input.length.length <= 100 &&
      input.length.every(
        (elem: any) =>
          "string" === typeof elem && 3 <= elem.length && elem.length <= 7,
      );
    return "object" === typeof input && null !== input && $io0(input);
  })(input),
);
