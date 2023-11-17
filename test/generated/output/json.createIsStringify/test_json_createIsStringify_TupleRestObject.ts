import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_json_createIsStringify_TupleRestObject =
  _test_json_isStringify("TupleRestObject")<TupleRestObject>(TupleRestObject)(
    (input: TupleRestObject): string | null => {
      const is = (input: any): input is TupleRestObject => {
        const $io0 = (input: any): boolean => "string" === typeof input.value;
        return (
          Array.isArray(input) &&
          "boolean" === typeof input[0] &&
          "number" === typeof input[1] &&
          Number.isFinite(input[1]) &&
          Array.isArray(input.slice(2)) &&
          input
            .slice(2)
            .every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            )
        );
      };
      const stringify = (input: TupleRestObject): string => {
        const $number = (typia.json.createIsStringify as any).number;
        const $string = (typia.json.createIsStringify as any).string;
        const $rest = (typia.json.createIsStringify as any).rest;
        return `[${input[0]},${$number(input[1])}${$rest(
          `[${input
            .slice(2)
            .map((elem: any) => `{"value":${$string((elem as any).value)}}`)
            .join(",")}]`,
        )}]`;
      };
      return is(input) ? stringify(input) : null;
    },
  );
