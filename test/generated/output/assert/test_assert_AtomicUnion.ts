import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_assert_AtomicUnion = _test_assert(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) =>
        ((input: any): Array<AtomicUnion.Union> => {
            const __is: any = (
                input: any,
            ): input is Array<AtomicUnion.Union> => {
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any) =>
                            null === elem ||
                            "string" === typeof elem ||
                            ("number" === typeof elem &&
                                Number.isFinite(elem)) ||
                            "boolean" === typeof elem,
                    )
                );
            };
            const $guard: any = (typia.assert as any).guard;
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is Array<AtomicUnion.Union> => {
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "AtomicUnion",
                                value: input,
                            })) &&
                        input.every(
                            (elem: any, _index1: number) =>
                                null === elem ||
                                "string" === typeof elem ||
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                "boolean" === typeof elem ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(boolean | null | number | string)",
                                    value: elem,
                                }),
                        )
                    );
                })(input, "$input", true);
            return input;
        })(input),
    AtomicUnion.SPOILERS,
);
