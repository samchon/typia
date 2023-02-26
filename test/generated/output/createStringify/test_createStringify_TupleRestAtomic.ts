import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";

export const test_createStringify_TupleRestAtomic = _test_stringify(
    "TupleRestAtomic",
    TupleRestAtomic.generate,
    (input: [boolean, number, ...string[]]): string => {
        const $number = (typia.createStringify as any).number;
        const $string = (typia.createStringify as any).string;
        const $rest = (typia.createStringify as any).rest;
        return `[${input[0]},${$number(input[1])}${$rest(
            `[${input
                .slice(2)
                .map((elem: any) => $string(elem))
                .join(",")}]`,
        )}]`;
    },
);
