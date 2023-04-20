import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_assertClone_ArrayUnion = _test_assertClone(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<ArrayUnion.IUnion>> => {
            const assert = (input: any): Array<ArrayUnion.IUnion> => {
                const $guard = (typia.assertClone as any).guard;
                const __is = (
                    input: any,
                ): input is Array<ArrayUnion.IUnion> => {
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                Array.isArray(elem) &&
                                (() => {
                                    if (0 === elem.length) return true;
                                    const tupleList = [
                                        [
                                            (top: any) =>
                                                "string" === typeof top,
                                            (top: any) =>
                                                top.every(
                                                    (elem: any) =>
                                                        "string" ===
                                                        typeof elem,
                                                ),
                                        ],
                                        [
                                            (top: any) =>
                                                "boolean" === typeof top,
                                            (top: any) =>
                                                top.every(
                                                    (elem: any) =>
                                                        "boolean" ===
                                                        typeof elem,
                                                ),
                                        ],
                                        [
                                            (top: any) =>
                                                "number" === typeof top &&
                                                Number.isFinite(top),
                                            (top: any) =>
                                                top.every(
                                                    (elem: any) =>
                                                        "number" ===
                                                            typeof elem &&
                                                        Number.isFinite(elem),
                                                ),
                                        ],
                                    ];
                                    const front = elem[0];
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
                                    return false;
                                })(),
                        )
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<ArrayUnion.IUnion> => {
                        return (
                            (Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "Array<(Array<boolean> | Array<number> | Array<string>)>",
                                    value: input,
                                })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    (Array.isArray(elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Array<boolean> | Array<number> | Array<string>)",
                                            value: elem,
                                        })) &&
                                    (() => {
                                        if (0 === elem.length) return true;
                                        const tupleList = [
                                            [
                                                (top: any) =>
                                                    "string" === typeof top,
                                                (top: any) =>
                                                    top.every(
                                                        (
                                                            elem: any,
                                                            _index2: number,
                                                        ) =>
                                                            "string" ===
                                                                typeof elem ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][" +
                                                                    _index2 +
                                                                    "]",
                                                                expected:
                                                                    "string",
                                                                value: elem,
                                                            }),
                                                    ),
                                            ],
                                            [
                                                (top: any) =>
                                                    "boolean" === typeof top,
                                                (top: any) =>
                                                    top.every(
                                                        (
                                                            elem: any,
                                                            _index2: number,
                                                        ) =>
                                                            "boolean" ===
                                                                typeof elem ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][" +
                                                                    _index2 +
                                                                    "]",
                                                                expected:
                                                                    "boolean",
                                                                value: elem,
                                                            }),
                                                    ),
                                            ],
                                            [
                                                (top: any) =>
                                                    "number" === typeof top &&
                                                    Number.isFinite(top),
                                                (top: any) =>
                                                    top.every(
                                                        (
                                                            elem: any,
                                                            _index2: number,
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
                                                                    _index2 +
                                                                    "]",
                                                                expected:
                                                                    "number",
                                                                value: elem,
                                                            }),
                                                    ),
                                            ],
                                        ];
                                        const front = elem[0];
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
                                        return $guard(_exceptionable, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Array<string> | Array<boolean> | Array<number>)",
                                            value: elem,
                                        });
                                    })(),
                            )
                        );
                    })(input, "$input", true);
                return input;
            };
            const clone = (
                input: Array<ArrayUnion.IUnion>,
            ): typia.Primitive<Array<ArrayUnion.IUnion>> => {
                const $throws = (typia.assertClone as any).throws;
                return Array.isArray(input)
                    ? input.map((elem: any) =>
                          Array.isArray(elem)
                              ? (() => {
                                    if (0 === elem.length) return;
                                    const tupleList = [
                                        [
                                            (top: any) =>
                                                "string" === typeof top,
                                            (top: any) =>
                                                top.map(
                                                    (elem: any) => elem as any,
                                                ),
                                        ],
                                        [
                                            (top: any) =>
                                                "boolean" === typeof top,
                                            (top: any) =>
                                                top.map(
                                                    (elem: any) => elem as any,
                                                ),
                                        ],
                                        [
                                            (top: any) =>
                                                "number" === typeof top,
                                            (top: any) =>
                                                top.map(
                                                    (elem: any) => elem as any,
                                                ),
                                        ],
                                    ];
                                    const front = elem[0];
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
                                    $throws({
                                        expected:
                                            "(Array<string> | Array<boolean> | Array<number>)",
                                        value: elem,
                                    });
                                })()
                              : (elem as any),
                      )
                    : (input as any);
            };
            assert(input);
            const output = clone(input);
            return output;
        })(input),
    ArrayUnion.SPOILERS,
);
