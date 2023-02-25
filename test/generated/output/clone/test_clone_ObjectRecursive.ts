import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ObjectRecursive = _test_clone("ObjectRecursive", ObjectRecursive.generate, (input) => ((input: IDepartment): typia.Primitive<IDepartment> => {
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
})(input));
