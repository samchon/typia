import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { TupleRestObject } from "../../../structures/TupleRestObject";
export const test_validateParse_TupleRestObject = _test_validateParse("TupleRestObject", TupleRestObject.generate, (input) => ((input: string): typia.IValidation<typia.Primitive<TupleRestObject>> => { const validate = (input: any): typia.IValidation<TupleRestObject> => {
    const __is = (input: any): input is TupleRestObject => {
        const $io0 = (input: any): boolean => "string" === typeof input.value;
        return Array.isArray(input) && ("boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem))));
    };
    const errors = [] as any[];
    const $report = (typia.validateParse as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is TupleRestObject => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.value || $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "string",
                    value: input.value
                })].every((flag: boolean) => flag);
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
}; input = JSON.parse(input); const output = validate(input); return output as any; })(input), TupleRestObject.SPOILERS);
