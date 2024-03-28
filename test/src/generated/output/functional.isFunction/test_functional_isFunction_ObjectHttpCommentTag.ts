import typia from "typia";

import { _test_functional_isFunction } from "../../../internal/_test_functional_isFunction";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_functional_isFunction_ObjectHttpCommentTag =
  _test_functional_isFunction("ObjectHttpCommentTag")(ObjectHttpCommentTag)(
    (p: (input: ObjectHttpCommentTag) => ObjectHttpCommentTag) =>
      (input: ObjectHttpCommentTag): ObjectHttpCommentTag | null => {
        if (
          false ===
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
                (elem: any) =>
                  "number" === typeof elem && Number.isFinite(elem),
              );
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        const result = p(input);
        return ((input: any): input is ObjectHttpCommentTag => {
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
        })(result)
          ? result
          : null;
      },
  );
