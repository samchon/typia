import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_createStringify_ArrayRepeatedRequired = _test_stringify(
    "ArrayRepeatedRequired",
    ArrayRepeatedRequired.generate,
    (input: ArrayRepeatedRequired): string => {
        const $ia0: any = (input: any): any =>
            input.every(
                (elem: any) =>
                    null !== elem &&
                    undefined !== elem &&
                    ("string" === typeof elem ||
                        "number" === typeof elem ||
                        (Array.isArray(elem) && $ia0(elem))),
            );
        const $string: any = (typia.createStringify as any).string;
        const $number: any = (typia.createStringify as any).number;
        const $throws: any = (typia.createStringify as any).throws;
        const $sp0: any = (input: any) => $sa0(input);
        const $sa0: any = (input: any): any =>
            `[${input
                .map((elem: any) =>
                    (() => {
                        if ("string" === typeof elem) return $string(elem);
                        if ("number" === typeof elem) return $number(elem);
                        if (Array.isArray(elem)) return $sp0(elem);
                        $throws({
                            expected:
                                "(Array<ArrayRepeatedRequired> | number | string)",
                            value: elem,
                        });
                    })(),
                )
                .join(",")}]`;
        return (() => {
            if ("string" === typeof input) return $string(input);
            if ("number" === typeof input) return $number(input).toString();
            if (Array.isArray(input)) return $sp0(input);
            $throws({
                expected: "(Array<ArrayRepeatedRequired> | number | string)",
                value: input,
            });
        })();
    },
);
