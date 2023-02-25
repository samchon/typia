import typia from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_validate } from "../internal/_test_validate";
export const test_createValidate_SetSimple = _test_validate("SetSimple", SetSimple.generate, (input: any): typia.IValidation<SetSimple> => {
    const errors = [] as any[];
    const $report = (typia.createValidate as any).report(errors);
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
            })) && [...input.numbers].map((elem: any, _index2: number) => "number" === typeof elem || $report(_exceptionable, {
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
            })) && elem.map((elem: any, _index5: number) => "number" === typeof elem || $report(_exceptionable, {
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
            }), "number" === typeof input.age || $report(_exceptionable, {
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
}, SetSimple.SPOILERS);
