import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_assertClone_AtomicUnion = _test_assertClone(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<AtomicUnion.Union>> => {
            const assert = (input: any): Array<AtomicUnion.Union> => {
                const __is = (
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
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<AtomicUnion.Union> => {
                        const $guard = (typia.assertClone as any).guard;
                        return (
                            ((Array.isArray(input) ||
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
                                )) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "AtomicUnion",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone = (
                input: Array<AtomicUnion.Union>,
            ): typia.Primitive<Array<AtomicUnion.Union>> => {
                const $cp0 = (input: any) =>
                    input.map((elem: any) => elem as any);
                return Array.isArray(input) ? $cp0(input) : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    AtomicUnion.SPOILERS,
);
