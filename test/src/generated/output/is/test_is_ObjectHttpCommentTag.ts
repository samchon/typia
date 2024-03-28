import typia from "typia";

import { _test_is } from "../../../internal/_test_is";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_is_ObjectHttpCommentTag = _test_is(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
  ((input: any): input is ObjectHttpCommentTag => {
    const $io0 = (input: any): boolean =>
      "number" === typeof input.int &&
      Math.floor(input.int) === input.int &&
      -2147483648 <= input.int &&
      input.int <= 2147483647 &&
      "bigint" === typeof input.uint64 &&
      BigInt(0) <= input.uint64 &&
      "string" === typeof input.uuid &&
      /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
        input.uuid,
      ) &&
      Array.isArray(input.items) &&
      10 <= input.items.length &&
      input.items.length <= 100 &&
      input.items.every(
        (elem: any) => "number" === typeof elem && Number.isFinite(elem),
      );
    return "object" === typeof input && null !== input && $io0(input);
  })(input),
);
