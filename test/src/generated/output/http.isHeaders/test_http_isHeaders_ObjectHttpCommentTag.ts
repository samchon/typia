import typia from "typia";

import { _test_http_isHeaders } from "../../../internal/_test_http_isHeaders";
import { ObjectHttpCommentTag } from "../../../structures/ObjectHttpCommentTag";

export const test_http_isHeaders_ObjectHttpCommentTag = _test_http_isHeaders(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
  ((
    input: Record<string, string | string[] | undefined>,
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
    const headers = (
      input: Record<string, string | string[] | undefined>,
    ): typia.Resolved<ObjectHttpCommentTag> => {
      const $number = (typia.http.isHeaders as any).number;
      const $bigint = (typia.http.isHeaders as any).bigint;
      const output = {
        int: $number(input.int),
        uint64: $bigint(input.uint64),
        uuid: input.uuid,
        items: Array.isArray(input.items)
          ? input.items.map($number)
          : input.items?.split(", ")?.map($number) ?? [],
      };
      return output as any;
    };
    const output = headers(input);
    if (!is(output)) return null;
    return output;
  })(input),
);
