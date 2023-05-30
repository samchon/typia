import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";
export const test_createIsStringify_ObjectRecursive = _test_isStringify("ObjectRecursive", ObjectRecursive.generate, (input: ObjectRecursive): string | null => { const is = (input: any): input is ObjectRecursive => {
    const $io0 = (input: any): boolean => (null === input.parent || "object" === typeof input.parent && null !== input.parent && $io0(input.parent)) && ("number" === typeof input.id && Number.isFinite(input.id)) && "string" === typeof input.code && "string" === typeof input.name && ("number" === typeof input.sequence && Number.isFinite(input.sequence)) && ("object" === typeof input.created_at && null !== input.created_at && ("number" === typeof input.created_at.time && Number.isFinite(input.created_at.time) && ("number" === typeof input.created_at.zone && Number.isFinite(input.created_at.zone))));
    return "object" === typeof input && null !== input && $io0(input);
}; const stringify = (input: ObjectRecursive): string => {
    const $number = (typia.createIsStringify as any).number;
    const $string = (typia.createIsStringify as any).string;
    const $io0 = (input: any): boolean => (null === input.parent || "object" === typeof input.parent && null !== input.parent && $io0(input.parent)) && "number" === typeof input.id && "string" === typeof input.code && "string" === typeof input.name && "number" === typeof input.sequence && ("object" === typeof input.created_at && null !== input.created_at && $io1(input.created_at));
    const $io1 = (input: any): boolean => "number" === typeof input.time && "number" === typeof input.zone;
    const $so0 = (input: any): any => `{"parent":${null !== input.parent ? $so0(input.parent) : "null"},"id":${$number(input.id)},"code":${$string(input.code)},"name":${$string(input.name)},"sequence":${$number(input.sequence)},"created_at":${`{"time":${$number(input.created_at.time)},"zone":${$number(input.created_at.zone)}}`}}`;
    return $so0(input);
}; return is(input) ? stringify(input) : null; }, ObjectRecursive.SPOILERS);
