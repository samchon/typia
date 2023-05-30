import typia from "../../../../src";
import { _test_isClone } from "../../../internal/_test_isClone";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";
export const test_createIsClone_ArrayRecursiveUnionExplicit = _test_isClone("ArrayRecursiveUnionExplicit", ArrayRecursiveUnionExplicit.generate, (input: any): typia.Primitive<ArrayRecursiveUnionExplicit> | null => { const is = (input: any): input is ArrayRecursiveUnionExplicit => {
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
}; const clone = (input: ArrayRecursiveUnionExplicit): typia.Primitive<ArrayRecursiveUnionExplicit> => {
    const $throws = (typia.createIsClone as any).throws;
    const $io0 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && (Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem))) && "directory" === input.type;
    const $io1 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && "number" === typeof input.width && "number" === typeof input.height && "string" === typeof input.url && "number" === typeof input.size && "file" === input.type && "jpg" === input.extension;
    const $io2 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && "number" === typeof input.size && "string" === typeof input.content && "file" === input.type && "txt" === input.extension;
    const $io3 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && "number" === typeof input.size && "number" === typeof input.count && "file" === input.type && "zip" === input.extension;
    const $io4 = (input: any): boolean => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && ("object" === typeof input.target && null !== input.target && $iu0(input.target)) && "file" === input.type && "lnk" === input.extension;
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
    const $co0 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        path: input.path as any,
        children: Array.isArray(input.children) ? input.children.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem as any) : input.children as any,
        type: input.type as any
    });
    const $co1 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        path: input.path as any,
        width: input.width as any,
        height: input.height as any,
        url: input.url as any,
        size: input.size as any,
        type: input.type as any,
        extension: input.extension as any
    });
    const $co2 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        path: input.path as any,
        size: input.size as any,
        content: input.content as any,
        type: input.type as any,
        extension: input.extension as any
    });
    const $co3 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        path: input.path as any,
        size: input.size as any,
        count: input.count as any,
        type: input.type as any,
        extension: input.extension as any
    });
    const $co4 = (input: any): any => ({
        id: input.id as any,
        name: input.name as any,
        path: input.path as any,
        target: "object" === typeof input.target && null !== input.target ? $cu0(input.target) : input.target as any,
        type: input.type as any,
        extension: input.extension as any
    });
    const $cu0 = (input: any): any => (() => {
        if ("directory" === input.type)
            return $co0(input);
        if ("jpg" === input.extension)
            return $co1(input);
        if ("txt" === input.extension)
            return $co2(input);
        if ("zip" === input.extension)
            return $co3(input);
        if ("lnk" === input.extension)
            return $co4(input);
        $throws({
            expected: "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile | ArrayRecursiveUnionExplicit.IShortcut)",
            value: input
        });
    })();
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem as any) : input as any;
}; if (!is(input))
    return null; const output = clone(input); return output; }, ArrayRecursiveUnionExplicit.SPOILERS);
