import typia from "../../../../src";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";
import { _test_stringify } from "../internal/_test_stringify";

export const test_stringify_ConstantEnumeration = _test_stringify(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) =>
        ((input: ConstantEnumeration): string => {
            const $string = (typia.stringify as any).string;
            const $number = (typia.stringify as any).number;
            const $throws = (typia.stringify as any).throws;
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
        })(input),
);
