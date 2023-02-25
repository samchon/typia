import typia from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_ArrayRecursiveUnionImplicit = _test_clone("ArrayRecursiveUnionImplicit", ArrayRecursiveUnionImplicit.generate, (input: ArrayRecursiveUnionImplicit): typia.Primitive<ArrayRecursiveUnionImplicit> => {
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
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        path: input.path,
        children: Array.isArray(input.children) ? input.children.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem) : input.children
    });
    const $co1 = (input: any) => ({
        access: input.access,
        id: input.id,
        name: input.name,
        path: input.path,
        children: Array.isArray(input.children) ? input.children.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem) : input.children
    });
    const $co2 = (input: any) => ({
        id: input.id,
        name: input.name,
        path: input.path,
        width: input.width,
        height: input.height,
        url: input.url,
        size: input.size
    });
    const $co3 = (input: any) => ({
        id: input.id,
        name: input.name,
        path: input.path,
        size: input.size,
        content: input.content
    });
    const $co4 = (input: any) => ({
        id: input.id,
        name: input.name,
        path: input.path,
        size: input.size,
        count: input.count
    });
    const $co5 = (input: any) => ({
        id: input.id,
        name: input.name,
        path: input.path,
        target: "object" === typeof input.target && null !== input.target ? $cu0(input.target) : input.target
    });
    const $cu0 = (input: any) => (() => {
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
    return Array.isArray(input) ? input.map((elem: any) => "object" === typeof elem && null !== elem ? $cu0(elem) : elem) : input;
});
