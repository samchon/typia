import typia from "../../../../src";
import { _test_misc_isClone } from "../../../internal/_test_misc_isClone";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_misc_isClone_ArrayAtomicAlias =
    _test_misc_isClone<ArrayAtomicAlias>(ArrayAtomicAlias)((input) =>
        ((
            input: any,
        ): typia.Primitive<
            [
                ArrayAtomicAlias.Alias<boolean>,
                ArrayAtomicAlias.Alias<number>,
                ArrayAtomicAlias.Alias<string>,
            ]
        > | null => {
            const is = (
                input: any,
            ): input is [
                ArrayAtomicAlias.Alias<boolean>,
                ArrayAtomicAlias.Alias<number>,
                ArrayAtomicAlias.Alias<string>,
            ] => {
                return (
                    Array.isArray(input) &&
                    input.length === 3 &&
                    Array.isArray(input[0]) &&
                    input[0].every((elem: any) => "boolean" === typeof elem) &&
                    Array.isArray(input[1]) &&
                    input[1].every(
                        (elem: any) =>
                            "number" === typeof elem && Number.isFinite(elem),
                    ) &&
                    Array.isArray(input[2]) &&
                    input[2].every((elem: any) => "string" === typeof elem)
                );
            };
            const clone = (
                input: [
                    ArrayAtomicAlias.Alias<boolean>,
                    ArrayAtomicAlias.Alias<number>,
                    ArrayAtomicAlias.Alias<string>,
                ],
            ): typia.Primitive<
                [
                    ArrayAtomicAlias.Alias<boolean>,
                    ArrayAtomicAlias.Alias<number>,
                    ArrayAtomicAlias.Alias<string>,
                ]
            > => {
                const $cp0 = (input: any) =>
                    input.map((elem: any) => elem as any);
                const $cp1 = (input: any) =>
                    input.map((elem: any) => elem as any);
                const $cp2 = (input: any) =>
                    input.map((elem: any) => elem as any);
                return Array.isArray(input) &&
                    input.length === 3 &&
                    Array.isArray(input[0]) &&
                    input[0].every((elem: any) => "boolean" === typeof elem) &&
                    Array.isArray(input[1]) &&
                    input[1].every((elem: any) => "number" === typeof elem) &&
                    Array.isArray(input[2]) &&
                    input[2].every((elem: any) => "string" === typeof elem)
                    ? ([
                          Array.isArray(input[0])
                              ? $cp0(input[0])
                              : (input[0] as any),
                          Array.isArray(input[1])
                              ? $cp1(input[1])
                              : (input[1] as any),
                          Array.isArray(input[2])
                              ? $cp2(input[2])
                              : (input[2] as any),
                      ] as any)
                    : (input as any);
            };
            if (!is(input)) return null;
            const output = clone(input);
            return output;
        })(input),
    );
