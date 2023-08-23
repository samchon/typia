import typia from "../../../../src";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { MapAlias } from "../../../structures/MapAlias";

export const test_json_assertParse_MapAlias = _test_json_assertParse(
    "MapAlias",
)<MapAlias>(MapAlias)((input) =>
    ((input: string): typia.Primitive<MapAlias> => {
        const assert = (input: any): MapAlias => {
            const __is = (input: any): input is MapAlias => {
                const $io0 = (input: any): boolean =>
                    input.boolean instanceof Map &&
                    (() =>
                        [...input.boolean].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "boolean" === typeof elem[0] &&
                                "number" === typeof elem[1] &&
                                Number.isFinite(elem[1]),
                        ))() &&
                    input.number instanceof Map &&
                    (() =>
                        [...input.number].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "number" === typeof elem[0] &&
                                Number.isFinite(elem[0]) &&
                                "number" === typeof elem[1] &&
                                Number.isFinite(elem[1]),
                        ))() &&
                    input.strings instanceof Map &&
                    (() =>
                        [...input.strings].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "string" === typeof elem[0] &&
                                "number" === typeof elem[1] &&
                                Number.isFinite(elem[1]),
                        ))() &&
                    input.arrays instanceof Map &&
                    (() =>
                        [...input.arrays].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                Array.isArray(elem[0]) &&
                                elem[0].every(
                                    (elem: any) =>
                                        "number" === typeof elem &&
                                        Number.isFinite(elem),
                                ) &&
                                "number" === typeof elem[1] &&
                                Number.isFinite(elem[1]),
                        ))() &&
                    input.objects instanceof Map &&
                    (() =>
                        [...input.objects].every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                elem.length === 2 &&
                                "object" === typeof elem[0] &&
                                null !== elem[0] &&
                                $io1(elem[0]) &&
                                "number" === typeof elem[1] &&
                                Number.isFinite(elem[1]),
                        ))();
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    "number" === typeof input.age &&
                    Number.isFinite(input.age);
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is MapAlias => {
                    const $guard = (typia.json.assertParse as any).guard;
                    const $ao0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        (((input.boolean instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".boolean",
                                expected: "Map<boolean, number>",
                                value: input.boolean,
                            })) &&
                            (() =>
                                [...input.boolean].every(
                                    (elem: any, _index1: number) =>
                                        ((Array.isArray(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".boolean[" +
                                                    _index1 +
                                                    "]",
                                                expected: "[boolean, number]",
                                                value: elem,
                                            })) &&
                                            (elem.length === 2 ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "[boolean, number]",
                                                    value: elem,
                                                })) &&
                                            ("boolean" === typeof elem[0] ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean[" +
                                                        _index1 +
                                                        "][0]",
                                                    expected: "boolean",
                                                    value: elem[0],
                                                })) &&
                                            (("number" === typeof elem[1] &&
                                                Number.isFinite(elem[1])) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".boolean[" +
                                                        _index1 +
                                                        "][1]",
                                                    expected: "number",
                                                    value: elem[1],
                                                }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".boolean[" +
                                                _index1 +
                                                "]",
                                            expected: "[boolean, number]",
                                            value: elem,
                                        }),
                                ))()) ||
                            $guard(_exceptionable, {
                                path: _path + ".boolean",
                                expected: "Map<boolean, number>",
                                value: input.boolean,
                            })) &&
                        (((input.number instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".number",
                                expected: "Map<number, number>",
                                value: input.number,
                            })) &&
                            (() =>
                                [...input.number].every(
                                    (elem: any, _index2: number) =>
                                        ((Array.isArray(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".number[" +
                                                    _index2 +
                                                    "]",
                                                expected: "[number, number]",
                                                value: elem,
                                            })) &&
                                            (elem.length === 2 ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".number[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        "[number, number]",
                                                    value: elem,
                                                })) &&
                                            (("number" === typeof elem[0] &&
                                                Number.isFinite(elem[0])) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".number[" +
                                                        _index2 +
                                                        "][0]",
                                                    expected: "number",
                                                    value: elem[0],
                                                })) &&
                                            (("number" === typeof elem[1] &&
                                                Number.isFinite(elem[1])) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".number[" +
                                                        _index2 +
                                                        "][1]",
                                                    expected: "number",
                                                    value: elem[1],
                                                }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".number[" +
                                                _index2 +
                                                "]",
                                            expected: "[number, number]",
                                            value: elem,
                                        }),
                                ))()) ||
                            $guard(_exceptionable, {
                                path: _path + ".number",
                                expected: "Map<number, number>",
                                value: input.number,
                            })) &&
                        (((input.strings instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".strings",
                                expected: "Map<string, number>",
                                value: input.strings,
                            })) &&
                            (() =>
                                [...input.strings].every(
                                    (elem: any, _index3: number) =>
                                        ((Array.isArray(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".strings[" +
                                                    _index3 +
                                                    "]",
                                                expected: "[string, number]",
                                                value: elem,
                                            })) &&
                                            (elem.length === 2 ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".strings[" +
                                                        _index3 +
                                                        "]",
                                                    expected:
                                                        "[string, number]",
                                                    value: elem,
                                                })) &&
                                            ("string" === typeof elem[0] ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".strings[" +
                                                        _index3 +
                                                        "][0]",
                                                    expected: "string",
                                                    value: elem[0],
                                                })) &&
                                            (("number" === typeof elem[1] &&
                                                Number.isFinite(elem[1])) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".strings[" +
                                                        _index3 +
                                                        "][1]",
                                                    expected: "number",
                                                    value: elem[1],
                                                }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".strings[" +
                                                _index3 +
                                                "]",
                                            expected: "[string, number]",
                                            value: elem,
                                        }),
                                ))()) ||
                            $guard(_exceptionable, {
                                path: _path + ".strings",
                                expected: "Map<string, number>",
                                value: input.strings,
                            })) &&
                        (((input.arrays instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".arrays",
                                expected: "Map<Array<number>, number>",
                                value: input.arrays,
                            })) &&
                            (() =>
                                [...input.arrays].every(
                                    (elem: any, _index4: number) =>
                                        ((Array.isArray(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".arrays[" +
                                                    _index4 +
                                                    "]",
                                                expected:
                                                    "[Array<number>, number]",
                                                value: elem,
                                            })) &&
                                            (elem.length === 2 ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".arrays[" +
                                                        _index4 +
                                                        "]",
                                                    expected:
                                                        "[Array<number>, number]",
                                                    value: elem,
                                                })) &&
                                            (((Array.isArray(elem[0]) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".arrays[" +
                                                        _index4 +
                                                        "][0]",
                                                    expected: "Array<number>",
                                                    value: elem[0],
                                                })) &&
                                                elem[0].every(
                                                    (
                                                        elem: any,
                                                        _index5: number,
                                                    ) =>
                                                        ("number" ===
                                                            typeof elem &&
                                                            Number.isFinite(
                                                                elem,
                                                            )) ||
                                                        $guard(_exceptionable, {
                                                            path:
                                                                _path +
                                                                ".arrays[" +
                                                                _index4 +
                                                                "][0][" +
                                                                _index5 +
                                                                "]",
                                                            expected: "number",
                                                            value: elem,
                                                        }),
                                                )) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".arrays[" +
                                                        _index4 +
                                                        "][0]",
                                                    expected: "Array<number>",
                                                    value: elem[0],
                                                })) &&
                                            (("number" === typeof elem[1] &&
                                                Number.isFinite(elem[1])) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".arrays[" +
                                                        _index4 +
                                                        "][1]",
                                                    expected: "number",
                                                    value: elem[1],
                                                }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".arrays[" +
                                                _index4 +
                                                "]",
                                            expected: "[Array<number>, number]",
                                            value: elem,
                                        }),
                                ))()) ||
                            $guard(_exceptionable, {
                                path: _path + ".arrays",
                                expected: "Map<Array<number>, number>",
                                value: input.arrays,
                            })) &&
                        (((input.objects instanceof Map ||
                            $guard(_exceptionable, {
                                path: _path + ".objects",
                                expected: "Map<MapAlias.Person, number>",
                                value: input.objects,
                            })) &&
                            (() =>
                                [...input.objects].every(
                                    (elem: any, _index6: number) =>
                                        ((Array.isArray(elem) ||
                                            $guard(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".objects[" +
                                                    _index6 +
                                                    "]",
                                                expected:
                                                    "[MapAlias.Person, number]",
                                                value: elem,
                                            })) &&
                                            (elem.length === 2 ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".objects[" +
                                                        _index6 +
                                                        "]",
                                                    expected:
                                                        "[MapAlias.Person, number]",
                                                    value: elem,
                                                })) &&
                                            (((("object" === typeof elem[0] &&
                                                null !== elem[0]) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".objects[" +
                                                        _index6 +
                                                        "][0]",
                                                    expected: "MapAlias.Person",
                                                    value: elem[0],
                                                })) &&
                                                $ao1(
                                                    elem[0],
                                                    _path +
                                                        ".objects[" +
                                                        _index6 +
                                                        "][0]",
                                                    true && _exceptionable,
                                                )) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".objects[" +
                                                        _index6 +
                                                        "][0]",
                                                    expected: "MapAlias.Person",
                                                    value: elem[0],
                                                })) &&
                                            (("number" === typeof elem[1] &&
                                                Number.isFinite(elem[1])) ||
                                                $guard(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".objects[" +
                                                        _index6 +
                                                        "][1]",
                                                    expected: "number",
                                                    value: elem[1],
                                                }))) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".objects[" +
                                                _index6 +
                                                "]",
                                            expected:
                                                "[MapAlias.Person, number]",
                                            value: elem,
                                        }),
                                ))()) ||
                            $guard(_exceptionable, {
                                path: _path + ".objects",
                                expected: "Map<MapAlias.Person, number>",
                                value: input.objects,
                            }));
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
                        ((("object" === typeof input && null !== input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "MapAlias",
                                value: input,
                            })) &&
                            $ao0(input, _path + "", true)) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "MapAlias",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            return input;
        };
        input = JSON.parse(input);
        return assert(input) as any;
    })(input),
);
