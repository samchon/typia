import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_validate } from "../internal/_test_validate";
export const test_createValidate_ClassGetter = _test_validate("ClassGetter", ClassGetter.generate, (input: any): typia.IValidation<Person> => {
    const errors = [] as any[];
    const $report = (typia.createValidate as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is Person => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["string" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "string",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "boolean" === typeof input.dead || $report(_exceptionable, {
                path: _path + ".dead",
                expected: "boolean",
                value: input.dead
            })].every((flag: boolean) => flag);
        return ("object" === typeof input && null !== input || $report(true, {
            path: _path + "",
            expected: "Resolve<ClassGetter.Person>",
            value: input
        })) && $vo0(input, _path + "", true) || $report(true, {
            path: _path + "",
            expected: "Resolve<ClassGetter.Person>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<Person>;
}, ClassGetter.SPOILERS);
