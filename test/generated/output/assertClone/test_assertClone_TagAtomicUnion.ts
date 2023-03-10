import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_assertClone_TagAtomicUnion = _test_assertClone(
    "TagAtomicUnion",
    TagAtomicUnion.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<TagAtomicUnion.Type>> => {
            const assert = (input: any): Array<TagAtomicUnion.Type> => {
                const $guard = (typia.assertClone as any).guard;
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
            };
            const clone = (
                input: Array<TagAtomicUnion.Type>,
            ): typia.Primitive<Array<TagAtomicUnion.Type>> => {
                const $co0 = (input: any): any => ({
                    value: input.value as any,
                });
                return Array.isArray(input)
                    ? input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $co0(elem)
                              : (elem as any),
                      )
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    TagAtomicUnion.SPOILERS,
);
