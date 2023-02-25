import typia from "../../../src";
import { ArraySimple } from "../../structures/ArraySimple";
import { _test_assert } from "../internal/_test_assert";
export const test_createAssert_ArraySimple = _test_assert("ArraySimple", ArraySimple.generate, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ArraySimple => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("string" === typeof input.email || $guard(_exceptionable, {
            path: _path + ".email",
            expected: "string",
            value: input.email
        })) && ((Array.isArray(input.hobbies) || $guard(_exceptionable, {
            path: _path + ".hobbies",
            expected: "Array<Resolve<ArraySimple.IHobby>>",
            value: input.hobbies
        })) && input.hobbies.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".hobbies[" + _index2 + "]",
            expected: "Resolve<ArraySimple.IHobby>",
            value: elem
        })) && $ao1(elem, _path + ".hobbies[" + _index2 + "]", true && _exceptionable)));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("string" === typeof input.body || $guard(_exceptionable, {
            path: _path + ".body",
            expected: "string",
            value: input.body
        })) && ("number" === typeof input.rank || $guard(_exceptionable, {
            path: _path + ".rank",
            expected: "number",
            value: input.rank
        }));
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<Resolve<ArraySimple.IPerson>>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "Resolve<ArraySimple.IPerson>",
            value: elem
        })) && $ao0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ArraySimple;
}, ArraySimple.SPOILERS);
