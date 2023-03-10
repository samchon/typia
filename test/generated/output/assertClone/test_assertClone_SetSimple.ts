import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { SetSimple } from "../../../structures/SetSimple";

export const test_assertClone_SetSimple = _test_assertClone(
    "SetSimple",
    SetSimple.generate,
    (input) =>
        ((input: any): typia.Primitive<SetSimple> => {
            const assert = (input: any): SetSimple => {
                const $guard = (typia.assertClone as any).guard;
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is SetSimple => {
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (input.booleans instanceof Set ||
                            $guard(_exceptionable, {
                                path: _path + ".booleans",
                                expected: "Set<boolean>",
                                value: input.booleans,
                            })) &&
                        [...input.booleans].every(
                            (elem: any, _index1: number) =>
                                "boolean" === typeof elem ||
                                $guard(_exceptionable, {
                                    path: _path + ".booleans[" + _index1 + "]",
                                    expected: "boolean",
                                    value: elem,
                                }),
                        ) &&
                        (input.numbers instanceof Set ||
                            $guard(_exceptionable, {
                                path: _path + ".numbers",
                                expected: "Set<number>",
                                value: input.numbers,
                            })) &&
                        [...input.numbers].every(
                            (elem: any, _index2: number) =>
                                ("number" === typeof elem &&
                                    Number.isFinite(elem)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".numbers[" + _index2 + "]",
                                    expected: "number",
                                    value: elem,
                                }),
                        ) &&
                        (input.strings instanceof Set ||
                            $guard(_exceptionable, {
                                path: _path + ".strings",
                                expected: "Set<string>",
                                value: input.strings,
                            })) &&
                        [...input.strings].every(
                            (elem: any, _index3: number) =>
                                "string" === typeof elem ||
                                $guard(_exceptionable, {
                                    path: _path + ".strings[" + _index3 + "]",
                                    expected: "string",
                                    value: elem,
                                }),
                        ) &&
                        (input.arrays instanceof Set ||
                            $guard(_exceptionable, {
                                path: _path + ".arrays",
                                expected: "Set<Array<number>>",
                                value: input.arrays,
                            })) &&
                        [...input.arrays].every(
                            (elem: any, _index4: number) =>
                                (Array.isArray(elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".arrays[" + _index4 + "]",
                                        expected: "Array<number>",
                                        value: elem,
                                    })) &&
                                elem.every(
                                    (elem: any, _index5: number) =>
                                        ("number" === typeof elem &&
                                            Number.isFinite(elem)) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".arrays[" +
                                                _index4 +
                                                "][" +
                                                _index5 +
                                                "]",
                                            expected: "number",
                                            value: elem,
                                        }),
                                ),
                        ) &&
                        (input.objects instanceof Set ||
                            $guard(_exceptionable, {
                                path: _path + ".objects",
                                expected: "Set<SetSimple.Person>",
                                value: input.objects,
                            })) &&
                        [...input.objects].every(
                            (elem: any, _index6: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".objects[" + _index6 + "]",
                                        expected: "SetSimple.Person",
                                        value: elem,
                                    })) &&
                                $ao1(
                                    elem,
                                    _path + ".objects[" + _index6 + "]",
                                    true && _exceptionable,
                                ),
                        );
                    const $ao1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        ("string" === typeof input.id ||
                            $guard(_exceptionable, {
                                path: _path + ".id",
                                expected: "string",
                                value: input.id,
                            })) &&
                        ("string" === typeof input.name ||
                            $guard(_exceptionable, {
                                path: _path + ".name",
                                expected: "string",
                                value: input.name,
                            })) &&
                        (("number" === typeof input.age &&
                            Number.isFinite(input.age)) ||
                            $guard(_exceptionable, {
                                path: _path + ".age",
                                expected: "number",
                                value: input.age,
                            }));
                    return (
                        (("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "SetSimple",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const clone = (input: SetSimple): typia.Primitive<SetSimple> => {
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age;
                const $co0 = (input: any): any => ({
                    booleans:
                        input.booleans instanceof Set
                            ? {}
                            : (input.booleans as any),
                    numbers:
                        input.numbers instanceof Set
                            ? {}
                            : (input.numbers as any),
                    strings:
                        input.strings instanceof Set
                            ? {}
                            : (input.strings as any),
                    arrays:
                        input.arrays instanceof Set
                            ? {}
                            : (input.arrays as any),
                    objects:
                        input.objects instanceof Set
                            ? {}
                            : (input.objects as any),
                });
                return "object" === typeof input && null !== input
                    ? $co0(input)
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    SetSimple.SPOILERS,
);
