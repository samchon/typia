import typia from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_assert } from "../internal/_test_assert";

export const test_assert_AtomicUnion = _test_assert(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) =>
        ((input: any): AtomicUnion => {
            const $guard = (typia.assert as any).guard;
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
                                expected: "(boolean | null | number | string)",
                                value: elem,
                            }),
                    )
                );
            })(input, "$input", true);
            return input;
        })(input),
    AtomicUnion.SPOILERS,
);
