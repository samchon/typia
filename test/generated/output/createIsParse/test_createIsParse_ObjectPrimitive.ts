import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
export const test_createIsParse_ObjectPrimitive = _test_isParse("ObjectPrimitive", ObjectPrimitive.generate, (input: any): typia.Primitive<ObjectPrimitive> => { const is = (input: any): input is ObjectPrimitive => {
    const $io0 = (input: any): boolean => "string" === typeof input.id && ("md" === input.extension || "html" === input.extension || "txt" === input.extension) && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem))) && "boolean" === typeof input.secret && "string" === typeof input.created_at;
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && "string" === typeof input.extension && "string" === typeof input.url && "string" === typeof input.created_at;
    return "object" === typeof input && null !== input && $io0(input);
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ObjectPrimitive.SPOILERS);
