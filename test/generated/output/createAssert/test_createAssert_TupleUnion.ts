import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { TupleUnion } from "../../../structures/TupleUnion";

export const test_createAssert_TupleUnion = _test_assert(
    "TupleUnion",
    TupleUnion.generate,
    (input: any): Array<TupleUnion.Union> => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is TupleUnion => {
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            "Array<([] | [boolean, number] | [number, string, boolean])>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (Array.isArray(elem) ||
                            $guard(true, {
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
                                        "number" === typeof elem[0] &&
                                        Number.isFinite(elem[0]) &&
                                        "string" === typeof elem[1] &&
                                        "boolean" === typeof elem[2],
                                    (top: any) =>
                                        (top.length === 3 ||
                                            $guard(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "[number, string, boolean]",
                                                value: top,
                                            })) &&
                                        (("number" === typeof top[0] &&
                                            Number.isFinite(top[0])) ||
                                            $guard(true, {
                                                path:
                                                    _path +
                                                    "[" +
                                                    _index1 +
                                                    "][0]",
                                                expected: "number",
                                                value: top[0],
                                            })) &&
                                        ("string" === typeof top[1] ||
                                            $guard(true, {
                                                path:
                                                    _path +
                                                    "[" +
                                                    _index1 +
                                                    "][1]",
                                                expected: "string",
                                                value: top[1],
                                            })) &&
                                        ("boolean" === typeof top[2] ||
                                            $guard(true, {
                                                path:
                                                    _path +
                                                    "[" +
                                                    _index1 +
                                                    "][2]",
                                                expected: "boolean",
                                                value: top[2],
                                            })),
                                ],
                                [
                                    (top: any) =>
                                        elem.length === 2 &&
                                        "boolean" === typeof elem[0] &&
                                        "number" === typeof elem[1] &&
                                        Number.isFinite(elem[1]),
                                    (top: any) =>
                                        (top.length === 2 ||
                                            $guard(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected: "[boolean, number]",
                                                value: top,
                                            })) &&
                                        ("boolean" === typeof top[0] ||
                                            $guard(true, {
                                                path:
                                                    _path +
                                                    "[" +
                                                    _index1 +
                                                    "][0]",
                                                expected: "boolean",
                                                value: top[0],
                                            })) &&
                                        (("number" === typeof top[1] &&
                                            Number.isFinite(top[1])) ||
                                            $guard(true, {
                                                path:
                                                    _path +
                                                    "[" +
                                                    _index1 +
                                                    "][1]",
                                                expected: "number",
                                                value: top[1],
                                            })),
                                ],
                                [
                                    (top: any) => elem.length === 0,
                                    (top: any) =>
                                        top.length === 0 ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected: "[]",
                                            value: top,
                                        }),
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
                                                true === tuple[0](value),
                                        )
                                    )
                                        return tuple[1](array);
                            return $guard(_exceptionable, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                    "([number, string, boolean] | [boolean, number] | [])",
                                value: elem,
                            });
                        })(),
                )
            );
        })(input, "$input", true);
        return input;
    },
    TupleUnion.SPOILERS,
);
