import typia from "../../../../src";
import { _test_assertClone } from "../../../internal/_test_assertClone";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_assertClone_ArrayUnion = _test_assertClone(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) =>
        ((input: any): typia.Primitive<Array<ArrayUnion.IUnion>> => {
            const assert: any = (input: any): Array<ArrayUnion.IUnion> => {
                const __is: any = (
                    input: any,
                ): input is Array<ArrayUnion.IUnion> => {
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                Array.isArray(elem) &&
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
                                                    (elem: any) =>
                                                        "string" ===
                                                        typeof elem,
                                                ),
                                        ],
                                        [
                                            (top: any): any =>
                                                "boolean" === typeof top,
                                            (entire: any[]): any =>
                                                entire.every(
                                                    (elem: any) =>
                                                        "boolean" ===
                                                        typeof elem,
                                                ),
                                        ],
                                        [
                                            (top: any): any =>
                                                "number" === typeof top &&
                                                Number.isFinite(top),
                                            (entire: any[]): any =>
                                                entire.every(
                                                    (elem: any) =>
                                                        "number" ===
                                                            typeof elem &&
                                                        Number.isFinite(elem),
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
                                    return false;
                                })(),
                        )
                    );
                };
                const $guard: any = (typia.assertClone as any).guard;
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
                                    expected: "ArrayUnion",
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
                                        const array: any = elem;
                                        const top: any = array[0];
                                        if (0 === elem.length) return true;
                                        const arrayPredicators: any = [
                                            [
                                                (top: any): any =>
                                                    "string" === typeof top,
                                                (entire: any[]): any =>
                                                    entire.every(
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
                                                (top: any): any =>
                                                    "boolean" === typeof top,
                                                (entire: any[]): any =>
                                                    entire.every(
                                                        (
                                                            elem: any,
                                                            _index3: number,
                                                        ) =>
                                                            "boolean" ===
                                                                typeof elem ||
                                                            $guard(true, {
                                                                path:
                                                                    _path +
                                                                    "[" +
                                                                    _index1 +
                                                                    "][" +
                                                                    _index3 +
                                                                    "]",
                                                                expected:
                                                                    "boolean",
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
                                                        (
                                                            elem: any,
                                                            _index4: number,
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
                                                                    _index4 +
                                                                    "]",
                                                                expected:
                                                                    "number",
                                                                value: elem,
                                                            }),
                                                    ),
                                            ],
                                        ];
                                        const passed: any =
                                            arrayPredicators.filter(
                                                (pred: any) => pred[0](top),
                                            );
                                        if (1 === passed.length)
                                            return passed[0][1](array);
                                        else if (1 < passed.length)
                                            for (const pred of passed)
                                                if (
                                                    array.every(
                                                        (value: any) =>
                                                            true ===
                                                            pred[0](value),
                                                    )
                                                )
                                                    return pred[1](array);
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
            const clone: any = (
                input: Array<ArrayUnion.IUnion>,
            ): typia.Primitive<Array<ArrayUnion.IUnion>> => {
                const $throws: any = (typia.assertClone as any).throws;
                return Array.isArray(input)
                    ? (() =>
                          input.map((elem: any) =>
                              Array.isArray(elem)
                                  ? (() => {
                                        const array: any = elem;
                                        const top: any = array[0];
                                        if (0 === elem.length) return true;
                                        const arrayPredicators: any = [
                                            [
                                                (top: any): any =>
                                                    "string" === typeof top,
                                                (entire: any[]): any =>
                                                    entire.map(
                                                        (elem: any) =>
                                                            elem as any,
                                                    ),
                                            ],
                                            [
                                                (top: any): any =>
                                                    "boolean" === typeof top,
                                                (entire: any[]): any =>
                                                    entire.map(
                                                        (elem: any) =>
                                                            elem as any,
                                                    ),
                                            ],
                                            [
                                                (top: any): any =>
                                                    "number" === typeof top,
                                                (entire: any[]): any =>
                                                    entire.map(
                                                        (elem: any) =>
                                                            elem as any,
                                                    ),
                                            ],
                                        ];
                                        const passed: any =
                                            arrayPredicators.filter(
                                                (pred: any) => pred[0](top),
                                            );
                                        if (1 === passed.length)
                                            return passed[0][1](array);
                                        else if (1 < passed.length)
                                            for (const pred of passed)
                                                if (
                                                    array.every(
                                                        (value: any) =>
                                                            true ===
                                                            pred[0](value),
                                                    )
                                                )
                                                    return pred[1](array);
                                        $throws({
                                            expected:
                                                "(Array<string> | Array<boolean> | Array<number>)",
                                            value: elem,
                                        });
                                    })()
                                  : (elem as any),
                          ))()
                    : (input as any);
            };
            assert(input);
            const output: any = clone(input);
            return output;
        })(input),
    ArrayUnion.SPOILERS,
);
