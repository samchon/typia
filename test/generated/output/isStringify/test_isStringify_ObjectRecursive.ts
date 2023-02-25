import typia from "../../../src";
import { ObjectRecursive } from "../../structures/ObjectRecursive";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_isStringify_ObjectRecursive = _test_isStringify("ObjectRecursive", ObjectRecursive.generate, (input) => ((input: IDepartment): string | null => { const is = (input: any): input is IDepartment => {
    const $io0 = (input: any) => "object" === typeof input.parent && null !== input.parent && $io0(input.parent) && ("number" === typeof input.id && !Number.isNaN(input.id)) && "string" === typeof input.code && "string" === typeof input.name && ("number" === typeof input.sequence && !Number.isNaN(input.sequence)) && ("object" === typeof input.created_at && null !== input.created_at && ("number" === typeof input.created_at.time && !Number.isNaN(input.created_at.time) && ("number" === typeof input.created_at.zone && !Number.isNaN(input.created_at.zone))));
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: IDepartment): string => {
    const $string = (typia.isStringify as any).string;
    const $io0 = (input: any) => "object" === typeof input.parent && null !== input.parent && $io0(input.parent) && "number" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && $io1(input.created_at));
    const $io1 = (input: any) => "number" === typeof input.time && "number" === typeof input.zone;
    const $so0 = (input: any) => `{"parent":${$so0(input.parent)},"id":${input.id},"code":${$string(input.code)},"name":${$string(input.name)},"sequence":${input.sequence},"created_at":${`{"time":${input.created_at.time},"zone":${input.created_at.zone}}`}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; })(input), ObjectRecursive.SPOILERS);
