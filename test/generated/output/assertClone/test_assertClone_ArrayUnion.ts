import typia from "../../../../src";
import { ArrayUnion } from "../../../structures/ArrayUnion";
import { _test_assertClone } from "../../../internal/_test_assertClone";
export const test_assertClone_ArrayUnion = _test_assertClone("ArrayUnion", ArrayUnion.generate, (input) => ((input: any): typia.Primitive<Array<ArrayUnion.IUnion>> => { const assert = (input: any): Array<ArrayUnion.IUnion> => {
    const __is = (input: any): input is Array<ArrayUnion.IUnion> => {
        const $ip0 = (input: any) => {
            const array = input;
            const top = input[0];
            if (0 === input.length)
                return true;
            const arrayPredicators = [
                [
                    (top: any): any => "string" === typeof top,
                    (entire: any[]): any => entire.every((elem: any) => "string" === typeof elem)
                ],
                [
                    (top: any): any => "boolean" === typeof top,
                    (entire: any[]): any => entire.every((elem: any) => "boolean" === typeof elem)
                ],
                [
                    (top: any): any => "number" === typeof top && Number.isFinite(top),
                    (entire: any[]): any => entire.every((elem: any) => "number" === typeof elem && Number.isFinite(elem))
                ]
            ];
            const passed = arrayPredicators.filter((pred: any) => pred[0](top));
            if (1 === passed.length)
                return passed[0][1](array);
            else if (1 < passed.length)
                for (const pred of passed)
                    if (array.every((value: any) => true === pred[0](value)))
                        return pred[1](array);
            return false;
        };
        return Array.isArray(input) && input.every((elem: any) => Array.isArray(elem) && ($ip0(elem) || false));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<ArrayUnion.IUnion> => {
            const $guard = (typia.assertClone as any).guard;
            const $ap0 = (input: any, _path: string, _exceptionable: boolean = true) => {
                const array = input;
                const top = input[0];
                if (0 === input.length)
                    return true;
                const arrayPredicators = [
                    [
                        (top: any): any => "string" === typeof top,
                        (entire: any[]): any => entire.every((elem: any, _index5: number) => "string" === typeof elem || $guard(_exceptionable, {
                            path: _path + "[" + _index5 + "]",
                            expected: "string",
                            value: elem
                        }))
                    ],
                    [
                        (top: any): any => "boolean" === typeof top,
                        (entire: any[]): any => entire.every((elem: any, _index6: number) => "boolean" === typeof elem || $guard(_exceptionable, {
                            path: _path + "[" + _index6 + "]",
                            expected: "boolean",
                            value: elem
                        }))
                    ],
                    [
                        (top: any): any => "number" === typeof top && Number.isFinite(top),
                        (entire: any[]): any => entire.every((elem: any, _index7: number) => "number" === typeof elem && Number.isFinite(elem) || $guard(_exceptionable, {
                            path: _path + "[" + _index7 + "]",
                            expected: "number",
                            value: elem
                        }))
                    ]
                ];
                const passed = arrayPredicators.filter((pred: any) => pred[0](top));
                if (1 === passed.length)
                    return passed[0][1](array);
                else if (1 < passed.length)
                    for (const pred of passed)
                        if (array.every((value: any) => true === pred[0](value)))
                            return pred[1](array);
                return $guard(_exceptionable, {
                    path: _path,
                    expected: "(Array<string> | Array<boolean> | Array<number>)",
                    value: input
                });
            };
            return (Array.isArray(input) || $guard(true, {
                path: _path + "",
                expected: "ArrayUnion",
                value: input
            })) && input.every((elem: any, _index1: number) => (Array.isArray(elem) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<boolean> | Array<number> | Array<string>)",
                value: elem
            })) && ($ap0(elem, _path + "[" + _index1 + "]", true && _exceptionable) || $guard(_exceptionable, {
                path: _path + "[" + _index1 + "]",
                expected: "Array<string> | Array<boolean> | Array<number>",
                value: elem
            })) || $guard(true, {
                path: _path + "[" + _index1 + "]",
                expected: "(Array<boolean> | Array<number> | Array<string>)",
                value: elem
            })) || $guard(true, {
                path: _path + "",
                expected: "ArrayUnion",
                value: input
            });
        })(input, "$input", true);
    return input;
}; const clone = (input: Array<ArrayUnion.IUnion>): typia.Primitive<Array<ArrayUnion.IUnion>> => {
    const $throws = (typia.assertClone as any).throws;
    const $cp0 = (input: any) => {
        const array = input;
        const top = input[0];
        if (0 === input.length)
            return [];
        const arrayPredicators = [
            [
                (top: any): any => "string" === typeof top,
                (entire: any[]): any => entire.map((elem: any) => elem as any)
            ],
            [
                (top: any): any => "boolean" === typeof top,
                (entire: any[]): any => entire.map((elem: any) => elem as any)
            ],
            [
                (top: any): any => "number" === typeof top,
                (entire: any[]): any => entire.map((elem: any) => elem as any)
            ]
        ];
        const passed = arrayPredicators.filter((pred: any) => pred[0](top));
        if (1 === passed.length)
            return passed[0][1](array);
        else if (1 < passed.length)
            for (const pred of passed)
                if (array.every((value: any) => true === pred[0](value)))
                    return pred[1](array);
        $throws({
            expected: "(Array<string> | Array<boolean> | Array<number>)",
            value: input
        });
    };
    const $cp1 = (input: any) => input.map((elem: any) => Array.isArray(elem) ? $cp0(elem) : elem as any);
    return Array.isArray(input) ? $cp1(input) : input as any;
}; assert(input); const output = clone(input); return output; })(input), ArrayUnion.SPOILERS);
