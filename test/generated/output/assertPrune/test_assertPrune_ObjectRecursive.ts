import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_assertPrune } from "../internal/_test_assertPrune";
export const test_assertPrune_ObjectRecursive = _test_assertPrune("ObjectRecursive", ObjectRecursive.generate, (input) => ((input: any): IDepartment => { const assert = (input: any) => {
    const $guard = (typia.assertPrune as any).guard;
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
}; const prune = (input: IDepartment): void => {
    const $io0 = (input: any) => "object" === typeof input.parent && null !== input.parent && $io0(input.parent) && "number" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && $io1(input.created_at));
    const $io1 = (input: any) => "number" === typeof input.time && "number" === typeof input.zone;
    const $po0 = (input: any) => {
        if ("object" === typeof input.parent && null !== input.parent)
            $po0(input.parent);
        if ("object" === typeof input.created_at && null !== input.created_at)
            $po1(input.created_at);
        for (const key of Object.keys(input)) {
            if ("parent" === key || "id" === key || "code" === key || "name" === key || "sequence" === key || "created_at" === key)
                continue;
            delete input[key];
        }
    };
    const $po1 = (input: any) => {
        for (const key of Object.keys(input)) {
            if ("time" === key || "zone" === key)
                continue;
            delete input[key];
        }
    };
    if ("object" === typeof input && null !== input)
        $po0(input);
}; assert(input); prune(input); return input; })(input), ObjectRecursive.SPOILERS);
