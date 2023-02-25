import typia from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_validateStringify } from "../internal/_test_validateStringify";
export const test_validateStringify_ArrayRecursiveUnionImplicit = _test_validateStringify("ArrayRecursiveUnionImplicit", ArrayRecursiveUnionImplicit.generate, (input) => ((input: ArrayRecursiveUnionImplicit): typia.IValidation<string> => { const validate = (input: any): typia.IValidation<ArrayRecursiveUnionImplicit> => {
    const errors = [] as any[];
    const $report = (typia.validateStringify as any).report(errors);
    ((input: any, _path: string, _exceptionable: boolean): input is ArrayRecursiveUnionImplicit => {
        const $vo0 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id && !Number.isNaN(input.id) || $report(_exceptionable, {
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
            }), "number" === typeof input.id && !Number.isNaN(input.id) || $report(_exceptionable, {
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
        const $vo2 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id && !Number.isNaN(input.id) || $report(_exceptionable, {
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
            }), "number" === typeof input.width && !Number.isNaN(input.width) || $report(_exceptionable, {
                path: _path + ".width",
                expected: "number",
                value: input.width
            }), "number" === typeof input.height && !Number.isNaN(input.height) || $report(_exceptionable, {
                path: _path + ".height",
                expected: "number",
                value: input.height
            }), "string" === typeof input.url || $report(_exceptionable, {
                path: _path + ".url",
                expected: "string",
                value: input.url
            }), "number" === typeof input.size && !Number.isNaN(input.size) || $report(_exceptionable, {
                path: _path + ".size",
                expected: "number",
                value: input.size
            })].every((flag: boolean) => flag);
        const $vo3 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id && !Number.isNaN(input.id) || $report(_exceptionable, {
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
            }), "number" === typeof input.size && !Number.isNaN(input.size) || $report(_exceptionable, {
                path: _path + ".size",
                expected: "number",
                value: input.size
            }), "string" === typeof input.content || $report(_exceptionable, {
                path: _path + ".content",
                expected: "string",
                value: input.content
            })].every((flag: boolean) => flag);
        const $vo4 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id && !Number.isNaN(input.id) || $report(_exceptionable, {
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
            }), "number" === typeof input.size && !Number.isNaN(input.size) || $report(_exceptionable, {
                path: _path + ".size",
                expected: "number",
                value: input.size
            }), "number" === typeof input.count && !Number.isNaN(input.count) || $report(_exceptionable, {
                path: _path + ".count",
                expected: "number",
                value: input.count
            })].every((flag: boolean) => flag);
        const $vo5 = (input: any, _path: string, _exceptionable: boolean) => ["number" === typeof input.id && !Number.isNaN(input.id) || $report(_exceptionable, {
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
}; const stringify = (input: ArrayRecursiveUnionImplicit): string => {
    const $string = (typia.validateStringify as any).string;
    const $throws = (typia.validateStringify as any).throws;
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
    const $so0 = (input: any) => `{"id":${input.id},"name":${$string(input.name)},"path":${$string(input.path)},"children":${`[${input.children.map((elem: any) => $su0(elem)).join(",")}]`}}`;
    const $so1 = (input: any) => `{"access":${(() => {
        if ("string" === typeof input.access)
            return $string(input.access);
        if ("string" === typeof input.access)
            return "\"" + input.access + "\"";
        $throws({
            expected: "(\"read\" | \"write\")",
            value: input.access
        });
    })()},"id":${input.id},"name":${$string(input.name)},"path":${$string(input.path)},"children":${`[${input.children.map((elem: any) => $su0(elem)).join(",")}]`}}`;
    const $so2 = (input: any) => `{"id":${input.id},"name":${$string(input.name)},"path":${$string(input.path)},"width":${input.width},"height":${input.height},"url":${$string(input.url)},"size":${input.size}}`;
    const $so3 = (input: any) => `{"id":${input.id},"name":${$string(input.name)},"path":${$string(input.path)},"size":${input.size},"content":${$string(input.content)}}`;
    const $so4 = (input: any) => `{"id":${input.id},"name":${$string(input.name)},"path":${$string(input.path)},"size":${input.size},"count":${input.count}}`;
    const $so5 = (input: any) => `{"id":${input.id},"name":${$string(input.name)},"path":${$string(input.path)},"target":${$su0(input.target)}}`;
    const $su0 = (input: any) => (() => {
        if (undefined !== input.access)
            return $so1(input);
        if (undefined !== input.width)
            return $so2(input);
        if (undefined !== input.content)
            return $so3(input);
        if (undefined !== input.count)
            return $so4(input);
        if (undefined !== input.target)
            return $so5(input);
        return $so0(input);
    })();
    return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
}; const output = validate(input) as any; if (output.success)
    output.data = stringify(input); return output; })(input), ArrayRecursiveUnionImplicit.SPOILERS);
