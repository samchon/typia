import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_stringify_TupleRestAtomic = _test_stringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input) =>
        ((input: [boolean, number, ...string[]]): string => {
            const $number: any = (typia.stringify as any).number;
            const $string: any = (typia.stringify as any).string;
            const $rest: any = (typia.stringify as any).rest;
            return `[${input[0]},${$number(input[1])}${$rest(
                (() =>
                    `[${input
                        .slice(2)
                        .map((elem: any) => $string(elem))
                        .join(",")}]`)(),
            )}]`;
        })(input),
);
