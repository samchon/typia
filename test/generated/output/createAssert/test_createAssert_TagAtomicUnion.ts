import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";

export const test_assert_TagAtomicUnion = _test_assert(
    "TagAtomicUnion",
)<TagAtomicUnion>(TagAtomicUnion)((input: any): TagAtomicUnion => {
    const __is = (input: any): input is TagAtomicUnion => {
        const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
                (elem: any) =>
                    "object" === typeof elem && null !== elem && $io1(elem),
            );
        const $io1 = (input: any): boolean =>
            ("string" === typeof input.value &&
                3 <= input.value.length &&
                7 >= input.value.length) ||
            ("number" === typeof input.value &&
                Number.isFinite(input.value) &&
                3 <= input.value);
        return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input))
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TagAtomicUnion => {
            const $guard = (typia.createAssert as any).guard;
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ((Array.isArray(input.value) ||
                    $guard(_exceptionable, {
                        path: _path + ".value",
                        expected: "Array<TagAtomicUnion.Type>",
                        value: input.value,
                    })) &&
                    input.value.every(
                        (elem: any, _index1: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".value[" + _index1 + "]",
                                    expected: "TagAtomicUnion.Type",
                                    value: elem,
                                })) &&
                                $ao1(
                                    elem,
                                    _path + ".value[" + _index1 + "]",
                                    true && _exceptionable,
                                )) ||
                            $guard(_exceptionable, {
                                path: _path + ".value[" + _index1 + "]",
                                expected: "TagAtomicUnion.Type",
                                value: elem,
                            }),
                    )) ||
                $guard(_exceptionable, {
                    path: _path + ".value",
                    expected: "Array<TagAtomicUnion.Type>",
                    value: input.value,
                });
            const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("string" === typeof input.value &&
                    (3 <= input.value.length ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "string (@minLength 3)",
                            value: input.value,
                        })) &&
                    (7 >= input.value.length ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "string (@maxLength 7)",
                            value: input.value,
                        }))) ||
                ("number" === typeof input.value &&
                    Number.isFinite(input.value) &&
                    (3 <= input.value ||
                        $guard(_exceptionable, {
                            path: _path + ".value",
                            expected: "number (@minimum 3)",
                            value: input.value,
                        }))) ||
                $guard(_exceptionable, {
                    path: _path + ".value",
                    expected: "(number | string)",
                    value: input.value,
                });
            return (
                ((("object" === typeof input && null !== input) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "TagAtomicUnion",
                        value: input,
                    })) &&
                    $ao0(input, _path + "", true)) ||
                $guard(true, {
                    path: _path + "",
                    expected: "TagAtomicUnion",
                    value: input,
                })
            );
        })(input, "$input", true);
    return input;
});
