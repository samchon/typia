import typia from "typia";

import { _test_http_isHeaders } from "../../../internal/_test_http_isHeaders";
import { ObjectHttpArray } from "../../../structures/ObjectHttpArray";

export const test_http_isHeaders_ObjectHttpArray = _test_http_isHeaders(
  "ObjectHttpArray",
)<ObjectHttpArray>(ObjectHttpArray)((input) =>
  ((
    input: Record<string, string | string[] | undefined>,
  ): typia.Resolved<ObjectHttpArray> | null => {
    const is = (input: any): input is ObjectHttpArray => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.booleans) &&
        input.booleans.every((elem: any) => "boolean" === typeof elem) &&
        Array.isArray(input.bigints) &&
        input.bigints.every((elem: any) => "bigint" === typeof elem) &&
        Array.isArray(input.numbers) &&
        input.numbers.every(
          (elem: any) => "number" === typeof elem && Number.isFinite(elem),
        ) &&
        Array.isArray(input.strings) &&
        input.strings.every((elem: any) => "string" === typeof elem) &&
        Array.isArray(input.templates) &&
        input.templates.every(
          (elem: any) =>
            "string" === typeof elem && RegExp(/^something_(.*)/).test(elem),
        );
      return "object" === typeof input && null !== input && $io0(input);
    };
    const headers = (
      input: Record<string, string | string[] | undefined>,
    ): typia.Resolved<ObjectHttpArray> => {
      // @ts-ignore;
      declare const require: (lib: string) => any;
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
    };
    const output = headers(input);
    if (!is(output)) return null;
    return output;
  })(input),
);
