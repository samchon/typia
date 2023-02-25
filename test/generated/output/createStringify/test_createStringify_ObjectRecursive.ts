import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_stringify } from "../internal/_test_stringify";
export const test_createStringify_ObjectRecursive = _test_stringify("ObjectRecursive", ObjectRecursive.generate, (input: IDepartment): string => {
    const $string = (typia.createStringify as any).string;
    const $io0 = (input: any) => "object" === typeof input.parent && null !== input.parent && $io0(input.parent) && "number" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && $io1(input.created_at));
    const $io1 = (input: any) => "number" === typeof input.time && "number" === typeof input.zone;
    const $so0 = (input: any) => `{"parent":${$so0(input.parent)},"id":${input.id},"code":${$string(input.code)},"name":${$string(input.name)},"sequence":${input.sequence},"created_at":${`{"time":${input.created_at.time},"zone":${input.created_at.zone}}`}}`;
    return $so0(input);
});
