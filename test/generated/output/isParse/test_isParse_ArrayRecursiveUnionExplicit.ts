import typia from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_isParse } from "../internal/_test_isParse";
export const test_isParse_ArrayRecursiveUnionExplicit = _test_isParse("ArrayRecursiveUnionExplicit", ArrayRecursiveUnionExplicit.generate, (input) => ((input: any): typia.Primitive<ArrayRecursiveUnionExplicit> => { const is = (input: any): input is ArrayRecursiveUnionExplicit => {
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
    return Array.isArray(input) && input.every((elem: any) => "object" === typeof elem && null !== elem && $iu0(elem));
}; input = JSON.parse(input); return is(input) ? input as any : null; })(input), ArrayRecursiveUnionExplicit.SPOILERS);
