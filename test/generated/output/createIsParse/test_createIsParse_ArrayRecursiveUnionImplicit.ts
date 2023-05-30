import typia from "../../../../src";
import { _test_isParse } from "../../../internal/_test_isParse";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
export const test_createIsParse_ArrayRecursiveUnionImplicit = _test_isParse("ArrayRecursiveUnionImplicit", ArrayRecursiveUnionImplicit.generate, (input: any): typia.Primitive<ArrayRecursiveUnionImplicit> => { const is = (input: any): input is ArrayRecursiveUnionImplicit => {
    const $io0 = (input: any): boolean => "number" === typeof input.id && Number.isFinite(input.id) && "string" === typeof input.name && "string" === typeof input.path && (Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem)));
    const $io1 = (input: any): boolean => ("read" === input.access || "write" === input.access) && ("number" === typeof input.id && Number.isFinite(input.id)) && "string" === typeof input.name && "string" === typeof input.path && (Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem)));
    const $io2 = (input: any): boolean => "number" === typeof input.id && Number.isFinite(input.id) && "string" === typeof input.name && "string" === typeof input.path && ("number" === typeof input.width && Number.isFinite(input.width)) && ("number" === typeof input.height && Number.isFinite(input.height)) && "string" === typeof input.url && ("number" === typeof input.size && Number.isFinite(input.size));
    const $io3 = (input: any): boolean => "number" === typeof input.id && Number.isFinite(input.id) && "string" === typeof input.name && "string" === typeof input.path && ("number" === typeof input.size && Number.isFinite(input.size)) && "string" === typeof input.content;
    const $io4 = (input: any): boolean => "number" === typeof input.id && Number.isFinite(input.id) && "string" === typeof input.name && "string" === typeof input.path && ("number" === typeof input.size && Number.isFinite(input.size)) && ("number" === typeof input.count && Number.isFinite(input.count));
    const $io5 = (input: any): boolean => "number" === typeof input.id && Number.isFinite(input.id) && "string" === typeof input.name && "string" === typeof input.path && ("object" === typeof input.target && null !== input.target && $iu0(input.target));
    const $iu0 = (input: any): any => (() => {
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
}; input = JSON.parse(input); return is(input) ? input as any : null; }, ArrayRecursiveUnionImplicit.SPOILERS);
