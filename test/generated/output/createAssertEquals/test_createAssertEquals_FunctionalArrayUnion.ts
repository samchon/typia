import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { FunctionalArrayUnion } from "../../../structures/FunctionalArrayUnion";

export const test_createAssertEquals_FunctionalArrayUnion = _test_assertEquals(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    (input: any): FunctionalArrayUnion => {
        const $guard = (typia.createAssertEquals as any).guard;
        const __is = (
            input: any,
            _exceptionable: boolean = true,
        ): input is FunctionalArrayUnion => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) =>
                        Array.isArray(elem) &&
                        (() => {
                            if (0 === elem.length) return true;
                            const tupleList = [
                                [
                                    (top: any) => "string" === typeof top,
                                    (top: any) =>
                                        top.every(
                                            (elem: any, _index2: number) =>
                                                "string" === typeof elem,
                                        ),
                                ],
                                [
                                    (top: any) =>
                                        "number" === typeof top &&
                                        Number.isFinite(top),
                                    (top: any) =>
                                        top.every(
                                            (elem: any, _index2: number) =>
                                                "number" === typeof elem &&
                                                Number.isFinite(elem),
                                        ),
                                ],
                                [
                                    (top: any) => "function" === typeof top,
                                    (top: any) =>
                                        top.every(
                                            (elem: any, _index2: number) =>
                                                "function" === typeof elem,
                                        ),
                                ],
                                [
                                    (top: any) =>
                                        undefined !== top && null === top,
                                    (top: any) =>
                                        top.every(
                                            (elem: any, _index2: number) =>
                                                undefined !== elem &&
                                                null === elem,
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
                                                true === tuple[0](value),
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
            ): input is FunctionalArrayUnion => {
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "Array<(Array<null> | Array<number> | Array<string> | Array<unknown>)>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (Array.isArray(elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Array<null> | Array<number> | Array<string> | Array<unknown>)",
                                    value: elem,
                                })) &&
                            (() => {
                                if (0 === elem.length) return true;
                                const tupleList = [
                                    [
                                        (top: any) => "string" === typeof top,
                                        (top: any) =>
                                            top.every(
                                                (elem: any, _index2: number) =>
                                                    "string" === typeof elem ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index2 +
                                                            "]",
                                                        expected: "string",
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
                                                (elem: any, _index2: number) =>
                                                    ("number" === typeof elem &&
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
                                                        expected: "number",
                                                        value: elem,
                                                    }),
                                            ),
                                    ],
                                    [
                                        (top: any) => "function" === typeof top,
                                        (top: any) =>
                                            top.every(
                                                (elem: any, _index2: number) =>
                                                    "function" ===
                                                        typeof elem ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index2 +
                                                            "]",
                                                        expected: "unknown",
                                                        value: elem,
                                                    }),
                                            ),
                                    ],
                                    [
                                        (top: any) =>
                                            undefined !== top && null === top,
                                        (top: any) =>
                                            top.every(
                                                (elem: any, _index2: number) =>
                                                    (undefined !== elem ||
                                                        $guard(true, {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "][" +
                                                                _index2 +
                                                                "]",
                                                            expected: "null",
                                                            value: elem,
                                                        })) &&
                                                    (null === elem ||
                                                        $guard(true, {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "][" +
                                                                _index2 +
                                                                "]",
                                                            expected: "null",
                                                            value: elem,
                                                        })),
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
                                                    true === tuple[0](value),
                                            )
                                        )
                                            return tuple[1](array);
                                return $guard(_exceptionable, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Array<string> | Array<number> | Array<unknown> | Array<null>)",
                                    value: elem,
                                });
                            })(),
                    )
                );
            })(input, "$input", true);
        return input;
    },
);
