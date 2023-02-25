import typia from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ArrayRecursiveUnionExplicit = _test_clone("ArrayRecursiveUnionExplicit", ArrayRecursiveUnionExplicit.generate, (input) => ((input: ArrayRecursiveUnionExplicit): typia.Primitive<ArrayRecursiveUnionExplicit> => {
    const $throws = (typia.clone as any).throws;
    const $io0 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && (Array.isArray(input.children) && input.children.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem))) && "directory" === input.type;
    const $io1 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && "number" === typeof input.width && "number" === typeof input.height && "string" === typeof input.url && "number" === typeof input.size && "file" === input.type && "jpg" === input.extension;
    const $io2 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && "number" === typeof input.size && "string" === typeof input.content && "file" === input.type && "txt" === input.extension;
    const $io3 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && "number" === typeof input.size && "number" === typeof input.count && "file" === input.type && "zip" === input.extension;
    const $io4 = (input: any) => "number" === typeof input.id && "string" === typeof input.name && "string" === typeof input.path && ("object" === typeof input.target && null !== input.target && $iu0(input.target)) && "file" === input.type && "lnk" === input.extension;
    const $iu0 = (input: any) => (() => {
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
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        path: input.path,
        children: Array.isArray(input.children) ? input.children.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem) : input.children,
        type: input.type
    });
    const $co1 = (input: any) => ({
        id: input.id,
        name: input.name,
        path: input.path,
        width: input.width,
        height: input.height,
        url: input.url,
        size: input.size,
        type: input.type,
        extension: input.extension
    });
    const $co2 = (input: any) => ({
        id: input.id,
        name: input.name,
        path: input.path,
        size: input.size,
        content: input.content,
        type: input.type,
        extension: input.extension
    });
    const $co3 = (input: any) => ({
        id: input.id,
        name: input.name,
        path: input.path,
        size: input.size,
        count: input.count,
        type: input.type,
        extension: input.extension
    });
    const $co4 = (input: any) => ({
        id: input.id,
        name: input.name,
        path: input.path,
        target: "object" === typeof input.target && null !== input.target ? $cu0(input.target) : input.target,
        type: input.type,
        extension: input.extension
    });
    const $cu0 = (input: any) => (() => {
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
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem) : input;
})(input));
