import typia from "../../../../src";
import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_assertEquals_ArrayRecursiveUnionExplicit = _test_assertEquals(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) =>
        ((input: any): Array<ArrayRecursiveUnionExplicit.IBucket> => {
            const $guard = (typia.assertEquals as any).guard;
            const $join = (typia.assertEquals as any).join;
            ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): input is ArrayRecursiveUnionExplicit => {
                const $ao0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.id &&
                        Number.isFinite(input.id)) ||
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
                                "Array<(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)>",
                            value: input.children,
                        })) &&
                    input.children.every(
                        (elem: any, _index2: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(_exceptionable, {
                                    path: _path + ".children[" + _index2 + "]",
                                    expected:
                                        "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
                                    value: elem,
                                })) &&
                            $au0(
                                elem,
                                _path + ".children[" + _index2 + "]",
                                true && _exceptionable,
                            ),
                    ) &&
                    ("directory" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"directory"',
                            value: input.type,
                        })) &&
                    (5 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (
                                ["id", "name", "path", "children", "type"].some(
                                    (prop) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao1 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.id &&
                        Number.isFinite(input.id)) ||
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
                        })) &&
                    ("file" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"file"',
                            value: input.type,
                        })) &&
                    ("jpg" === input.extension ||
                        $guard(_exceptionable, {
                            path: _path + ".extension",
                            expected: '"jpg"',
                            value: input.extension,
                        })) &&
                    (9 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (
                                [
                                    "id",
                                    "name",
                                    "path",
                                    "width",
                                    "height",
                                    "url",
                                    "size",
                                    "type",
                                    "extension",
                                ].some((prop) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao2 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.id &&
                        Number.isFinite(input.id)) ||
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
                        })) &&
                    ("file" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"file"',
                            value: input.type,
                        })) &&
                    ("txt" === input.extension ||
                        $guard(_exceptionable, {
                            path: _path + ".extension",
                            expected: '"txt"',
                            value: input.extension,
                        })) &&
                    (7 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (
                                [
                                    "id",
                                    "name",
                                    "path",
                                    "size",
                                    "content",
                                    "type",
                                    "extension",
                                ].some((prop) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao3 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.id &&
                        Number.isFinite(input.id)) ||
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
                        })) &&
                    ("file" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"file"',
                            value: input.type,
                        })) &&
                    ("zip" === input.extension ||
                        $guard(_exceptionable, {
                            path: _path + ".extension",
                            expected: '"zip"',
                            value: input.extension,
                        })) &&
                    (7 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (
                                [
                                    "id",
                                    "name",
                                    "path",
                                    "size",
                                    "count",
                                    "type",
                                    "extension",
                                ].some((prop) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $ao4 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): boolean =>
                    (("number" === typeof input.id &&
                        Number.isFinite(input.id)) ||
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
                    (("object" === typeof input.target &&
                        null !== input.target) ||
                        $guard(_exceptionable, {
                            path: _path + ".target",
                            expected:
                                "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
                            value: input.target,
                        })) &&
                    $au0(
                        input.target,
                        _path + ".target",
                        true && _exceptionable,
                    ) &&
                    ("file" === input.type ||
                        $guard(_exceptionable, {
                            path: _path + ".type",
                            expected: '"file"',
                            value: input.type,
                        })) &&
                    ("lnk" === input.extension ||
                        $guard(_exceptionable, {
                            path: _path + ".extension",
                            expected: '"lnk"',
                            value: input.extension,
                        })) &&
                    (6 === Object.keys(input).length ||
                        false === _exceptionable ||
                        Object.keys(input).every((key) => {
                            if (
                                [
                                    "id",
                                    "name",
                                    "path",
                                    "target",
                                    "type",
                                    "extension",
                                ].some((prop) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return $guard(_exceptionable, {
                                path: _path + $join(key),
                                expected: "undefined",
                                value: value,
                            });
                        }));
                const $au0 = (
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
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
                            expected:
                                "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile | ArrayRecursiveUnionExplicit.IShortcut)",
                            value: input,
                        });
                    })();
                return (
                    (Array.isArray(input) ||
                        $guard(true, {
                            path: _path + "",
                            expected:
                                "Array<(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)>",
                            value: input,
                        })) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            (("object" === typeof elem && null !== elem) ||
                                $guard(true, {
                                    path: _path + "[" + _index1 + "]",
                                    expected:
                                        "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
                                    value: elem,
                                })) &&
                            $au0(elem, _path + "[" + _index1 + "]", true),
                    )
                );
            })(input, "$input", true);
            return input;
        })(input),
);
