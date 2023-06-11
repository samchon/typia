import typia from "../../../../src";
import { TagAtomicUnion } from "../../../structures/TagAtomicUnion";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
export const test_validatePrune_TagAtomicUnion = _test_validatePrune("TagAtomicUnion", TagAtomicUnion.generate, (input) => ((input: any): typia.IValidation<Array<TagAtomicUnion.Type>> => { const validate = (input: any): typia.IValidation<Array<TagAtomicUnion.Type>> => {
    const errors = [] as any[];
    const $report = (typia.validatePrune as any).report(errors);
    const __is = (input: any): input is Array<TagAtomicUnion.Type> => {
        const $io0 = (input: any): boolean => "string" === typeof input.value && 3 <= input.value.length && 7 >= input.value.length || "number" === typeof input.value && Number.isFinite(input.value) && 3 <= input.value;
        return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $io0(elem));
    };
    if (false === __is(input))
        ((input: any, _path: string, _exceptionable: boolean = true): input is Array<TagAtomicUnion.Type> => {
            const $vo0 = (input: any, _path: string, _exceptionable: boolean = true): boolean => ["string" === typeof input.value && (3 <= input.value.length || $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "string (@minLength 3)",
                    value: input.value
                })) && (7 >= input.value.length || $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "string (@maxLength 7)",
                    value: input.value
                })) || "number" === typeof input.value && Number.isFinite(input.value) && (3 <= input.value || $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "number (@minimum 3)",
                    value: input.value
                })) || $report(_exceptionable, {
                    path: _path + ".value",
                    expected: "(number | string)",
                    value: input.value
                })].every((flag: boolean) => flag);
            return (Array.isArray(input) || $report(true, {
                path: _path + "",
                expected: "TagAtomicUnion",
                value: input
            })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagAtomicUnion.Type",
                value: elem
            })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
                path: _path + "[" + _index1 + "]",
                expected: "TagAtomicUnion.Type",
                value: elem
            })).every((flag: boolean) => flag) || $report(true, {
                path: _path + "",
                expected: "TagAtomicUnion",
                value: input
            });
        })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as any;
}; const prune = (input: Array<TagAtomicUnion.Type>): void => {
    const $pp0 = (input: any) => input.forEach((elem: any) => {
        if ("object" === typeof elem && null !== elem)
            $po0(elem);
    });
    const $po0 = (input: any): any => {
        for (const key of Object.keys(input)) {
            if ("value" === key)
                continue;
            delete input[key];
        }
    };
    if (Array.isArray(input))
        $pp0(input);
}; const output = validate(input); if (output.success)
    prune(input); return output; })(input), TagAtomicUnion.SPOILERS);
