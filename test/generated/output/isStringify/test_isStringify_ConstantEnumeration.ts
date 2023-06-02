import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_isStringify_ConstantEnumeration = _test_isStringify(
    "ConstantEnumeration",
    ConstantEnumeration.generate,
    (input) =>
        ((input: Array<ConstantEnumeration.Enumeration>): string | null => {
            const is: any = (
                input: any,
            ): input is Array<ConstantEnumeration.Enumeration> => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            0 === elem ||
                            1 === elem ||
                            2 === elem ||
                            "Three" === elem ||
                            "Four" === elem,
                    )
                );
            };
            const stringify: any = (
                input: Array<ConstantEnumeration.Enumeration>,
            ): string => {
                const $string: any = (typia.isStringify as any).string;
                const $number: any = (typia.isStringify as any).number;
                const $throws: any = (typia.isStringify as any).throws;
                return (() =>
                    `[${input
                        .map((elem: any) =>
                            (() => {
                                if ("string" === typeof elem)
                                    return $string(elem);
                                if ("number" === typeof elem)
                                    return $number(elem);
                                if ("string" === typeof elem)
                                    return '"' + elem + '"';
                                $throws({
                                    expected: '("Four" | "Three" | 0 | 1 | 2)',
                                    value: elem,
                                });
                            })(),
                        )
                        .join(",")}]`)();
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ConstantEnumeration.SPOILERS,
);
