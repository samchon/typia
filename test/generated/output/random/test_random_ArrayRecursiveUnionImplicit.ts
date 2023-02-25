import typia from "../../../src";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";
import { _test_random } from "../internal/_test_random";
export const test_random_ArrayRecursiveUnionImplicit = _test_random("ArrayRecursiveUnionImplicit", () => ((generator: typia.IRandomGenerator = (typia.random as any).generator) => {
    const $generator = (typia.random as any).generator;
    const $pick = (typia.random as any).pick;
    const $ro0 = (recursive = true, depth = 0) => ({
        id: (generator.number ?? $generator.number)(0, 100),
        name: (generator.string ?? $generator.string)(),
        path: (generator.string ?? $generator.string)(),
        children: recursive && 5 < depth ? [] : (generator.array ?? $generator.array)(() => $pick([
            () => $ro0(true, recursive ? 1 + depth : depth),
            () => $ro1(true, recursive ? 1 + depth : depth),
            () => $ro2(true, recursive ? 1 + depth : depth),
            () => $ro3(true, recursive ? 1 + depth : depth),
            () => $ro4(true, recursive ? 1 + depth : depth),
            () => $ro5(true, recursive ? 1 + depth : depth)
        ])())
    });
    const $ro1 = (recursive = true, depth = 0) => ({
        access: $pick([
            () => "read",
            () => "write"
        ])(),
        id: (generator.number ?? $generator.number)(0, 100),
        name: (generator.string ?? $generator.string)(),
        path: (generator.string ?? $generator.string)(),
        children: recursive && 5 < depth ? [] : (generator.array ?? $generator.array)(() => $pick([
            () => $ro0(true, recursive ? 1 + depth : depth),
            () => $ro1(true, recursive ? 1 + depth : depth),
            () => $ro2(true, recursive ? 1 + depth : depth),
            () => $ro3(true, recursive ? 1 + depth : depth),
            () => $ro4(true, recursive ? 1 + depth : depth),
            () => $ro5(true, recursive ? 1 + depth : depth)
        ])())
    });
    const $ro2 = (recursive = false, depth = 0) => ({
        id: (generator.number ?? $generator.number)(0, 100),
        name: (generator.string ?? $generator.string)(),
        path: (generator.string ?? $generator.string)(),
        width: (generator.number ?? $generator.number)(0, 100),
        height: (generator.number ?? $generator.number)(0, 100),
        url: (generator.string ?? $generator.string)(),
        size: (generator.number ?? $generator.number)(0, 100)
    });
    const $ro3 = (recursive = false, depth = 0) => ({
        id: (generator.number ?? $generator.number)(0, 100),
        name: (generator.string ?? $generator.string)(),
        path: (generator.string ?? $generator.string)(),
        size: (generator.number ?? $generator.number)(0, 100),
        content: (generator.string ?? $generator.string)()
    });
    const $ro4 = (recursive = false, depth = 0) => ({
        id: (generator.number ?? $generator.number)(0, 100),
        name: (generator.string ?? $generator.string)(),
        path: (generator.string ?? $generator.string)(),
        size: (generator.number ?? $generator.number)(0, 100),
        count: (generator.number ?? $generator.number)(0, 100)
    });
    const $ro5 = (recursive = true, depth = 0) => ({
        id: (generator.number ?? $generator.number)(0, 100),
        name: (generator.string ?? $generator.string)(),
        path: (generator.string ?? $generator.string)(),
        target: $pick([
            () => $ro0(true, recursive ? 1 + depth : depth),
            () => $ro1(true, recursive ? 1 + depth : depth),
            () => $ro2(true, recursive ? 1 + depth : depth),
            () => $ro3(true, recursive ? 1 + depth : depth),
            () => $ro4(true, recursive ? 1 + depth : depth),
            () => $ro5(true, recursive ? 1 + depth : depth)
        ])()
    });
    return (generator.array ?? $generator.array)(() => $pick([
        () => $ro0(),
        () => $ro1(),
        () => $ro2(),
        () => $ro3(),
        () => $ro4(),
        () => $ro5()
    ])());
})(), (input: any) => {
    const $guard = (typia.createAssert as any).guard;
    ((input: any, _path: string, _exceptionable: boolean): input is ArrayRecursiveUnionImplicit => {
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
            expected: "Array<(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)>",
            value: input.children
        })) && input.children.every((elem: any, _index2: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".children[" + _index2 + "]",
            expected: "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
            value: elem
        })) && $au0(elem, _path + ".children[" + _index2 + "]", true && _exceptionable)));
        const $ao1 = (input: any, _path: string, _exceptionable: boolean) => ("read" === input.access || "write" === input.access || $guard(_exceptionable, {
            path: _path + ".access",
            expected: "(\"read\" | \"write\")",
            value: input.access
        })) && ("number" === typeof input.id || $guard(_exceptionable, {
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
            expected: "Array<(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)>",
            value: input.children
        })) && input.children.every((elem: any, _index3: number) => ("object" === typeof elem && null !== elem || $guard(_exceptionable, {
            path: _path + ".children[" + _index3 + "]",
            expected: "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
            value: elem
        })) && $au0(elem, _path + ".children[" + _index3 + "]", true && _exceptionable)));
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
        })) && ("string" === typeof input.content || $guard(_exceptionable, {
            path: _path + ".content",
            expected: "string",
            value: input.content
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
        })) && ("number" === typeof input.size || $guard(_exceptionable, {
            path: _path + ".size",
            expected: "number",
            value: input.size
        })) && ("number" === typeof input.count || $guard(_exceptionable, {
            path: _path + ".count",
            expected: "number",
            value: input.count
        }));
        const $ao5 = (input: any, _path: string, _exceptionable: boolean) => ("number" === typeof input.id || $guard(_exceptionable, {
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
            expected: "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
            value: input.target
        })) && $au0(input.target, _path + ".target", true && _exceptionable));
        const $au0 = (input: any, _path: string, _exceptionable: boolean) => (() => {
            if (undefined !== input.access)
                return $ao1(input, _path, true && _exceptionable);
            if (undefined !== input.width)
                return $ao2(input, _path, true && _exceptionable);
            if (undefined !== input.content)
                return $ao3(input, _path, true && _exceptionable);
            if (undefined !== input.count)
                return $ao4(input, _path, true && _exceptionable);
            if (undefined !== input.target)
                return $ao5(input, _path, true && _exceptionable);
            return $ao0(input, _path, true && _exceptionable);
        })();
        return (Array.isArray(input) || $guard(true, {
            path: _path + "",
            expected: "Array<(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)>",
            value: input
        })) && input.every((elem: any, _index1: number) => ("object" === typeof elem && null !== elem || $guard(true, {
            path: _path + "[" + _index1 + "]",
            expected: "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
            value: elem
        })) && $au0(elem, _path + "[" + _index1 + "]", true));
    })(input, "$input", true);
    return input as typia.Primitive<ArrayRecursiveUnionImplicit>;
});
