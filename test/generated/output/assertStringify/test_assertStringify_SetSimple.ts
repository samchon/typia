import typia from "../../../../src";
import { SetSimple } from "../../../structures/SetSimple";
import { _test_assertStringify } from "../internal/_test_assertStringify";

export const test_assertStringify_SetSimple = _test_assertStringify(
    "SetSimple",
    SetSimple.generate,
    (input) =>
        ((input: any): string => {
            const assert = (input: any): SetSimple => {
                const $guard = (typia.assertStringify as any).guard;
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
                                expected: "Set<Resolve<SetSimple.Person>>",
                                value: input.objects,
                            })) &&
                        [...input.objects].every(
                            (elem: any, _index6: number) =>
                                (("object" === typeof elem && null !== elem) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path + ".objects[" + _index6 + "]",
                                        expected: "Resolve<SetSimple.Person>",
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
                                expected: "Resolve<SetSimple>",
                                value: input,
                            })) &&
                        $ao0(input, _path + "", true)
                    );
                })(input, "$input", true);
                return input;
            };
            const stringify = (input: SetSimple): string => {
                const $string = (typia.assertStringify as any).string;
                const $number = (typia.assertStringify as any).number;
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age;
                const $so0 = (input: any): any =>
                    '{"booleans":{},"numbers":{},"strings":{},"arrays":{},"objects":{}}';
                return $so0(input);
            };
            return stringify(assert(input));
        })(input),
    SetSimple.SPOILERS,
);
