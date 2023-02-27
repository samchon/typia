import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_createStringify_TupleRestArray = _test_stringify(
    "TupleRestArray",
    TupleRestArray.generate,
    (input: TupleRestArray): string => {
        const $number = (typia.createStringify as any).number;
        const $string = (typia.createStringify as any).string;
        const $rest = (typia.createStringify as any).rest;
        return `[${input[0]},${$number(input[1])}${$rest(
            `[${input
                .slice(2)
                .map(
                    (elem: any) =>
                        `[${elem.map((elem: any) => $string(elem)).join(",")}]`,
                )
                .join(",")}]`,
        )}]`;
    },
);
