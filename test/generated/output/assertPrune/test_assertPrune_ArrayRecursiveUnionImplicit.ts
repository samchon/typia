import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_assertPrune_ArrayRecursiveUnionImplicit = _test_assertPrune(
    "ArrayRecursiveUnionImplicit",
    ArrayRecursiveUnionImplicit.generate,
    (input) =>
        ((input: any): Array<ArrayRecursiveUnionImplicit.IBucket> => {
            const assert = (
                input: any,
            ): Array<ArrayRecursiveUnionImplicit.IBucket> => {
                const $guard = (typia.assertPrune as any).guard;
                const __is = (
                    input: any,
                ): input is Array<ArrayRecursiveUnionImplicit.IBucket> => {
                    const $io0 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        Array.isArray(input.children) &&
                        input.children.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        ("read" === input.access || "write" === input.access) &&
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        Array.isArray(input.children) &&
                        input.children.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        );
                    const $io2 = (input: any): boolean =>
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
                        Number.isFinite(input.size);
                    const $io3 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "number" === typeof input.size &&
                        Number.isFinite(input.size) &&
                        "string" === typeof input.content;
                    const $io4 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "number" === typeof input.size &&
                        Number.isFinite(input.size) &&
                        "number" === typeof input.count &&
                        Number.isFinite(input.count);
                    const $io5 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "object" === typeof input.target &&
                        null !== input.target &&
                        $iu0(input.target);
                    const $iu0 = (input: any): any =>
                        (() => {
                            if (undefined !== input.access) return $io1(input);
                            if (undefined !== input.width) return $io2(input);
                            if (undefined !== input.content) return $io3(input);
                            if (undefined !== input.count) return $io4(input);
                            if (undefined !== input.target) return $io5(input);
                            return $io0(input);
                        })();
                    return (
                        Array.isArray(input) &&
                        input.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $iu0(elem),
                        )
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is Array<ArrayRecursiveUnionImplicit.IBucket> => {
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
                                        "Array<(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)>",
                                    value: input.children,
                                })) &&
                            input.children.every(
                                (elem: any, _index2: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".children[" +
                                                _index2 +
                                                "]",
                                            expected:
                                                "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
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
                                        "Array<(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)>",
                                    value: input.children,
                                })) &&
                            input.children.every(
                                (elem: any, _index3: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".children[" +
                                                _index3 +
                                                "]",
                                            expected:
                                                "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
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
                            (("object" === typeof input.target &&
                                null !== input.target) ||
                                $guard(_exceptionable, {
                                    path: _path + ".target",
                                    expected:
                                        "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
                                    value: input.target,
                                })) &&
                            $au0(
                                input.target,
                                _path + ".target",
                                true && _exceptionable,
                            );
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
                                if (undefined !== input.width)
                                    return $ao2(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.content)
                                    return $ao3(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.count)
                                    return $ao4(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if (undefined !== input.target)
                                    return $ao5(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                return $ao0(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            })();
                        return (
                            (Array.isArray(input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected:
                                        "Array<(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)>",
                                    value: input,
                                })) &&
                            input.every(
                                (elem: any, _index1: number) =>
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Resolve<ArrayRecursiveUnionImplicit.IDirectory> | Resolve<ArrayRecursiveUnionImplicit.IImageFile> | Resolve<ArrayRecursiveUnionImplicit.ISharedDirectory> | Resolve<ArrayRecursiveUnionImplicit.IShortcut> | Resolve<ArrayRecursiveUnionImplicit.ITextFile> | Resolve<ArrayRecursiveUnionImplicit.IZipFile>)",
                                            value: elem,
                                        })) &&
                                    $au0(
                                        elem,
                                        _path + "[" + _index1 + "]",
                                        true,
                                    ),
                            )
                        );
                    })(input, "$input", true);
                return input;
            };
            const prune = (
                input: Array<ArrayRecursiveUnionImplicit.IBucket>,
            ): void => {
                const $io0 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    );
                const $io1 = (input: any): boolean =>
                    ("read" === input.access || "write" === input.access) &&
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $iu0(elem),
                    );
                const $io2 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.width &&
                    "number" === typeof input.height &&
                    "string" === typeof input.url &&
                    "number" === typeof input.size;
                const $io3 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    "string" === typeof input.content;
                const $io4 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    "number" === typeof input.count;
                const $io5 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "object" === typeof input.target &&
                    null !== input.target &&
                    $iu0(input.target);
                const $iu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.access) return $io1(input);
                        if (undefined !== input.width) return $io2(input);
                        if (undefined !== input.content) return $io3(input);
                        if (undefined !== input.count) return $io4(input);
                        if (undefined !== input.target) return $io5(input);
                        return $io0(input);
                    })();
                const $po0 = (input: any): any => {
                    if (Array.isArray(input.children))
                        input.children.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $pu0(elem);
                        });
                    for (const key of Object.keys(input)) {
                        if (
                            "id" === key ||
                            "name" === key ||
                            "path" === key ||
                            "children" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $po1 = (input: any): any => {
                    if (Array.isArray(input.children))
                        input.children.forEach((elem: any) => {
                            if ("object" === typeof elem && null !== elem)
                                $pu0(elem);
                        });
                    for (const key of Object.keys(input)) {
                        if (
                            "access" === key ||
                            "id" === key ||
                            "name" === key ||
                            "path" === key ||
                            "children" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $po2 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "id" === key ||
                            "name" === key ||
                            "path" === key ||
                            "width" === key ||
                            "height" === key ||
                            "url" === key ||
                            "size" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $po3 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "id" === key ||
                            "name" === key ||
                            "path" === key ||
                            "size" === key ||
                            "content" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $po4 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "id" === key ||
                            "name" === key ||
                            "path" === key ||
                            "size" === key ||
                            "count" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $po5 = (input: any): any => {
                    if (
                        "object" === typeof input.target &&
                        null !== input.target
                    )
                        $pu0(input.target);
                    for (const key of Object.keys(input)) {
                        if (
                            "id" === key ||
                            "name" === key ||
                            "path" === key ||
                            "target" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $pu0 = (input: any): any =>
                    (() => {
                        if (undefined !== input.access) return $po1(input);
                        if (undefined !== input.width) return $po2(input);
                        if (undefined !== input.content) return $po3(input);
                        if (undefined !== input.count) return $po4(input);
                        if (undefined !== input.target) return $po5(input);
                        return $po0(input);
                    })();
                if (Array.isArray(input))
                    input.forEach((elem: any) => {
                        if ("object" === typeof elem && null !== elem)
                            $pu0(elem);
                    });
            };
            assert(input);
            prune(input);
            return input;
        })(input),
    ArrayRecursiveUnionImplicit.SPOILERS,
);
