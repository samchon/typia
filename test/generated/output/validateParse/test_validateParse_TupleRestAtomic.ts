import typia from "../../../../src";
import { _test_validateParse } from "../../../internal/_test_validateParse";
import { TupleRestAtomic } from "../../../structures/TupleRestAtomic";
export const test_validateParse_TupleRestAtomic = _test_validateParse("TupleRestAtomic", TupleRestAtomic.generate, (input) => ((input: string): typia.IValidation<typia.Primitive<TupleRestAtomic>> => { const validate = (input: any): typia.IValidation<TupleRestAtomic> => {
    const __is = (input: any): input is TupleRestAtomic => {
        return Array.isArray(input) && ("boolean" === typeof input[0] && ("number" === typeof input[1] && Number.isFinite(input[1])) && (Array.isArray(input.slice(2)) && input.slice(2).every((elem: any) => "string" === typeof elem)));
    };
    const errors = [] as any[];
    const $report = (typia.validateParse as any).report(errors);
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is TupleRestAtomic => {
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "[boolean, number, ...string]",
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
                expected: "Array<string>",
                value: input.slice(2)
            })) && input.slice(2).map((elem: any, _index1: number) => "string" === typeof elem || $report(true, {
                path: _path + "[" + (2 + _index1) + "]",
                expected: "string",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "Array<string>",
                value: input.slice(2)
            }))) || $report(true, {
                path: _path + "",
                expected: "[boolean, number, ...string]",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; input = JSON.parse(input); const output = validate(input); return output as any; })(input), TupleRestAtomic.SPOILERS);
