import typia from "typia";

import { _test_http_headers } from "../../../internal/_test_http_headers";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_http_createHeaders_ObjectHttpArray = _test_http_headers(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)(
  (
    input: Record<string, string | string[] | undefined>,
  ): typia.Resolved<ObjectHttpArray> => {
    const $HeadersReader =
      require("typia/lib/functional/$HeadersReader").$HeadersReader;
    const output = {
      booleans: Array.isArray(input.booleans)
        ? input.booleans.map($HeadersReader.boolean)
        : input.booleans?.split(", ")?.map($HeadersReader.boolean) ?? [],
      bigints: Array.isArray(input.bigints)
        ? input.bigints.map($HeadersReader.bigint)
        : input.bigints?.split(", ")?.map($HeadersReader.bigint) ?? [],
      numbers: Array.isArray(input.numbers)
        ? input.numbers.map($HeadersReader.number)
        : input.numbers?.split(", ")?.map($HeadersReader.number) ?? [],
      strings: Array.isArray(input.strings)
        ? input.strings.map($HeadersReader.string)
        : input.strings?.split(", ")?.map($HeadersReader.string) ?? [],
      templates: Array.isArray(input.templates)
        ? input.templates.map($HeadersReader.string)
        : input.templates?.split(", ")?.map($HeadersReader.string) ?? [],
    };
    return output as any;
  },
);
