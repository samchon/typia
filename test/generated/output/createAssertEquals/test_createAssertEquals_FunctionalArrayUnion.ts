import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { FunctionalArrayUnion } from "../../../structures/FunctionalArrayUnion";

export const test_createAssertEquals_FunctionalArrayUnion = _test_assertEquals(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    (input: any): FunctionalArrayUnion => {
        const __is: any = (
            input: any,
            _exceptionable: boolean = true,
        ): input is FunctionalArrayUnion => {
            return (
                Array.isArray(input) &&
                input.every(
                    (elem: any, _index1: number) =>
                        Array.isArray(elem) &&
                        (() => {
                            const array: any = elem;
                            const top: any = array[0];
                            if (0 === elem.length) return true;
                            const arrayPredicators: any = [
                                [
                                    (top: any): any => "string" === typeof top,
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any, _index2: number) =>
                                                "string" === typeof elem,
                                        ),
                                ],
                                [
                                    (top: any): any =>
                                        "number" === typeof top &&
                                        Number.isFinite(top),
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any, _index3: number) =>
                                                "number" === typeof elem &&
                                                Number.isFinite(elem),
                                        ),
                                ],
                                [
                                    (top: any): any =>
                                        "function" === typeof top,
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any, _index4: number) =>
                                                "function" === typeof elem,
                                        ),
                                ],
                                [
                                    (top: any): any =>
                                        undefined !== top && null === top,
                                    (entire: any[]): any =>
                                        entire.every(
                                            (elem: any, _index5: number) =>
                                                undefined !== elem &&
                                                null === elem,
                                        ),
                                ],
                            ];
                            const passed: any = arrayPredicators.filter(
                                (pred: any) => pred[0](top),
                            );
                            if (1 === passed.length) return passed[0][1](array);
                            else if (1 < passed.length)
                                for (const pred of passed)
                                    if (
                                        array.every(
                                            (value: any) =>
                                                true === pred[0](value),
                                        )
                                    )
                                        return pred[1](array);
                            return false;
                        })(),
                )
            );
        };
        const $guard: any = (typia.createAssertEquals as any).guard;
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
                            expected: "FunctionalArrayUnion",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (Array.isArray(elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Array<__type> | Array<null> | Array<number> | Array<string>)",
                                    value: elem,
                                })) &&
                            (() => {
                                const array: any = elem;
                                const top: any = array[0];
                                if (0 === elem.length) return true;
                                const arrayPredicators: any = [
                                    [
                                        (top: any): any =>
                                            "string" === typeof top,
                                        (entire: any[]): any =>
                                            entire.every(
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
                                        (top: any): any =>
                                            "number" === typeof top &&
                                            Number.isFinite(top),
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any, _index3: number) =>
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
                                                            _index3 +
                                                            "]",
                                                        expected: "number",
                                                        value: elem,
                                                    }),
                                            ),
                                    ],
                                    [
                                        (top: any): any =>
                                            "function" === typeof top,
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any, _index4: number) =>
                                                    "function" ===
                                                        typeof elem ||
                                                    $guard(true, {
                                                        path:
                                                            _path +
                                                            "[" +
                                                            _index1 +
                                                            "][" +
                                                            _index4 +
                                                            "]",
                                                        expected: "unknown",
                                                        value: elem,
                                                    }),
                                            ),
                                    ],
                                    [
                                        (top: any): any =>
                                            undefined !== top && null === top,
                                        (entire: any[]): any =>
                                            entire.every(
                                                (elem: any, _index5: number) =>
                                                    (undefined !== elem ||
                                                        $guard(true, {
                                                            path:
                                                                _path +
                                                                "[" +
                                                                _index1 +
                                                                "][" +
                                                                _index5 +
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
                                                                _index5 +
                                                                "]",
                                                            expected: "null",
                                                            value: elem,
                                                        })),
                                            ),
                                    ],
                                ];
                                const passed: any = arrayPredicators.filter(
                                    (pred: any) => pred[0](top),
                                );
                                if (1 === passed.length)
                                    return passed[0][1](array);
                                else if (1 < passed.length)
                                    for (const pred of passed)
                                        if (
                                            array.every(
                                                (value: any) =>
                                                    true === pred[0](value),
                                            )
                                        )
                                            return pred[1](array);
                                return $guard(_exceptionable, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Array<string> | Array<number> | Array<__type> | Array<null>)",
                                    value: elem,
                                });
                            })(),
                    )
                );
            })(input, "$input", true);
        return input;
    },
);
