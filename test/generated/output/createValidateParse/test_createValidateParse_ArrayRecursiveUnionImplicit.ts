import typia from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_validateParse } from "../internal/_test_validateParse";
export const test_createValidateParse_ArrayRecursiveUnionImplicit = _test_validateParse("ArrayRecursiveUnionImplicit", ArrayRecursiveUnionImplicit.generate, (input: string): typia.IValidation<typia.Primitive<ArrayRecursiveUnionImplicit>> => { const validate = (input: any): typia.IValidation<ArrayRecursiveUnionImplicit> => {
    const errors = [] as any[];
    const $report = (typia.createValidateParse as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ArrayRecursiveUnionImplicit => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "string" === typeof input.path || $report(_exceptionable, {
                path: _path + ".path",
                expected: "string",
                value: input.path
            }), (Array.isArray(input.children) || $report(_exceptionable, {
                path: _path + ".children",
                expected: "Array<(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)>",
                value: input.children
            })) && input.children.map((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                path: _path + ".children[" + _index2 + "]",
                expected: "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
                value: elem
            })) && $vu0(elem, _path + ".children[" + _index2 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".children[" + _index2 + "]",
                expected: "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".children",
                expected: "Array<(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)>",
                value: input.children
            })].every((flag: boolean) => flag);
        const $vo1 = (input: any, _path: string, _exceptionable: boolean) => ["read" === input.access || "write" === input.access || $report(_exceptionable, {
                path: _path + ".access",
                expected: "(\"read\" | \"write\")",
                value: input.access
            }), "number" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "string" === typeof input.path || $report(_exceptionable, {
                path: _path + ".path",
                expected: "string",
                value: input.path
            }), (Array.isArray(input.children) || $report(_exceptionable, {
                path: _path + ".children",
                expected: "Array<(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)>",
                value: input.children
            })) && input.children.map((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $report(_exceptionable, {
                path: _path + ".children[" + _index3 + "]",
                expected: "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
                value: elem
            })) && $vu0(elem, _path + ".children[" + _index3 + "]", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".children[" + _index3 + "]",
                expected: "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
                value: elem
            })).every((flag: boolean) => flag) || $report(_exceptionable, {
                path: _path + ".children",
                expected: "Array<(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)>",
                value: input.children
            })].every((flag: boolean) => flag);
        const $vo2 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "string" === typeof input.path || $report(_exceptionable, {
                path: _path + ".path",
                expected: "string",
                value: input.path
            }), "number" === typeof input.width || $report(_exceptionable, {
                path: _path + ".width",
                expected: "number",
                value: input.width
            }), "number" === typeof input.height || $report(_exceptionable, {
                path: _path + ".height",
                expected: "number",
                value: input.height
            }), "string" === typeof input.url || $report(_exceptionable, {
                path: _path + ".url",
                expected: "string",
                value: input.url
            }), "number" === typeof input.size || $report(_exceptionable, {
                path: _path + ".size",
                expected: "number",
                value: input.size
            })].every((flag: boolean) => flag);
        const $vo3 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "string" === typeof input.path || $report(_exceptionable, {
                path: _path + ".path",
                expected: "string",
                value: input.path
            }), "number" === typeof input.size || $report(_exceptionable, {
                path: _path + ".size",
                expected: "number",
                value: input.size
            }), "string" === typeof input.content || $report(_exceptionable, {
                path: _path + ".content",
                expected: "string",
                value: input.content
            })].every((flag: boolean) => flag);
        const $vo4 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "string" === typeof input.path || $report(_exceptionable, {
                path: _path + ".path",
                expected: "string",
                value: input.path
            }), "number" === typeof input.size || $report(_exceptionable, {
                path: _path + ".size",
                expected: "number",
                value: input.size
            }), "number" === typeof input.count || $report(_exceptionable, {
                path: _path + ".count",
                expected: "number",
                value: input.count
            })].every((flag: boolean) => flag);
        const $vo5 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id || $report(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id
            }), "string" === typeof input.name || $report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name
            }), "string" === typeof input.path || $report(_exceptionable, {
                path: _path + ".path",
                expected: "string",
                value: input.path
            }), ("object" === typeof input.target && null !== input.target || $report(_exceptionable, {
                path: _path + ".target",
                expected: "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
                value: input.target
            })) && $vu0(input.target, _path + ".target", true && _exceptionable) || $report(_exceptionable, {
                path: _path + ".target",
                expected: "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
                value: input.target
            })].every((flag: boolean) => flag);
        const $vu0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if (undefined !== input.access)
                return $vo1(input, _path, true && _exceptionable);
            if (undefined !== input.width)
                return $vo2(input, _path, true && _exceptionable);
            if (undefined !== input.content)
                return $vo3(input, _path, true && _exceptionable);
            if (undefined !== input.count)
                return $vo4(input, _path, true && _exceptionable);
            if (undefined !== input.target)
                return $vo5(input, _path, true && _exceptionable);
            return $vo0(input, _path, true && _exceptionable);
        })();
        return (Array.isArray(input) || $report(true, {
            path: _path + "",
            expected: "Array<(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)>",
            value: input
        })) && input.map((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
            value: elem
        })) && $vu0(elem, _path + "[" + _index1 + "]", true) || $report(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
            value: elem
        })).every((flag: boolean) => flag) || $report(true, {
            path: _path + "",
            expected: "Array<(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)>",
            value: input
        });
    })(input, "$input", true);
    const success = 0 === errors.length;
    return {
        success,
        errors,
        data: success ? input : undefined
    } as typia.IValidation<ArrayRecursiveUnionImplicit>;
}; input = JSON.parse(input); const output = validate(input); return output; }, ArrayRecursiveUnionImplicit.SPOILERS);
