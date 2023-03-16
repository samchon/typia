import typia from "../../../src";
import { ObjectPrimitive } from "../../structures/ObjectPrimitive";
interface A {
    a: string;
}
interface B {
    b: string;
}
type Union = A | B;
export const checkUnion = (input: any): input is Union => {
    const $io0 = (input: any): boolean => "string" === typeof input.a;
    const $io1 = (input: any): boolean => "string" === typeof input.b;
    const $iu0 = (input: any): any => (() => {
        if (undefined !== input.a)
            return $io0(input);
        if (undefined !== input.b)
            return $io1(input);
        return false;
    })();
    return "object" === typeof input && null !== input && $iu0(input);
};
export const checkPrimitive = (input: any): input is ObjectPrimitive => {
    const $io0 = (input: any): boolean => "string" === typeof input.id && ("md" === input.extension || "html" === input.extension || "txt" === input.extension) && "string" === typeof input.title && "string" === typeof input.body && (Array.isArray(input.files) && input.files.every((elem: any) => "object" === typeof elem && null !== elem && $io1(elem))) && "boolean" === typeof input.secret && "string" === typeof input.created_at;
    const $io1 = (input: any): boolean => "string" === typeof input.id && "string" === typeof input.name && "string" === typeof input.extension && "string" === typeof input.url && "string" === typeof input.created_at;
    return "object" === typeof input && null !== input && $io0(input);
};
