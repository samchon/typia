import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_assertEquals_AtomicUnion = _test_assertEquals(
    "AtomicUnion",
    AtomicUnion.generate,
    (input) =>
        ((input: any): Array<AtomicUnion.Union> => {
            const $guard = (typia.assertEquals as any).guard;
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
);
