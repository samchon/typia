import typia from "../../../../src";
import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_json_isStringify_ArrayUnion = _test_json_isStringify(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) =>
        ((input: Array<ArrayUnion.IUnion>): string | null => {
            const is = (input: any): input is Array<ArrayUnion.IUnion> => {
                const $ip0 = (input: any) => {
                    const array = input;
                    const top = input[0];
                    if (0 === input.length) return true;
                    const arrayPredicators = [
                        [
                            (top: any): any => "string" === typeof top,
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any) => "string" === typeof elem,
                                ),
                        ],
                        [
                            (top: any): any => "boolean" === typeof top,
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any) => "boolean" === typeof elem,
                                ),
                        ],
                        [
                            (top: any): any =>
                                "number" === typeof top && Number.isFinite(top),
                            (entire: any[]): any =>
                                entire.every(
                                    (elem: any) =>
                                        "number" === typeof elem &&
                                        Number.isFinite(elem),
                                ),
                        ],
                    ];
                    const passed = arrayPredicators.filter((pred: any) =>
                        pred[0](top),
                    );
                    if (1 === passed.length) return passed[0][1](array);
                    else if (1 < passed.length)
                        for (const pred of passed)
                            if (
                                array.every(
                                    (value: any) => true === pred[0](value),
                                )
                            )
                                return pred[1](array);
                    return false;
                };
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            Array.isArray(elem) && ($ip0(elem) || false),
                    )
                );
            };
            const stringify = (input: Array<ArrayUnion.IUnion>): string => {
                const $string = (typia.json.isStringify as any).string;
                const $number = (typia.json.isStringify as any).number;
                const $throws = (typia.json.isStringify as any).throws;
                const $sp0 = (input: any) => {
                    const array = input;
                    const top = input[0];
                    if (0 === input.length) return "[]";
                    const arrayPredicators = [
                        [
                            (top: any): any => "string" === typeof top,
                            (entire: any[]): any =>
                                `[${entire
                                    .map((elem: any) => $string(elem))
                                    .join(",")}]`,
                        ],
                        [
                            (top: any): any => "boolean" === typeof top,
                            (entire: any[]): any =>
                                `[${entire
                                    .map((elem: any) => elem)
                                    .join(",")}]`,
                        ],
                        [
                            (top: any): any => "number" === typeof top,
                            (entire: any[]): any =>
                                `[${entire
                                    .map((elem: any) => $number(elem))
                                    .join(",")}]`,
                        ],
                    ];
                    const passed = arrayPredicators.filter((pred: any) =>
                        pred[0](top),
                    );
                    if (1 === passed.length) return passed[0][1](array);
                    else if (1 < passed.length)
                        for (const pred of passed)
                            if (
                                array.every(
                                    (value: any) => true === pred[0](value),
                                )
                            )
                                return pred[1](array);
                    $throws({
                        expected:
                            "(Array<string> | Array<boolean> | Array<number>)",
                        value: input,
                    });
                };
                return `[${input.map((elem: any) => $sp0(elem)).join(",")}]`;
            };
            return is(input) ? stringify(input) : null;
        })(input),
    ArrayUnion.SPOILERS,
);
