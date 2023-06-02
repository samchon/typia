import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_createIsStringify_ArrayUnion = _test_isStringify(
    "ArrayUnion",
    ArrayUnion.generate,
    (input: ArrayUnion): string | null => {
        const is: any = (input: any): input is ArrayUnion => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any) =>
                        Array.isArray(elem) &&
                        (() => {
                            const array: any = elem;
                            const top: any = array[0];
                            if (0 === elem.length) return true;
                            const arrayPredicators: any = [
                                [
                                    (top: any): any => "string" === typeof top,
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "string" === typeof elem,
                                        ),
                                ],
                                [
                                    (top: any): any => "boolean" === typeof top,
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "boolean" === typeof elem,
                                        ),
                                ],
                                [
                                    (top: any): any =>
                                        "number" === typeof top &&
                                        Number.isFinite(top),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any) =>
                                                "number" === typeof elem &&
                                                Number.isFinite(elem),
                                        ),
                                ],
                            ];
                            const passed: any = arrayPredicators.filter(
                                (pred: any) => pred[0](top),
                            );
                            if (1 === passed.length) return passed[0][1](array);
                            else if (1 < passed.length)
                                for (const pred of passed)
                                    if (
                                        array.every(
                                            (value: any) =>
                                                true === pred[0](value),
                                        )
                                    )
                                        return pred[1](array);
                            return false;
                        })(),
                )
            );
        };
        const stringify: any = (input: ArrayUnion): string => {
            const $string: any = (typia.createIsStringify as any).string;
            const $number: any = (typia.createIsStringify as any).number;
            const $throws: any = (typia.createIsStringify as any).throws;
            return (() =>
                `[${input
                    .map((elem: any) =>
                        (() => {
                            const array: any = elem;
                            const top: any = array[0];
                            if (0 === elem.length) return true;
                            const arrayPredicators: any = [
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
                            const passed: any = arrayPredicators.filter(
                                (pred: any) => pred[0](top),
                            );
                            if (1 === passed.length) return passed[0][1](array);
                            else if (1 < passed.length)
                                for (const pred of passed)
                                    if (
                                        array.every(
                                            (value: any) =>
                                                true === pred[0](value),
                                        )
                                    )
                                        return pred[1](array);
                            $throws({
                                expected:
                                    "(Array<string> | Array<boolean> | Array<number>)",
                                value: elem,
                            });
                        })(),
                    )
                    .join(",")}]`)();
        };
        return is(input) ? stringify(input) : null;
    },
    ArrayUnion.SPOILERS,
);
