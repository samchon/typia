import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assertStringify } from "../internal/_test_assertStringify";
export const test_assertStringify_ObjectRecursive = _test_assertStringify("ObjectRecursive", ObjectRecursive.generate, (input) => ((input: IDepartment): string => { const assert = (input: any) => {
    const $guard = (typia.assertStringify as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is IDepartment => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("object" === typeof input.parent && null !== input.parent || $guard(_exceptionable, {
            path: _path + ".parent",
            expected: "Resolve<ObjectRecursive.IDepartment>",
            value: input.parent
        })) && $ao0(input.parent, _path + ".parent", true && _exceptionable) && ("number" === typeof input.id && !Number.isNaN(input.id) || $guard(_exceptionable, {
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
        })) && ("number" === typeof input.sequence && !Number.isNaN(input.sequence) || $guard(_exceptionable, {
            path: _path + ".sequence",
            expected: "number",
            value: input.sequence
        })) && (("object" === typeof input.created_at && null !== input.created_at || $guard(_exceptionable, {
            path: _path + ".created_at",
            expected: "Resolve<ObjectRecursive.ITimestamp>",
            value: input.created_at
        })) && $ao1(input.created_at, _path + ".created_at", true && _exceptionable));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.time && !Number.isNaN(input.time) || $guard(_exceptionable, {
            path: _path + ".time",
            expected: "number",
            value: input.time
        })) && ("number" === typeof input.zone && !Number.isNaN(input.zone) || $guard(_exceptionable, {
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
}; const stringify = (input: IDepartment): string => {
    const $string = (typia.assertStringify as any).string;
    const $io0 = (input: any) => "object" === typeof input.parent && null !== input.parent && $io0(input.parent) && "number" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && $io1(input.created_at));
    const $io1 = (input: any) => "number" === typeof input.time && "number" === typeof input.zone;
    const $so0 = (input: any) => `{"parent":${$so0(input.parent)},"id":${input.id},"code":${$string(input.code)},"name":${$string(input.name)},"sequence":${input.sequence},"created_at":${`{"time":${input.created_at.time},"zone":${input.created_at.zone}}`}}`;
    return $so0(input);
}; return stringify(assert(input)); })(input), ObjectRecursive.SPOILERS);
