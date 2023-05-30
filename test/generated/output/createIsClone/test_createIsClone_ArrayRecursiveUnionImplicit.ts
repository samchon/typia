import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";
export const test_createIsClone_ArrayRecursiveUnionImplicit = _test_isClone("ArrayRecursiveUnionImplicit", ArrayRecursiveUnionImplicit.generate, (input: any): typia.Primitive<ArrayRecursiveUnionImplicit> | null => { const is = (input: any): input is ArrayRecursiveUnionImplicit => {
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
}; const clone = (input: ArrayRecursiveUnionImplicit): typia.Primitive<ArrayRecursiveUnionImplicit> => {
    const $io0 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && (Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem)));
    const $io1 = (input: any): boolean => ("read" === input.access || "write" === input.access) && "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && (Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem)));
    const $io2 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && "number" === typeof input.width && "number" === typeof input.height && "string" === typeof input.url && "number" === typeof input.size;
    const $io3 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && "number" === typeof input.size && "string" === typeof input.content;
    const $io4 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && "number" === typeof input.size && "number" === typeof input.count;
    const $io5 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && ("object" === typeof input.target && null !== input.target && $iu0(input.target));
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
    const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        path: input.path as any,
        children: Array.isArray(input.children) ? input.children.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem as any) : input.children as any
    });
    const $co1 = (input: any): any => ({
        access: input.access as any,
        id: input.id as any,
        name: input.name as any,
        path: input.path as any,
        children: Array.isArray(input.children) ? input.children.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem as any) : input.children as any
    });
    const $co2 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        path: input.path as any,
        width: input.width as any,
        height: input.height as any,
        url: input.url as any,
        size: input.size as any
    });
    const $co3 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        path: input.path as any,
        size: input.size as any,
        content: input.content as any
    });
    const $co4 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        path: input.path as any,
        size: input.size as any,
        count: input.count as any
    });
    const $co5 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        path: input.path as any,
        target: "object" === typeof input.target && null !== input.target ? $cu0(input.target) : input.target as any
    });
    const $cu0 = (input: any): any => (() => {
        if (undefined !== input.access)
            return $co1(input);
        if (undefined !== input.width)
            return $co2(input);
        if (undefined !== input.content)
            return $co3(input);
        if (undefined !== input.count)
            return $co4(input);
        if (undefined !== input.target)
            return $co5(input);
        return $co0(input);
    })();
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem as any) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ArrayRecursiveUnionImplicit.SPOILERS);
