import typia from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_is } from "../internal/_test_is";
export const test_createIs_ArrayRecursiveUnionImplicit = _test_is("ArrayRecursiveUnionImplicit", ArrayRecursiveUnionImplicit.generate, (input: any): input is ArrayRecursiveUnionImplicit => {
    const $io0 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && (Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem)));
    const $io1 = (input: any) => ("read" === input.access || "write" === input.access) && "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && (Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem)));
    const $io2 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && "number" === typeof input.width && "number" === typeof input.height && "string" === typeof input.url && "number" === typeof input.size;
    const $io3 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && "number" === typeof input.size && "string" === typeof input.content;
    const $io4 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && "number" === typeof input.size && "number" === typeof input.count;
    const $io5 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && ("object" === typeof input.target && null !== input.target && $iu0(input.target));
    const $iu0 = (input: any) => (() => {
        if (undefined !== input.access)
            return $io1(input);
        if (undefined !== input.width)
            return $io2(input);
        if (undefined !== input.content)
            return $io3(input);
        if (undefined !== input.count)
            return $io4(input);
        if (undefined !== input.target)
            return $io5(input);
        return $io0(input);
    })();
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem));
}, ArrayRecursiveUnionImplicit.SPOILERS);
