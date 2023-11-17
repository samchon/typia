import typia from "../../../../src";
import { _test_http_headers } from "../../../internal/_test_http_headers";
import { ObjectHttpTypeTag } from "../../../structures/ObjectHttpTypeTag";

export const test_http_headers_ObjectHttpTypeTag = _test_http_headers(
  "ObjectHttpTypeTag",
)<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
  ((
    input: Record<string, string | string[] | undefined>,
  ): typia.Resolved<ObjectHttpTypeTag> => {
    const $number = (typia.http.headers as any).number;
    const $bigint = (typia.http.headers as any).bigint;
    const $string = (typia.http.headers as any).string;
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
  })(input),
);
