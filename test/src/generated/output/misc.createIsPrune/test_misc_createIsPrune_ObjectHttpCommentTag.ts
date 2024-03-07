import typia from "typia";
import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";
export const test_misc_createIsPrune_ObjectHttpCommentTag = _test_misc_isPrune(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
  (input: any): input is ObjectHttpCommentTag => {
    const is = (input: any): input is ObjectHttpCommentTag => {
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
    };
    const prune = (input: ObjectHttpCommentTag): void => {
      const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
          if (
            "int" === key ||
            "uint64" === key ||
            "uuid" === key ||
            "items" === key
          )
            continue;
          delete input[key];
        }
      };
      if ("object" === typeof input && null !== input) $po0(input);
    };
    if (!is(input)) return false;
    prune(input);
    return true;
  },
);
