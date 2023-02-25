import typia from "../../../src";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";
import { _test_validateEquals } from "../internal/_test_validateEquals";
export const test_validateEquals_TupleRestAtomic = _test_validateEquals("TupleRestAtomic", TupleRestAtomic.generate, (input) => ((input: any): typia.IValidation<TupleRestAtomic> => {
    const errors = [] as any[];
    const $report = (typia.validateEquals as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is TupleRestAtomic => {
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
            "number" === typeof input[1] || $report(true, {
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
    } as typia.IValidation<TupleRestAtomic>;
})(input));
