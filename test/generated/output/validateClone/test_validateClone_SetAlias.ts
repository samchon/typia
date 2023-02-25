import typia from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_validateClone } from "../internal/_test_validateClone";
export const test_validateClone_SetAlias = _test_validateClone("SetAlias", SetAlias.generate, (input) => ((input: any): typia.IValidation<typia.Primitive<SetSimple>> => { const validate = (input: any): typia.IValidation<SetSimple> => {
    const errors = [] as any[];
    const $report = (typia.validateClone as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is SetSimple => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => [(input.booleans instanceof Set || $report(_exceptionable, {
                path: _path + ".booleans",
                expected: "Set<boolean>",
                value: input.booleans
            })) && [...input.booleans].map((elem: any, _index1: number) => "boolean" === typeof elem || $report(_exceptionable, {
                path: _path + ".booleans[" + _index1 + "]",
                expected: "boolean",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".booleans",
                expected: "Set<boolean>",
                value: input.booleans
            }), (input.numbers instanceof Set || $report(_exceptionable, {
                path: _path + ".numbers",
                expected: "Set<number>",
                value: input.numbers
            })) && [...input.numbers].map((elem: any, _index2: number) => "number" === typeof elem && !Number.isNaN(elem) || $report(_exceptionable, {
                path: _path + ".numbers[" + _index2 + "]",
                expected: "number",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".numbers",
                expected: "Set<number>",
                value: input.numbers
            }), (input.strings instanceof Set || $report(_exceptionable, {
                path: _path + ".strings",
                expected: "Set<string>",
                value: input.strings
            })) && [...input.strings].map((elem: any, _index3: number) => "string" === typeof elem || $report(_exceptionable, {
                path: _path + ".strings[" + _index3 + "]",
                expected: "string",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".strings",
                expected: "Set<string>",
                value: input.strings
            }), (input.arrays instanceof Set || $report(_exceptionable, {
                path: _path + ".arrays",
                expected: "Set<Array<number>>",
                value: input.arrays
            })) && [...input.arrays].map((elem: any, _index4: number) => (Array.isArray(elem) || $report(_exceptionable, {
                path: _path + ".arrays[" + _index4 + "]",
                expected: "Array<number>",
                value: elem
            })) && elem.map((elem: any, _index5: number) => "number" === typeof elem && !Number.isNaN(elem) || $report(_exceptionable, {
                path: _path + ".arrays[" + _index4 + "][" + _index5 + "]",
                expected: "number",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".arrays[" + _index4 + "]",
                expected: "Array<number>",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".arrays",
                expected: "Set<Array<number>>",
                value: input.arrays
            }), (input.objects instanceof Set || $report(_exceptionable, {
                path: _path + ".objects",
                expected: "Set<Resolve<SetSimple.Person>>",
                value: input.objects
            })) && [...input.objects].map((elem: any, _index6: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                path: _path + ".objects[" + _index6 + "]",
                expected: "Resolve<SetSimple.Person>",
                value: elem
            })) && $vo1(elem, _path + ".objects[" + _index6 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".objects[" + _index6 + "]",
                expected: "Resolve<SetSimple.Person>",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".objects",
                expected: "Set<Resolve<SetSimple.Person>>",
                value: input.objects
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "number" === typeof input.age && !Number.isNaN(input.age) || $report(_exceptionable, {
                path: _path + ".age",
                expected: "number",
                value: input.age
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<SetSimple>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<SetSimple>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<SetSimple>;
}; const clone = (input: SetSimple): typia.Primitive<SetSimple> => {
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $co0 = (input: any) => ({
        booleans: input.booleans instanceof Set ? {} : input.booleans,
        numbers: input.numbers instanceof Set ? {} : input.numbers,
        strings: input.strings instanceof Set ? {} : input.strings,
        arrays: input.arrays instanceof Set ? {} : input.arrays,
        objects: input.objects instanceof Set ? {} : input.objects
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; const output = validate(input) as any; if (output.success)
    output.data = clone(input); return output; })(input), SetAlias.SPOILERS);
