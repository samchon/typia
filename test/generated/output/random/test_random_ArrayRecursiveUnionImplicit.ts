import typia from "../../../../src";
import { _test_random } from "../../../internal/_test_random";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_random_ArrayRecursiveUnionImplicit = _test_random(
    "ArrayRecursiveUnionImplicit",
    () =>
        ((
            generator: Partial<typia.IRandomGenerator> = (typia.random as any)
                .generator,
        ): typia.Primitive<ArrayRecursiveUnionImplicit> => {
            const $generator = (typia.random as any).generator;
            const $pick = (typia.random as any).pick;
            const $ro0 = (
                _recursive: boolean = true,
                _depth: number = 0,
            ): any => ({
                id: (generator.number ?? $generator.number)(0, 100),
                name: (generator.string ?? $generator.string)(),
                path: (generator.string ?? $generator.string)(),
                children:
                    _recursive && 5 < _depth
                        ? []
                        : (generator.array ?? $generator.array)(() =>
                              $pick([
                                  () =>
                                      $ro0(
                                          true,
                                          _recursive ? 1 + _depth : _depth,
                                      ),
                                  () =>
                                      $ro1(
                                          true,
                                          _recursive ? 1 + _depth : _depth,
                                      ),
                                  () =>
                                      $ro2(
                                          true,
                                          _recursive ? 1 + _depth : _depth,
                                      ),
                                  () =>
                                      $ro3(
                                          true,
                                          _recursive ? 1 + _depth : _depth,
                                      ),
                                  () =>
                                      $ro4(
                                          true,
                                          _recursive ? 1 + _depth : _depth,
                                      ),
                                  () =>
                                      $ro5(
                                          true,
                                          _recursive ? 1 + _depth : _depth,
                                      ),
                              ])(),
                          ),
            });
            const $ro1 = (
                _recursive: boolean = true,
                _depth: number = 0,
            ): any => ({
                access: $pick([() => "read", () => "write"])(),
                id: (generator.number ?? $generator.number)(0, 100),
                name: (generator.string ?? $generator.string)(),
                path: (generator.string ?? $generator.string)(),
                children:
                    _recursive && 5 < _depth
                        ? []
                        : (generator.array ?? $generator.array)(() =>
                              $pick([
                                  () =>
                                      $ro0(
                                          true,
                                          _recursive ? 1 + _depth : _depth,
                                      ),
                                  () =>
                                      $ro1(
                                          true,
                                          _recursive ? 1 + _depth : _depth,
                                      ),
                                  () =>
                                      $ro2(
                                          true,
                                          _recursive ? 1 + _depth : _depth,
                                      ),
                                  () =>
                                      $ro3(
                                          true,
                                          _recursive ? 1 + _depth : _depth,
                                      ),
                                  () =>
                                      $ro4(
                                          true,
                                          _recursive ? 1 + _depth : _depth,
                                      ),
                                  () =>
                                      $ro5(
                                          true,
                                          _recursive ? 1 + _depth : _depth,
                                      ),
                              ])(),
                          ),
            });
            const $ro2 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                id: (generator.number ?? $generator.number)(0, 100),
                name: (generator.string ?? $generator.string)(),
                path: (generator.string ?? $generator.string)(),
                width: (generator.number ?? $generator.number)(0, 100),
                height: (generator.number ?? $generator.number)(0, 100),
                url: (generator.string ?? $generator.string)(),
                size: (generator.number ?? $generator.number)(0, 100),
            });
            const $ro3 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                id: (generator.number ?? $generator.number)(0, 100),
                name: (generator.string ?? $generator.string)(),
                path: (generator.string ?? $generator.string)(),
                size: (generator.number ?? $generator.number)(0, 100),
                content: (generator.string ?? $generator.string)(),
            });
            const $ro4 = (
                _recursive: boolean = false,
                _depth: number = 0,
            ): any => ({
                id: (generator.number ?? $generator.number)(0, 100),
                name: (generator.string ?? $generator.string)(),
                path: (generator.string ?? $generator.string)(),
                size: (generator.number ?? $generator.number)(0, 100),
                count: (generator.number ?? $generator.number)(0, 100),
            });
            const $ro5 = (
                _recursive: boolean = true,
                _depth: number = 0,
            ): any => ({
                id: (generator.number ?? $generator.number)(0, 100),
                name: (generator.string ?? $generator.string)(),
                path: (generator.string ?? $generator.string)(),
                target: $pick([
                    () => $ro0(true, _recursive ? 1 + _depth : _depth),
                    () => $ro1(true, _recursive ? 1 + _depth : _depth),
                    () => $ro2(true, _recursive ? 1 + _depth : _depth),
                    () => $ro3(true, _recursive ? 1 + _depth : _depth),
                    () => $ro4(true, _recursive ? 1 + _depth : _depth),
                    () => $ro5(true, _recursive ? 1 + _depth : _depth),
                ])(),
            });
            return (generator.array ?? $generator.array)(() =>
                $pick([
                    () => $ro0(),
                    () => $ro1(),
                    () => $ro2(),
                    () => $ro3(),
                    () => $ro4(),
                    () => $ro5(),
                ])(),
            );
        })(),
    (input: any): ArrayRecursiveUnionImplicit => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ArrayRecursiveUnionImplicit => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                    $guard(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                    })) &&
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    })) &&
                ("string" === typeof input.path ||
                    $guard(_exceptionable, {
                        path: _path + ".path",
                        expected: "string",
                        value: input.path,
                    })) &&
                (Array.isArray(input.children) ||
                    $guard(_exceptionable, {
                        path: _path + ".children",
                        expected:
                            "Array<(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)>",
                        value: input.children,
                    })) &&
                input.children.every(
                    (elem: any, _index2: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(_exceptionable, {
                                path: _path + ".children[" + _index2 + "]",
                                expected:
                                    "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                                value: elem,
                            })) &&
                        $au0(
                            elem,
                            _path + ".children[" + _index2 + "]",
                            true && _exceptionable,
                        ),
                );
            const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                ("read" === input.access ||
                    "write" === input.access ||
                    $guard(_exceptionable, {
                        path: _path + ".access",
                        expected: '("read" | "write")',
                        value: input.access,
                    })) &&
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                    $guard(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                    })) &&
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    })) &&
                ("string" === typeof input.path ||
                    $guard(_exceptionable, {
                        path: _path + ".path",
                        expected: "string",
                        value: input.path,
                    })) &&
                (Array.isArray(input.children) ||
                    $guard(_exceptionable, {
                        path: _path + ".children",
                        expected:
                            "Array<(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)>",
                        value: input.children,
                    })) &&
                input.children.every(
                    (elem: any, _index3: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(_exceptionable, {
                                path: _path + ".children[" + _index3 + "]",
                                expected:
                                    "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                                value: elem,
                            })) &&
                        $au0(
                            elem,
                            _path + ".children[" + _index3 + "]",
                            true && _exceptionable,
                        ),
                );
            const $ao2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                    $guard(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                    })) &&
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    })) &&
                ("string" === typeof input.path ||
                    $guard(_exceptionable, {
                        path: _path + ".path",
                        expected: "string",
                        value: input.path,
                    })) &&
                (("number" === typeof input.width &&
                    Number.isFinite(input.width)) ||
                    $guard(_exceptionable, {
                        path: _path + ".width",
                        expected: "number",
                        value: input.width,
                    })) &&
                (("number" === typeof input.height &&
                    Number.isFinite(input.height)) ||
                    $guard(_exceptionable, {
                        path: _path + ".height",
                        expected: "number",
                        value: input.height,
                    })) &&
                ("string" === typeof input.url ||
                    $guard(_exceptionable, {
                        path: _path + ".url",
                        expected: "string",
                        value: input.url,
                    })) &&
                (("number" === typeof input.size &&
                    Number.isFinite(input.size)) ||
                    $guard(_exceptionable, {
                        path: _path + ".size",
                        expected: "number",
                        value: input.size,
                    }));
            const $ao3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                    $guard(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                    })) &&
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    })) &&
                ("string" === typeof input.path ||
                    $guard(_exceptionable, {
                        path: _path + ".path",
                        expected: "string",
                        value: input.path,
                    })) &&
                (("number" === typeof input.size &&
                    Number.isFinite(input.size)) ||
                    $guard(_exceptionable, {
                        path: _path + ".size",
                        expected: "number",
                        value: input.size,
                    })) &&
                ("string" === typeof input.content ||
                    $guard(_exceptionable, {
                        path: _path + ".content",
                        expected: "string",
                        value: input.content,
                    }));
            const $ao4 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                    $guard(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                    })) &&
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    })) &&
                ("string" === typeof input.path ||
                    $guard(_exceptionable, {
                        path: _path + ".path",
                        expected: "string",
                        value: input.path,
                    })) &&
                (("number" === typeof input.size &&
                    Number.isFinite(input.size)) ||
                    $guard(_exceptionable, {
                        path: _path + ".size",
                        expected: "number",
                        value: input.size,
                    })) &&
                (("number" === typeof input.count &&
                    Number.isFinite(input.count)) ||
                    $guard(_exceptionable, {
                        path: _path + ".count",
                        expected: "number",
                        value: input.count,
                    }));
            const $ao5 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean =>
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                    $guard(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                    })) &&
                ("string" === typeof input.name ||
                    $guard(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                    })) &&
                ("string" === typeof input.path ||
                    $guard(_exceptionable, {
                        path: _path + ".path",
                        expected: "string",
                        value: input.path,
                    })) &&
                (("object" === typeof input.target && null !== input.target) ||
                    $guard(_exceptionable, {
                        path: _path + ".target",
                        expected:
                            "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                        value: input.target,
                    })) &&
                $au0(input.target, _path + ".target", true && _exceptionable);
            const $au0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): any =>
                (() => {
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
            return (
                (Array.isArray(input) ||
                    $guard(true, {
                        path: _path + "",
                        expected:
                            "Array<(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)>",
                        value: input,
                    })) &&
                input.every(
                    (elem: any, _index1: number) =>
                        (("object" === typeof elem && null !== elem) ||
                            $guard(true, {
                                path: _path + "[" + _index1 + "]",
                                expected:
                                    "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                                value: elem,
                            })) &&
                        $au0(elem, _path + "[" + _index1 + "]", true),
                )
            );
        })(input, "$input", true);
        return input;
    },
);
