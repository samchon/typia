import typia from "../../../../src";
import { _test_is } from "../../../internal/_test_is";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";
export const test_createIs_ArrayRecursiveUnionExplicit = _test_is("ArrayRecursiveUnionExplicit", ArrayRecursiveUnionExplicit.generate, (input: any): input is ArrayRecursiveUnionExplicit => {
    const $io0 = (input: any): boolean => "number" === typeof input.id && Number.isFinite(input.id) && "string" === typeof input.name && "string" === typeof input.path && (Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem))) && "directory" === input.type;
    const $io1 = (input: any): boolean => "number" === typeof input.id && Number.isFinite(input.id) && "string" === typeof input.name && "string" === typeof input.path && ("number" === typeof input.width && Number.isFinite(input.width)) && ("number" === typeof input.height && Number.isFinite(input.height)) && "string" === typeof input.url && ("number" === typeof input.size && Number.isFinite(input.size)) && "file" === input.type && "jpg" === input.extension;
    const $io2 = (input: any): boolean => "number" === typeof input.id && Number.isFinite(input.id) && "string" === typeof input.name && "string" === typeof input.path && ("number" === typeof input.size && Number.isFinite(input.size)) && "string" === typeof input.content && "file" === input.type && "txt" === input.extension;
    const $io3 = (input: any): boolean => "number" === typeof input.id && Number.isFinite(input.id) && "string" === typeof input.name && "string" === typeof input.path && ("number" === typeof input.size && Number.isFinite(input.size)) && ("number" === typeof input.count && Number.isFinite(input.count)) && "file" === input.type && "zip" === input.extension;
    const $io4 = (input: any): boolean => "number" === typeof input.id && Number.isFinite(input.id) && "string" === typeof input.name && "string" === typeof input.path && ("object" === typeof input.target && null !== input.target && $iu0(input.target)) && "file" === input.type && "lnk" === input.extension;
    const $iu0 = (input: any): any => (() => {
        if ("directory" === input.type)
            return $io0(input);
        if ("jpg" === input.extension)
            return $io1(input);
        if ("txt" === input.extension)
            return $io2(input);
        if ("zip" === input.extension)
            return $io3(input);
        if ("lnk" === input.extension)
            return $io4(input);
        return false;
    })();
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem));
}, ArrayRecursiveUnionExplicit.SPOILERS);
