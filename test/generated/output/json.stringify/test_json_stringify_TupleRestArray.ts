import typia from "../../../../src";
import { _test_json_stringify } from "../../../internal/_test_json_stringify";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_json_stringify_TupleRestArray = _test_json_stringify(
    "TupleRestArray",
)<TupleRestArray>(TupleRestArray)((input) =>
    ((input: TupleRestArray): string => {
        const $number = (typia.json.stringify as any).number;
        const $string = (typia.json.stringify as any).string;
        const $rest = (typia.json.stringify as any).rest;
        return `[${input[0]},${$number(input[1])}${$rest(
            `[${input
                .slice(2)
                .map(
                    (elem: any) =>
                        `[${elem.map((elem: any) => $string(elem)).join(",")}]`,
                )
                .join(",")}]`,
        )}]`;
    })(input),
);
