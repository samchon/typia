import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { TupleRestObject } from "../../../structures/TupleRestObject";
export const test_validateEquals_TupleRestObject = _test_validateEquals("TupleRestObject", TupleRestObject.generate, (input) => ((input: any): typia.IValidation<[boolean, number, ...TupleRestObject.IObject[]]> => {
    const __is = (input: any, _exceptionable: boolean = true): input is [boolean, number, ...TupleRestObject.IObject[]] => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean => "string" === typeof input.value && (1 === Object.keys(input).length || Object.keys(input).every(key => {
            if (["value"].some(prop => key === prop))
                return true;
            const value = input[key];
            if (undefined === value)
                return true;
            return false;
        }));
        return Array.isArray(input) && ("boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any, _index1: number) => "object" === typeof elem && null !== elem && $io0(elem, true))));
    };
    const errors = [] as any[];
    const $report = (typia.validateEquals as any).report(errors);
    const $join = (typia.validateEquals as any).join;
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is [boolean, number, ...TupleRestObject.IObject[]] => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.value || $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "string",
                    value: input.value
                }), 1 === Object.keys(input).length || (false === _exceptionable || Object.keys(input).map(key => {
                    if (["value"].some(prop => key === prop))
                        return true;
                    const value = input[key];
                    if (undefined === value)
                        return true;
                    return $report(_exceptionable, {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value
                    });
                }).every((flag: boolean) => flag))].every((flag: boolean) => flag);
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "[boolean, number, ...TupleRestObject.IObject]",
                value: input
            })) && ([
                "boolean" === typeof input[0] || $report(true, {
                    path: _path + "[0]",
                    expected: "boolean",
                    value: input[0]
                }),
                "number" === typeof input[1] && Number.isFinite(input[1]) || $report(true, {
                    path: _path + "[1]",
                    expected: "number",
                    value: input[1]
                })
            ].every((flag: boolean) => flag) && ((Array.isArray(input.slice(2)) || $report(true, {
                path: _path + "",
                expected: "Array<TupleRestObject.IObject>",
                value: input.slice(2)
            })) && input.slice(2).map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
                path: _path + "[" + (2 + _index1) + "]",
                expected: "TupleRestObject.IObject",
                value: elem
            })) && $vo0(elem, _path + "[" + (2 + _index1) + "]", true) || $report(true, {
                path: _path + "[" + (2 + _index1) + "]",
                expected: "TupleRestObject.IObject",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "Array<TupleRestObject.IObject>",
                value: input.slice(2)
            }))) || $report(true, {
                path: _path + "",
                expected: "[boolean, number, ...TupleRestObject.IObject]",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
})(input));
