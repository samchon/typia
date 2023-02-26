import typia from "../../../../src";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_assertClone } from "../internal/_test_assertClone";

export const test_createAssertClone_AtomicUnion = _test_assertClone(
    "AtomicUnion",
    AtomicUnion.generate,
    (input: any): typia.Primitive<AtomicUnion> => {
        const assert = (input: any): AtomicUnion => {
            const $guard = (typia.createAssertClone as any).guard;
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
        };
        const clone = (input: AtomicUnion): typia.Primitive<AtomicUnion> => {
            return Array.isArray(input)
                ? input.map((elem: any) => elem as any)
                : (input as any);
        };
        assert(input);
        const output = clone(input);
        return output;
    },
    AtomicUnion.SPOILERS,
);
