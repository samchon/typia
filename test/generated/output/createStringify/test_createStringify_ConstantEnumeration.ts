import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_createStringify_ConstantEnumeration = _test_stringify(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input: ConstantEnumeration): string => {
        const $string = (typia.createStringify as any).string;
        const $number = (typia.createStringify as any).number;
        const $throws = (typia.createStringify as any).throws;
        return `[${input
            .map((elem: any) =>
                (() => {
                    if ("string" === typeof elem) return $string(elem);
                    if ("number" === typeof elem) return $number(elem);
                    if ("string" === typeof elem) return '"' + elem + '"';
                    $throws({
                        expected: '("Four" | "Three" | 0 | 1 | 2)',
                        value: elem,
                    });
                })(),
            )
            .join(",")}]`;
    },
);
