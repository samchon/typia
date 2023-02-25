import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_ObjectRecursive = _test_assertClone("ObjectRecursive", ObjectRecursive.generate, (input) => ((input: any): typia.Primitive<IDepartment> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is IDepartment => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.parent && null !== input.parent || $guard(_exceptionable, {
            path: _path + ".parent",
            expected: "Resolve<ObjectRecursive.IDepartment>",
            value: input.parent
        })) && $ao0(input.parent, _path + ".parent", true && _exceptionable) && ("number" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id
        })) && ("string" === typeof input.code || $guard(_exceptionable, {
            path: _path + ".code",
            expected: "string",
            value: input.code
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("number" === typeof input.sequence || $guard(_exceptionable, {
            path: _path + ".sequence",
            expected: "number",
            value: input.sequence
        })) && (("object" === typeof input.created_at && null !== input.created_at || $guard(_exceptionable, {
            path: _path + ".created_at",
            expected: "Resolve<ObjectRecursive.ITimestamp>",
            value: input.created_at
        })) && $ao1(input.created_at, _path + ".created_at", true && _exceptionable));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.time || $guard(_exceptionable, {
            path: _path + ".time",
            expected: "number",
            value: input.time
        })) && ("number" === typeof input.zone || $guard(_exceptionable, {
            path: _path + ".zone",
            expected: "number",
            value: input.zone
        }));
        return ("object" === typeof input && null !== input || $guard(true, {
            path: _path + "",
            expected: "Resolve<ObjectRecursive.IDepartment>",
            value: input
        })) && $ao0(input, _path + "", true);
    })(input, "$input", true);
    return input as IDepartment;
}; const clone = (input: IDepartment): typia.Primitive<IDepartment> => {
    const $io0 = (input: any) => "object" === typeof input.parent && null !== input.parent && $io0(input.parent) && "number" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && $io1(input.created_at));
    const $io1 = (input: any) => "number" === typeof input.time && "number" === typeof input.zone;
    const $co0 = (input: any) => ({
        parent: "object" === typeof input.parent && null !== input.parent ? $co0(input.parent) : input.parent,
        id: input.id,
        code: input.code,
        name: input.name,
        sequence: input.sequence,
        created_at: "object" === typeof input.created_at && null !== input.created_at ? $co1(input.created_at) : input.created_at
    });
    const $co1 = (input: any) => ({
        time: input.time,
        zone: input.zone
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
}; assert(input); const output = clone(input); /* ObjectRecursive.IDepartment */; return output as IDepartment; })(input), ObjectRecursive.SPOILERS);
