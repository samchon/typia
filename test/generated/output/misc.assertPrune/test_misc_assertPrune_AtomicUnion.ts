import typia from "../../../../src";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_misc_assertPrune_AtomicUnion =
    _test_misc_assertPrune<AtomicUnion>(AtomicUnion)((input) =>
        ((input: any): Array<AtomicUnion.Union> => {
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
                        const $guard = (typia.misc.assertPrune as any).guard;
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
            const prune = (input: Array<AtomicUnion.Union>): void => {};
            assert(input);
            prune(input);
            return input;
        })(input),
    );
