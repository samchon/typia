import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_createValidateStringify_ArraySimple = _test_validateStringify("ArraySimple", ArraySimple.generate, (input: ArraySimple): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<ArraySimple> => {
    const errors = [] as any[];
    const $report = (typia.createValidateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ArraySimple => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "string" === typeof input.email || $report(_exceptionable, {
                path: _path + ".email",
                expected: "string",
                value: input.email
            }), (Array.isArray(input.hobbies) || $report(_exceptionable, {
                path: _path + ".hobbies",
                expected: "Array<Resolve<ArraySimple.IHobby>>",
                value: input.hobbies
            })) && input.hobbies.map((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                path: _path + ".hobbies[" + _index2 + "]",
                expected: "Resolve<ArraySimple.IHobby>",
                value: elem
            })) && $vo1(elem, _path + ".hobbies[" + _index2 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".hobbies[" + _index2 + "]",
                expected: "Resolve<ArraySimple.IHobby>",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".hobbies",
                expected: "Array<Resolve<ArraySimple.IHobby>>",
                value: input.hobbies
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "string" === typeof input.body || $report(_exceptionable, {
                path: _path + ".body",
                expected: "string",
                value: input.body
            }), "number" === typeof input.rank && !Number.isNaN(input.rank) || $report(_exceptionable, {
                path: _path + ".rank",
                expected: "number",
                value: input.rank
            })].every((flag: boolean) => flag);
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<ArraySimple.IPerson>>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ArraySimple.IPerson>",
            value: elem
        })) && $vo0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ArraySimple.IPerson>",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<Resolve<ArraySimple.IPerson>>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ArraySimple>;
}; const stringify = (input: ArraySimple): string => {
    const $string = (typia.createValidateStringify as any).string;
    const $io1 = (input: any) => "string" === typeof input.name && "string" === typeof input.body && "number" === typeof input.rank;
    const $so0 = (input: any) => `{"name":${$string(input.name)},"email":${$string(input.email)},"hobbies":${`[${input.hobbies.map((elem: any) => `{"name":${$string(elem.name)},"body":${$string(elem.body)},"rank":${elem.rank}}`).join(",")}]`}}`;
    return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; }, ArraySimple.SPOILERS);
