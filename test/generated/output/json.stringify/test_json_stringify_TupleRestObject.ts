import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_json_stringify_TupleRestObject = _test_json_stringify(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)((input) =>
  ((input: TupleRestObject): string => {
    const $number = (typia.json.stringify as any).number;
    const $string = (typia.json.stringify as any).string;
    const $rest = (typia.json.stringify as any).rest;
    return `[${input[0]},${$number(input[1])}${$rest(
      `[${input
        .slice(2)
        .map((elem: any) => `{"value":${$string((elem as any).value)}}`)
        .join(",")}]`,
    )}]`;
  })(input),
);
