import typia from "../../../../src";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_assertGuardEquals_ArrayRecursiveUnionImplicit =
    _test_assertGuardEquals(
        "ArrayRecursiveUnionImplicit",
    )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
        ((input: any): asserts input is ArrayRecursiveUnionImplicit => {
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is ArrayRecursiveUnionImplicit => {
                const $io0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any, _index2: number) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem, true && _exceptionable),
                    ) &&
                    (4 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["id", "name", "path", "children"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io1 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    ("read" === input.access || "write" === input.access) &&
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any, _index3: number) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem, true && _exceptionable),
                    ) &&
                    (5 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                [
                                    "access",
                                    "id",
                                    "name",
                                    "path",
                                    "children",
                                ].some((prop: any) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io2 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.width &&
                    Number.isFinite(input.width) &&
                    "number" === typeof input.height &&
                    Number.isFinite(input.height) &&
                    "string" === typeof input.url &&
                    "number" === typeof input.size &&
                    Number.isFinite(input.size) &&
                    (7 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                [
                                    "id",
                                    "name",
                                    "path",
                                    "width",
                                    "height",
                                    "url",
                                    "size",
                                ].some((prop: any) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io3 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    Number.isFinite(input.size) &&
                    "string" === typeof input.content &&
                    (5 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["id", "name", "path", "size", "content"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io4 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    Number.isFinite(input.size) &&
                    "number" === typeof input.count &&
                    Number.isFinite(input.count) &&
                    (5 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["id", "name", "path", "size", "count"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io5 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "object" === typeof input.target &&
                    null !== input.target &&
                    $iu0(input.target, true && _exceptionable) &&
                    (4 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["id", "name", "path", "target"].some(
                                    (prop: any) => key === prop,
                                )
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $iu0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): any =>
                    (() => {
                        if (undefined !== input.access)
                            return $io1(input, true && _exceptionable);
                        else if (undefined !== input.width)
                            return $io2(input, true && _exceptionable);
                        else if (undefined !== input.content)
                            return $io3(input, true && _exceptionable);
                        else if (undefined !== input.count)
                            return $io4(input, true && _exceptionable);
                        else if (undefined !== input.target)
                            return $io5(input, true && _exceptionable);
                        else return $io0(input, true && _exceptionable);
                    })();
                return (
                    Array.isArray(input) &&
                    input.every(
                        (elem: any, _index1: number) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem, true),
                    )
                );
            };
            if (false === __is(input))
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ArrayRecursiveUnionImplicit => {
                    const $guard = (typia.assertGuardEquals as any).guard;
                    const $join = (typia.assertGuardEquals as any).join;
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
                        (((Array.isArray(input.children) ||
                            $guard(_exceptionable, {
                                path: _path + ".children",
                                expected:
                                    "Array<ArrayRecursiveUnionImplicit.IBucket>",
                                value: input.children,
                            })) &&
                            input.children.every(
                                (elem: any, _index2: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".children[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                                            value: elem,
                                        })) &&
                                        $au0(
                                            elem,
                                            _path +
                                                ".children[" +
                                                _index2 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".children[" +
                                            _index2 +
                                            "]",
                                        expected:
                                            "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                                        value: elem,
                                    }),
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".children",
                                expected:
                                    "Array<ArrayRecursiveUnionImplicit.IBucket>",
                                value: input.children,
                            })) &&
                        (4 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    ["id", "name", "path", "children"].some(
                                        (prop: any) => key === prop,
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
                        ("read" === input.access ||
                            "write" === input.access ||
                            $guard(_exceptionable, {
                                path: _path + ".access",
                                expected: '("read" | "write")',
                                value: input.access,
                            })) &&
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
                        (((Array.isArray(input.children) ||
                            $guard(_exceptionable, {
                                path: _path + ".children",
                                expected:
                                    "Array<ArrayRecursiveUnionImplicit.IBucket>",
                                value: input.children,
                            })) &&
                            input.children.every(
                                (elem: any, _index3: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".children[" +
                                                _index3 +
                                                "]",
                                            expected:
                                                "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                                            value: elem,
                                        })) &&
                                        $au0(
                                            elem,
                                            _path +
                                                ".children[" +
                                                _index3 +
                                                "]",
                                            true && _exceptionable,
                                        )) ||
                                    $guard(_exceptionable, {
                                        path:
                                            _path +
                                            ".children[" +
                                            _index3 +
                                            "]",
                                        expected:
                                            "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                                        value: elem,
                                    }),
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".children",
                                expected:
                                    "Array<ArrayRecursiveUnionImplicit.IBucket>",
                                value: input.children,
                            })) &&
                        (5 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    [
                                        "access",
                                        "id",
                                        "name",
                                        "path",
                                        "children",
                                    ].some((prop: any) => key === prop)
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
                        (7 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    [
                                        "id",
                                        "name",
                                        "path",
                                        "width",
                                        "height",
                                        "url",
                                        "size",
                                    ].some((prop: any) => key === prop)
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
                        ("string" === typeof input.content ||
                            $guard(_exceptionable, {
                                path: _path + ".content",
                                expected: "string",
                                value: input.content,
                            })) &&
                        (5 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    [
                                        "id",
                                        "name",
                                        "path",
                                        "size",
                                        "content",
                                    ].some((prop: any) => key === prop)
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
                        (5 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    [
                                        "id",
                                        "name",
                                        "path",
                                        "size",
                                        "count",
                                    ].some((prop: any) => key === prop)
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
                    const $ao5 = (
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
                        (((("object" === typeof input.target &&
                            null !== input.target) ||
                            $guard(_exceptionable, {
                                path: _path + ".target",
                                expected:
                                    "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                                value: input.target,
                            })) &&
                            $au0(
                                input.target,
                                _path + ".target",
                                true && _exceptionable,
                            )) ||
                            $guard(_exceptionable, {
                                path: _path + ".target",
                                expected:
                                    "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                                value: input.target,
                            })) &&
                        (4 === Object.keys(input).length ||
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                if (
                                    ["id", "name", "path", "target"].some(
                                        (prop: any) => key === prop,
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
                    const $au0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if (undefined !== input.access)
                                return $ao1(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.width)
                                return $ao2(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.content)
                                return $ao3(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.count)
                                return $ao4(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else if (undefined !== input.target)
                                return $ao5(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            else
                                return $ao0(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                        })();
                    return (
                        ((Array.isArray(input) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ArrayRecursiveUnionImplicit",
                                value: input,
                            })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    ((("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                                            value: elem,
                                        })) &&
                                        $au0(
                                            elem,
                                            _path + "[" + _index1 + "]",
                                            true,
                                        )) ||
                                    $guard(true, {
                                        path: _path + "[" + _index1 + "]",
                                        expected:
                                            "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                                        value: elem,
                                    }),
                            )) ||
                        $guard(true, {
                            path: _path + "",
                            expected: "ArrayRecursiveUnionImplicit",
                            value: input,
                        })
                    );
                })(input, "$input", true);
        })(input),
    );
