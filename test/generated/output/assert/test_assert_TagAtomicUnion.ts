import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_assert_TagAtomicUnion = _test_assert(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) =>
        ((input: any): Array<TagAtomicUnion.Type> => {
            const $guard = (typia.assert as any).guard;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is Array<TagAtomicUnion.Type> => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("string" === typeof input.value &&
                        3 <= input.value.length &&
                        7 >= input.value.length) ||
                    ("number" === typeof input.value &&
                        Number.isFinite(input.value) &&
                        3 <= input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "(number | string)",
                        value: input.value,
                    });
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "Array<TagAtomicUnion.Type>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected: "TagAtomicUnion.Type",
                                    value: elem,
                                })) &&
                            $ao0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        })(input),
    TagAtomicUnion.SPOILERS,
);
