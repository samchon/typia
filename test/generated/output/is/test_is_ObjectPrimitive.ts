import typia from "../../../../src";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
import { _test_is } from "../../../internal/_test_is";
export const test_is_ObjectPrimitive = _test_is("ObjectPrimitive", ObjectPrimitive.generate, (input) => ((input: any): input is ObjectPrimitive.IArticle => {
    const $io0 = (input: any): boolean => "string" === typeof input.id && ("md" === input.extension || "html" === input.extension || "txt" === input.extension) && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem))) && "boolean" === typeof input.secret && "string" === typeof input.created_at;
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && "string" === typeof input.extension && "string" === typeof input.url && "string" === typeof input.created_at;
    return "object" === typeof input && null !== input && $io0(input);
})(input), ObjectPrimitive.SPOILERS);
