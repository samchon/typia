import typia from "../../../src";
import { ObjectClosure } from "../../structures/ObjectClosure";
import { _test_assert } from "../internal/_test_assert";
export const test_assert_ObjectClosure = _test_assert("ObjectClosure", ObjectClosure.generate, (input) => ((input: any) => {
    const $guard = (typia.assert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is IRecord => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("string" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "string",
            value: input.id
        })) && (true || $guard(_exceptionable, {
            path: _path + ".open",
            expected: "unknown",
            value: input.open
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ObjectClosure.IRecord>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as IRecord;
})(input), ObjectClosure.SPOILERS);
