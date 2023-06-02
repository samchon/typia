import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_assertStringify_ArrayUnion = _test_assertStringify(
    "ArrayUnion",
    ArrayUnion.generate,
    (input) =>
        ((input: any): string => {
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
                const $guard: any = (typia.assertStringify as any).guard;
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
            const stringify: any = (
                input: Array<ArrayUnion.IUnion>,
            ): string => {
                const $string: any = (typia.assertStringify as any).string;
                const $number: any = (typia.assertStringify as any).number;
                const $throws: any = (typia.assertStringify as any).throws;
                return (() =>
                    `[${input
                        .map((elem: any) =>
                            (() => {
                                const array: any = elem;
                                const top: any = array[0];
                                if (0 === elem.length) return true;
                                const arrayPredicators: any = [
                                    [
                                        (top: any): any =>
                                            "string" === typeof top,
                                        (entire: any[]): any =>
                                            `[${entire
                                                .map((elem: any) =>
                                                    $string(elem),
                                                )
                                                .join(",")}]`,
                                    ],
                                    [
                                        (top: any): any =>
                                            "boolean" === typeof top,
                                        (entire: any[]): any =>
                                            `[${entire
                                                .map((elem: any) => elem)
                                                .join(",")}]`,
                                    ],
                                    [
                                        (top: any): any =>
                                            "number" === typeof top,
                                        (entire: any[]): any =>
                                            `[${entire
                                                .map((elem: any) =>
                                                    $number(elem),
                                                )
                                                .join(",")}]`,
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
                                $throws({
                                    expected:
                                        "(Array<string> | Array<boolean> | Array<number>)",
                                    value: elem,
                                });
                            })(),
                        )
                        .join(",")}]`)();
            };
            return stringify(assert(input));
        })(input),
    ArrayUnion.SPOILERS,
);
