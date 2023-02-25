import typia from "../../../src";
import { TupleRestArray } from "../../structures/TupleRestArray";
import { _test_validatePrune } from "../internal/_test_validatePrune";
export const test_validatePrune_TupleRestArray = _test_validatePrune("TupleRestArray", TupleRestArray.generate, (input) => ((input: any): typia.IValidation<TupleRestArray> => { const validate = (input: any): typia.IValidation<TupleRestArray> => {
    const errors = [] as any[];
    const $report = (typia.validatePrune as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is TupleRestArray => {
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "[boolean, number, ...Array<string>]",
            value: input
        })) && ([
            "boolean" === typeof input[0] || $report(true, {
                path: _path + "[0]",
                expected: "boolean",
                value: input[0]
            }),
            "number" === typeof input[1] && !Number.isNaN(input[1]) || $report(true, {
                path: _path + "[1]",
                expected: "number",
                value: input[1]
            })
        ].every((flag: boolean) => flag) && ((Array.isArray(input.slice(2)) || $report(true, {
            path: _path + "",
            expected: "Array<Array<string>>",
            value: input.slice(2)
        })) && input.slice(2).map((elem: any, _index1: number) => (Array.isArray(elem) || $report(true, {
            path: _path + "[" + (2 + _index1) + "]",
            expected: "Array<string>",
            value: elem
        })) && elem.map((elem: any, _index2: number) => "string" === typeof elem || $report(true, {
            path: _path + "[" + (2 + _index1) + "][" + _index2 + "]",
            expected: "string",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "[" + (2 + _index1) + "]",
            expected: "Array<string>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Array<string>>",
            value: input.slice(2)
        }))) || $report(true, {
            path: _path + "",
            expected: "[boolean, number, ...Array<string>]",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<TupleRestArray>;
}; const prune = (input: TupleRestArray): void => {
}; const output = validate(input); if (output.success)
    prune(input); return output; })(input), TupleRestArray.SPOILERS);
