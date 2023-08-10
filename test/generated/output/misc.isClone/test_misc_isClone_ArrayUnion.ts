import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_misc_isClone_ArrayUnion = _test_misc_isClone<ArrayUnion>(
    ArrayUnion,
)((input) =>
    ((input: any): typia.Primitive<ArrayUnion> | null => {
        const is = (input: any): input is ArrayUnion => {
            const $ip0 = (input: any) => {
                const array = input;
                const top = input[0];
                if (0 === input.length) return true;
                const arrayPredicators = [
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
                    [
                        (top: any): any => "string" === typeof top,
                        (entire: any[]): any =>
                            entire.every(
                                (elem: any) => "string" === typeof elem,
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
                            array.every((value: any) => true === pred[0](value))
                        )
                            return pred[1](array);
                return false;
            };
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) => Array.isArray(elem) && ($ip0(elem) || false),
                )
            );
        };
        const clone = (input: ArrayUnion): typia.Primitive<ArrayUnion> => {
            const $throws = (typia.misc.isClone as any).throws;
            const $cp0 = (input: any) => {
                const array = input;
                const top = input[0];
                if (0 === input.length) return [];
                const arrayPredicators = [
                    [
                        (top: any): any => "boolean" === typeof top,
                        (entire: any[]): any =>
                            entire.map((elem: any) => elem as any),
                    ],
                    [
                        (top: any): any => "number" === typeof top,
                        (entire: any[]): any =>
                            entire.map((elem: any) => elem as any),
                    ],
                    [
                        (top: any): any => "string" === typeof top,
                        (entire: any[]): any =>
                            entire.map((elem: any) => elem as any),
                    ],
                ];
                const passed = arrayPredicators.filter((pred: any) =>
                    pred[0](top),
                );
                if (1 === passed.length) return passed[0][1](array);
                else if (1 < passed.length)
                    for (const pred of passed)
                        if (
                            array.every((value: any) => true === pred[0](value))
                        )
                            return pred[1](array);
                $throws({
                    expected:
                        "(Array<boolean> | Array<number> | Array<string>)",
                    value: input,
                });
            };
            const $cp1 = (input: any) =>
                input.map((elem: any) =>
                    Array.isArray(elem) ? $cp0(elem) : (elem as any),
                );
            return Array.isArray(input) ? $cp1(input) : (input as any);
        };
        if (!is(input)) return null;
        const output = clone(input);
        return output;
    })(input),
);
