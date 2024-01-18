import typia from "typia";

import { _test_http_isQuery } from "../../../internal/_test_http_isQuery";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_http_createIsQuery_ObjectHttpCommentTag = _test_http_isQuery(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)(
  (
    input: string | URLSearchParams,
  ): typia.Resolved<ObjectHttpCommentTag> | null => {
    const is = (input: any): input is ObjectHttpCommentTag => {
      const $io0 = (input: any): boolean =>
        "number" === typeof input.int &&
        Math.floor(input.int) === input.int &&
        -2147483648 <= input.int &&
        input.int <= 2147483647 &&
        "bigint" === typeof input.uint64 &&
        BigInt(0) <= input.uint64 &&
        "string" === typeof input.uuid &&
        /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i.test(
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
    const query = (
      input: string | URLSearchParams,
    ): typia.Resolved<ObjectHttpCommentTag> => {
      const $QueryReader =
        require("typia/lib/functional/$QueryReader").$QueryReader;
      input = $QueryReader.params(input) as URLSearchParams;
      const output = {
        int: $QueryReader.number(input.get("int")),
        uint64: $QueryReader.bigint(input.get("uint64")),
        uuid: $QueryReader.string(input.get("uuid")),
        items: input
          .getAll("items")
          .map((elem: any) => $QueryReader.number(elem)),
      };
      return output as any;
    };
    const output = query(input);
    if (!is(output)) return null;
    return output;
  },
);
