import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_assertPrune_AtomicUnion = _test_assertPrune(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) =>
        ((input: any): Array<AtomicUnion.Union> => {
            const assert = (input: any): AtomicUnion => {
                const $guard = (typia.assertPrune as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is AtomicUnion => {
                    return (
                        (Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected:
                                    "Array<(boolean | null | number | string)>",
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
            };
            const prune = (input: AtomicUnion): void => {};
            assert(input);
            prune(input);
            return input;
        })(input),
    AtomicUnion.SPOILERS,
);
