import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TupleRestObject } from "../../../structures/TupleRestObject";

export const test_stringify_TupleRestObject = _test_stringify(
    "TupleRestObject",
    TupleRestObject.generate,
    (input) =>
        ((input: [boolean, number, ...TupleRestObject.IObject[]]): string => {
            const $number: any = (typia.stringify as any).number;
            const $string: any = (typia.stringify as any).string;
            const $rest: any = (typia.stringify as any).rest;
            return `[${input[0]},${$number(input[1])}${$rest(
                (() =>
                    `[${input
                        .slice(2)
                        .map((elem: any) => `{"value":${$string(elem.value)}}`)
                        .join(",")}]`)(),
            )}]`;
        })(input),
);
