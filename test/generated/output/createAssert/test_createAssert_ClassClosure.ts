import typia from "../../../src";
import { ClassClosure } from "../../structures/ClassClosure";
import { _test_assert } from "../internal/_test_assert";
export const test_createAssert_ClassClosure = _test_assert("ClassClosure", ClassClosure.generate, (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is Something => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && ("something" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"something\"",
            value: input.type
        })) && (true || $guard(_exceptionable, {
            path: _path + ".closure",
            expected: "unknown",
            value: input.closure
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ClassClosure.Something>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as ClassClosure;
}, ClassClosure.SPOILERS);
