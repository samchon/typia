import typia from "../../../src";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";
import { _test_assertClone } from "../internal/_test_assertClone";
export const test_assertClone_ArrayRecursiveUnionExplicit = _test_assertClone("ArrayRecursiveUnionExplicit", ArrayRecursiveUnionExplicit.generate, (input) => ((input: any): typia.Primitive<ArrayRecursiveUnionExplicit> => { const assert = (input: any) => {
    const $guard = (typia.assertClone as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ArrayRecursiveUnionExplicit => {
        const $ao0 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("string" === typeof input.path || $guard(_exceptionable, {
            path: _path + ".path",
            expected: "string",
            value: input.path
        })) && ((Array.isArray(input.children) || $guard(_exceptionable, {
            path: _path + ".children",
            expected: "Array<(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)>",
            value: input.children
        })) && input.children.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".children[" + _index2 + "]",
            expected: "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
            value: elem
        })) && $au0(elem, _path + ".children[" + _index2 + "]", true && _exceptionable))) && ("directory" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"directory\"",
            value: input.type
        }));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("string" === typeof input.path || $guard(_exceptionable, {
            path: _path + ".path",
            expected: "string",
            value: input.path
        })) && ("number" === typeof input.width || $guard(_exceptionable, {
            path: _path + ".width",
            expected: "number",
            value: input.width
        })) && ("number" === typeof input.height || $guard(_exceptionable, {
            path: _path + ".height",
            expected: "number",
            value: input.height
        })) && ("string" === typeof input.url || $guard(_exceptionable, {
            path: _path + ".url",
            expected: "string",
            value: input.url
        })) && ("number" === typeof input.size || $guard(_exceptionable, {
            path: _path + ".size",
            expected: "number",
            value: input.size
        })) && ("file" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"file\"",
            value: input.type
        })) && ("jpg" === input.extension || $guard(_exceptionable, {
            path: _path + ".extension",
            expected: "\"jpg\"",
            value: input.extension
        }));
        const $ao2 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("string" === typeof input.path || $guard(_exceptionable, {
            path: _path + ".path",
            expected: "string",
            value: input.path
        })) && ("number" === typeof input.size || $guard(_exceptionable, {
            path: _path + ".size",
            expected: "number",
            value: input.size
        })) && ("string" === typeof input.content || $guard(_exceptionable, {
            path: _path + ".content",
            expected: "string",
            value: input.content
        })) && ("file" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"file\"",
            value: input.type
        })) && ("txt" === input.extension || $guard(_exceptionable, {
            path: _path + ".extension",
            expected: "\"txt\"",
            value: input.extension
        }));
        const $ao3 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("string" === typeof input.path || $guard(_exceptionable, {
            path: _path + ".path",
            expected: "string",
            value: input.path
        })) && ("number" === typeof input.size || $guard(_exceptionable, {
            path: _path + ".size",
            expected: "number",
            value: input.size
        })) && ("number" === typeof input.count || $guard(_exceptionable, {
            path: _path + ".count",
            expected: "number",
            value: input.count
        })) && ("file" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"file\"",
            value: input.type
        })) && ("zip" === input.extension || $guard(_exceptionable, {
            path: _path + ".extension",
            expected: "\"zip\"",
            value: input.extension
        }));
        const $ao4 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.id || $guard(_exceptionable, {
            path: _path + ".id",
            expected: "number",
            value: input.id
        })) && ("string" === typeof input.name || $guard(_exceptionable, {
            path: _path + ".name",
            expected: "string",
            value: input.name
        })) && ("string" === typeof input.path || $guard(_exceptionable, {
            path: _path + ".path",
            expected: "string",
            value: input.path
        })) && (("object" === typeof input.target && null !== input.target || $guard(_exceptionable, {
            path: _path + ".target",
            expected: "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
            value: input.target
        })) && $au0(input.target, _path + ".target", true && _exceptionable)) && ("file" === input.type || $guard(_exceptionable, {
            path: _path + ".type",
            expected: "\"file\"",
            value: input.type
        })) && ("lnk" === input.extension || $guard(_exceptionable, {
            path: _path + ".extension",
            expected: "\"lnk\"",
            value: input.extension
        }));
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if ("directory" === input.type)
                return $ao0(input, _path, true && _exceptionable);
            if ("jpg" === input.extension)
                return $ao1(input, _path, true && _exceptionable);
            if ("txt" === input.extension)
                return $ao2(input, _path, true && _exceptionable);
            if ("zip" === input.extension)
                return $ao3(input, _path, true && _exceptionable);
            if ("lnk" === input.extension)
                return $ao4(input, _path, true && _exceptionable);
            return $guard(_exceptionable, {
                path: _path,
                expected: "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile | ArrayRecursiveUnionExplicit.IShortcut)",
                value: input
            });
        })();
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
            value: elem
        })) && $au0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as ArrayRecursiveUnionExplicit;
}; const clone = (input: ArrayRecursiveUnionExplicit): typia.Primitive<ArrayRecursiveUnionExplicit> => {
    const $throws = (typia.assertClone as any).throws;
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
}; assert(input); const output = clone(input); /* Array */; return output as ArrayRecursiveUnionExplicit; })(input), ArrayRecursiveUnionExplicit.SPOILERS);
