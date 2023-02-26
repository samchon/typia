import typia from "../../../../src";
import { TupleUnion } from "../../../structures/TupleUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_TupleUnion = _test_validateEquals(
    "TupleUnion",
    TupleUnion.generate,
    (input: any): typia.IValidation<TupleUnion> => {
        const errors = [] as any[];
        const $report = (typia.createValidateEquals as any).report(errors);
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TupleUnion => {
            return (
                ((Array.isArray(input) ||
                    $report(true, {
                        path: _path + "",
                        expected:
                            "Array<([] | [boolean, number] | [number, string, boolean])>",
                        value: input,
                    })) &&
                    input
                        .map(
                            (elem: any, _index1: number) =>
                                ((Array.isArray(elem) ||
                                    $report(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "([] | [boolean, number] | [number, string, boolean])",
                                        value: elem,
                                    })) &&
                                    (() => {
                                        const tupleList = [
                                            [
                                                (top: any) =>
                                                    elem.length === 3 &&
                                                    [
                                                        "number" ===
                                                            typeof elem[0] &&
                                                            Number.isFinite(
                                                                elem[0],
                                                            ),
                                                        "string" ===
                                                            typeof elem[1],
                                                        "boolean" ===
                                                            typeof elem[2],
                                                    ].every(
                                                        (flag: boolean) => flag,
                                                    ),
                                                (top: any) =>
                                                    (top.length === 3 ||
                                                        $report(true, {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "]",
                                                            expected:
                                                                "[number, string, boolean]",
                                                            value: top,
                                                        })) &&
                                                    [
                                                        ("number" ===
                                                            typeof top[0] &&
                                                            Number.isFinite(
                                                                top[0],
                                                            )) ||
                                                            $report(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][0]",
                                                                expected:
                                                                    "number",
                                                                value: top[0],
                                                            }),
                                                        "string" ===
                                                            typeof top[1] ||
                                                            $report(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][1]",
                                                                expected:
                                                                    "string",
                                                                value: top[1],
                                                            }),
                                                        "boolean" ===
                                                            typeof top[2] ||
                                                            $report(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][2]",
                                                                expected:
                                                                    "boolean",
                                                                value: top[2],
                                                            }),
                                                    ].every(
                                                        (flag: boolean) => flag,
                                                    ),
                                            ],
                                            [
                                                (top: any) =>
                                                    elem.length === 2 &&
                                                    [
                                                        "boolean" ===
                                                            typeof elem[0],
                                                        "number" ===
                                                            typeof elem[1] &&
                                                            Number.isFinite(
                                                                elem[1],
                                                            ),
                                                    ].every(
                                                        (flag: boolean) => flag,
                                                    ),
                                                (top: any) =>
                                                    (top.length === 2 ||
                                                        $report(true, {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "]",
                                                            expected:
                                                                "[boolean, number]",
                                                            value: top,
                                                        })) &&
                                                    [
                                                        "boolean" ===
                                                            typeof top[0] ||
                                                            $report(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][0]",
                                                                expected:
                                                                    "boolean",
                                                                value: top[0],
                                                            }),
                                                        ("number" ===
                                                            typeof top[1] &&
                                                            Number.isFinite(
                                                                top[1],
                                                            )) ||
                                                            $report(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][1]",
                                                                expected:
                                                                    "number",
                                                                value: top[1],
                                                            }),
                                                    ].every(
                                                        (flag: boolean) => flag,
                                                    ),
                                            ],
                                            [
                                                (top: any) =>
                                                    elem.length === 0 &&
                                                    [].every(
                                                        (flag: boolean) => flag,
                                                    ),
                                                (top: any) =>
                                                    (top.length === 0 ||
                                                        $report(true, {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "]",
                                                            expected: "[]",
                                                            value: top,
                                                        })) &&
                                                    [].every(
                                                        (flag: boolean) => flag,
                                                    ),
                                            ],
                                        ];
                                        const front = elem;
                                        const filtered = tupleList.filter(
                                            (tuple) => true === tuple[0](front),
                                        );
                                        if (1 === filtered.length)
                                            return filtered[0][1](elem);
                                        const array = elem;
                                        if (1 < filtered.length)
                                            for (const tuple of filtered)
                                                if (
                                                    array.every(
                                                        (value: any) =>
                                                            true ===
                                                            tuple[0](value),
                                                    )
                                                )
                                                    return tuple[1](array);
                                        return $report(_exceptionable, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "([number, string, boolean] | [boolean, number] | [])",
                                            value: elem,
                                        });
                                    })()) ||
                                $report(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "([] | [boolean, number] | [number, string, boolean])",
                                    value: elem,
                                }),
                        )
                        .every((flag: boolean) => flag)) ||
                $report(true, {
                    path: _path + "",
                    expected:
                        "Array<([] | [boolean, number] | [number, string, boolean])>",
                    value: input,
                })
            );
        })(input, "$input", true);
        const success = 0 === errors.length;
        return {
            success,
            errors,
            data: success ? input : undefined,
        } as any;
    },
);
