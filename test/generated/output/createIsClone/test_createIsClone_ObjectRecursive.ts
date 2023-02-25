import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_isClone } from "../internal/_test_isClone";
export const test_createIsClone_ObjectRecursive = _test_isClone("ObjectRecursive", ObjectRecursive.generate, (input: any): typia.Primitive<IDepartment> | null => { const is = (input: any): input is IDepartment => {
    const $io0 = (input: any) => "object" === typeof input.parent && null !== input.parent && $io0(input.parent) && "number" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && ("number" === typeof input.created_at.time && "number" === typeof input.created_at.zone));
    return "object" === typeof input && null !== input && $io0(input);
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
}; if (!is(input))
    return null; const output = clone(input); return output; }, ObjectRecursive.SPOILERS);
