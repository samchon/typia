import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { MapUnion } from "../../../structures/MapUnion";

export const test_createAssert_MapUnion = _test_assert(
    "MapUnion",
    MapUnion.generate,
    (input: any): MapUnion => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is MapUnion => {
            const $ao0 = (
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
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            "Array<(Map<Array<number>, number> | Map<MapUnion.Person, number> | Map<boolean, number> | Map<number, number> | Map<string, number>)>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (elem instanceof Map ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                    "(Map<Array<number>, number> | Map<MapUnion.Person, number> | Map<boolean, number> | Map<number, number> | Map<string, number>)",
                                value: elem,
                            })) &&
                        (() => {
                            if (0 === elem.size) return true;
                            const tupleList = [
                                [
                                    (top: any) =>
                                        "boolean" === typeof top[0] &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (top: any) =>
                                        top.every(
                                            (elem: any, _index2: number) =>
                                                (Array.isArray(elem) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "[boolean, number]",
                                                        value: elem,
                                                    })) &&
                                                (elem.length === 2 ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "[boolean, number]",
                                                        value: elem,
                                                    })) &&
                                                ("boolean" === typeof elem[0] ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index2 +
                                                            "][0]",
                                                        expected: "boolean",
                                                        value: elem[0],
                                                    })) &&
                                                (("number" === typeof elem[1] &&
                                                    Number.isFinite(elem[1])) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index2 +
                                                            "][1]",
                                                        expected: "number",
                                                        value: elem[1],
                                                    })),
                                        ),
                                ],
                                [
                                    (top: any) =>
                                        "number" === typeof top[0] &&
                                        Number.isFinite(top[0]) &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (top: any) =>
                                        top.every(
                                            (elem: any, _index3: number) =>
                                                (Array.isArray(elem) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "[number, number]",
                                                        value: elem,
                                                    })) &&
                                                (elem.length === 2 ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index3 +
                                                            "]",
                                                        expected:
                                                            "[number, number]",
                                                        value: elem,
                                                    })) &&
                                                (("number" === typeof elem[0] &&
                                                    Number.isFinite(elem[0])) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index3 +
                                                            "][0]",
                                                        expected: "number",
                                                        value: elem[0],
                                                    })) &&
                                                (("number" === typeof elem[1] &&
                                                    Number.isFinite(elem[1])) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index3 +
                                                            "][1]",
                                                        expected: "number",
                                                        value: elem[1],
                                                    })),
                                        ),
                                ],
                                [
                                    (top: any) =>
                                        "string" === typeof top[0] &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (top: any) =>
                                        top.every(
                                            (elem: any, _index4: number) =>
                                                (Array.isArray(elem) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index4 +
                                                            "]",
                                                        expected:
                                                            "[string, number]",
                                                        value: elem,
                                                    })) &&
                                                (elem.length === 2 ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index4 +
                                                            "]",
                                                        expected:
                                                            "[string, number]",
                                                        value: elem,
                                                    })) &&
                                                ("string" === typeof elem[0] ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index4 +
                                                            "][0]",
                                                        expected: "string",
                                                        value: elem[0],
                                                    })) &&
                                                (("number" === typeof elem[1] &&
                                                    Number.isFinite(elem[1])) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index4 +
                                                            "][1]",
                                                        expected: "number",
                                                        value: elem[1],
                                                    })),
                                        ),
                                ],
                                [
                                    (top: any) =>
                                        Array.isArray(top[0]) &&
                                        top[0].every(
                                            (elem: any, _index5: number) =>
                                                "number" === typeof elem &&
                                                Number.isFinite(elem),
                                        ) &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (top: any) =>
                                        top.every(
                                            (elem: any, _index6: number) =>
                                                (Array.isArray(elem) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index6 +
                                                            "]",
                                                        expected:
                                                            "[Array<number>, number]",
                                                        value: elem,
                                                    })) &&
                                                (elem.length === 2 ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index6 +
                                                            "]",
                                                        expected:
                                                            "[Array<number>, number]",
                                                        value: elem,
                                                    })) &&
                                                (Array.isArray(elem[0]) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index6 +
                                                            "][0]",
                                                        expected:
                                                            "Array<number>",
                                                        value: elem[0],
                                                    })) &&
                                                elem[0].every(
                                                    (
                                                        elem: any,
                                                        _index7: number,
                                                    ) =>
                                                        ("number" ===
                                                            typeof elem &&
                                                            Number.isFinite(
                                                                elem,
                                                            )) ||
                                                        $guard(true, {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "][" +
                                                                _index6 +
                                                                "][0][" +
                                                                _index7 +
                                                                "]",
                                                            expected: "number",
                                                            value: elem,
                                                        }),
                                                ) &&
                                                (("number" === typeof elem[1] &&
                                                    Number.isFinite(elem[1])) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index6 +
                                                            "][1]",
                                                        expected: "number",
                                                        value: elem[1],
                                                    })),
                                        ),
                                ],
                                [
                                    (top: any) =>
                                        "object" === typeof top[0] &&
                                        null !== top[0] &&
                                        $ao0(top[0], _path + "[0]"[0], false) &&
                                        "number" === typeof top[1] &&
                                        Number.isFinite(top[1]),
                                    (top: any) =>
                                        top.every(
                                            (elem: any, _index8: number) =>
                                                (Array.isArray(elem) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index8 +
                                                            "]",
                                                        expected:
                                                            "[MapUnion.Person, number]",
                                                        value: elem,
                                                    })) &&
                                                (elem.length === 2 ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index8 +
                                                            "]",
                                                        expected:
                                                            "[MapUnion.Person, number]",
                                                        value: elem,
                                                    })) &&
                                                (("object" === typeof elem[0] &&
                                                    null !== elem[0]) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index8 +
                                                            "][0]",
                                                        expected:
                                                            "MapUnion.Person",
                                                        value: elem[0],
                                                    })) &&
                                                $ao0(
                                                    elem[0],
                                                    _path +
                                                        "[" +
                                                        _index1 +
                                                        "][" +
                                                        _index8 +
                                                        "][0]",
                                                    true,
                                                ) &&
                                                (("number" === typeof elem[1] &&
                                                    Number.isFinite(elem[1])) ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index8 +
                                                            "][1]",
                                                        expected: "number",
                                                        value: elem[1],
                                                    })),
                                        ),
                                ],
                            ];
                            const front = elem.entries().next().value;
                            const filtered = tupleList.filter(
                                (tuple) => true === tuple[0](front),
                            );
                            if (1 === filtered.length)
                                return filtered[0][1]([...elem]);
                            const array = [...elem];
                            if (1 < filtered.length)
                                for (const tuple of filtered)
                                    if (
                                        array.every(
                                            (value: any) =>
                                                true === tuple[0](value),
                                        )
                                    )
                                        return tuple[1](array);
                            return $guard(_exceptionable, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                    "(Map<boolean, number> | Map<number, number> | Map<string, number> | Map<Array<number>, number> | Map<MapUnion.Person, number>)",
                                value: elem,
                            });
                        })(),
                )
            );
        })(input, "$input", true);
        return input;
    },
    MapUnion.SPOILERS,
);
