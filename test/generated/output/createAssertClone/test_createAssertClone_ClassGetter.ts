import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_createAssertClone_ClassGetter = _test_assertClone("ClassGetter", ClassGetter.generate, (input: any): typia.Primitive<Person> => { const assert = (input: any) => {
    const $guard = (typia.createAssertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is Person => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("boolean" === typeof input.dead || $guard(_exceptionable, {
            path: _path + ".dead",
            expected: "boolean",
            value: input.dead
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ClassGetter.Person>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as Person;
}; const clone = (input: Person): typia.Primitive<Person> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        dead: input.dead
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* ClassGetter.Person */; return output as Person; }, ClassGetter.SPOILERS);
