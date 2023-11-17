import typia from "../../../../src";
import { _test_http_isHeaders } from "../../../internal/_test_http_isHeaders";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_http_createIsHeaders_ObjectHttpTypeTag = _test_http_isHeaders(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)(
  (
    input: Record<string, string | string[] | undefined>,
  ): typia.Resolved<ObjectHttpTypeTag> | null => {
    const is = (input: any): input is ObjectHttpTypeTag => {
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
    };
    const headers = (
      input: Record<string, string | string[] | undefined>,
    ): typia.Resolved<ObjectHttpTypeTag> => {
      const $number = (typia.http.createIsHeaders as any).number;
      const $bigint = (typia.http.createIsHeaders as any).bigint;
      const $string = (typia.http.createIsHeaders as any).string;
      const output = {
        int32: $number(input.int32),
        uint64: $bigint(input.uint64),
        uuid: input.uuid,
        range: Array.isArray(input.range)
          ? input.range.map($number)
          : input.range?.split(", ")?.map($number) ?? [],
        length: Array.isArray(input.length)
          ? input.length.map($string)
          : input.length?.split(", ")?.map($string) ?? [],
      };
      return output as any;
    };
    const output = headers(input);
    if (!is(output)) return null;
    return output;
  },
);
