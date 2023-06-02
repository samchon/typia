import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_assertStringify_ArrayRecursiveUnionImplicit =
    _test_assertStringify(
        "ArrayRecursiveUnionImplicit",
        ArrayRecursiveUnionImplicit.generate,
        (input) =>
            ((input: any): string => {
                const assert: any = (
                    input: any,
                ): Array<ArrayRecursiveUnionImplicit.IBucket> => {
                    const __is: any = (
                        input: any,
                    ): input is Array<ArrayRecursiveUnionImplicit.IBucket> => {
                        const $io0: any = (input: any): boolean =>
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
                        const $io1: any = (input: any): boolean =>
                            ("read" === input.access ||
                                "write" === input.access) &&
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
                        const $io2: any = (input: any): boolean =>
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
                        const $io3: any = (input: any): boolean =>
                            "number" === typeof input.id &&
                            Number.isFinite(input.id) &&
                            "string" === typeof input.name &&
                            "string" === typeof input.path &&
                            "number" === typeof input.size &&
                            Number.isFinite(input.size) &&
                            "string" === typeof input.content;
                        const $io4: any = (input: any): boolean =>
                            "number" === typeof input.id &&
                            Number.isFinite(input.id) &&
                            "string" === typeof input.name &&
                            "string" === typeof input.path &&
                            "number" === typeof input.size &&
                            Number.isFinite(input.size) &&
                            "number" === typeof input.count &&
                            Number.isFinite(input.count);
                        const $io5: any = (input: any): boolean =>
                            "number" === typeof input.id &&
                            Number.isFinite(input.id) &&
                            "string" === typeof input.name &&
                            "string" === typeof input.path &&
                            "object" === typeof input.target &&
                            null !== input.target &&
                            $iu0(input.target);
                        const $iu0: any = (input: any): any =>
                            (() => {
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
                    const $guard: any = (typia.assertStringify as any).guard;
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is Array<ArrayRecursiveUnionImplicit.IBucket> => {
                            const $ao0: any = (
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
                                            "Array<ArrayRecursiveUnionImplicit.IBucket>",
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
                                        ),
                                );
                            const $ao1: any = (
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
                                            "Array<ArrayRecursiveUnionImplicit.IBucket>",
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
                                        ),
                                );
                            const $ao2: any = (
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
                            const $ao3: any = (
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
                            const $ao4: any = (
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
                            const $ao5: any = (
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
                                            "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                                        value: input.target,
                                    })) &&
                                $au0(
                                    input.target,
                                    _path + ".target",
                                    true && _exceptionable,
                                );
                            const $au0: any = (
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
                                        expected: "ArrayRecursiveUnionImplicit",
                                        value: input,
                                    })) &&
                                input.every(
                                    (elem: any, _index1: number) =>
                                        (("object" === typeof elem &&
                                            null !== elem) ||
                                            $guard(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
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
                const stringify: any = (
                    input: Array<ArrayRecursiveUnionImplicit.IBucket>,
                ): string => {
                    const $io0: any = (input: any): boolean =>
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
                    const $io1: any = (input: any): boolean =>
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
                    const $io2: any = (input: any): boolean =>
                        "number" === typeof input.id &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "number" === typeof input.width &&
                        "number" === typeof input.height &&
                        "string" === typeof input.url &&
                        "number" === typeof input.size;
                    const $io3: any = (input: any): boolean =>
                        "number" === typeof input.id &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "number" === typeof input.size &&
                        "string" === typeof input.content;
                    const $io4: any = (input: any): boolean =>
                        "number" === typeof input.id &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "number" === typeof input.size &&
                        "number" === typeof input.count;
                    const $io5: any = (input: any): boolean =>
                        "number" === typeof input.id &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "object" === typeof input.target &&
                        null !== input.target &&
                        $iu0(input.target);
                    const $iu0: any = (input: any): any =>
                        (() => {
                            if (undefined !== input.access) return $io1(input);
                            if (undefined !== input.width) return $io2(input);
                            if (undefined !== input.content) return $io3(input);
                            if (undefined !== input.count) return $io4(input);
                            if (undefined !== input.target) return $io5(input);
                            return $io0(input);
                        })();
                    const $number: any = (typia.assertStringify as any).number;
                    const $string: any = (typia.assertStringify as any).string;
                    const $throws: any = (typia.assertStringify as any).throws;
                    const $so0: any = (input: any): any =>
                        `{"id":${$number(input.id)},"name":${$string(
                            input.name,
                        )},"path":${$string(input.path)},"children":${(() =>
                            `[${input.children
                                .map((elem: any) => $su0(elem))
                                .join(",")}]`)()}}`;
                    const $so1: any = (input: any): any =>
                        `{"access":${(() => {
                            if ("string" === typeof input.access)
                                return $string(input.access);
                            if ("string" === typeof input.access)
                                return '"' + input.access + '"';
                            $throws({
                                expected: '("read" | "write")',
                                value: input.access,
                            });
                        })()},"id":${$number(input.id)},"name":${$string(
                            input.name,
                        )},"path":${$string(input.path)},"children":${(() =>
                            `[${input.children
                                .map((elem: any) => $su0(elem))
                                .join(",")}]`)()}}`;
                    const $so2: any = (input: any): any =>
                        `{"id":${$number(input.id)},"name":${$string(
                            input.name,
                        )},"path":${$string(input.path)},"width":${$number(
                            input.width,
                        )},"height":${$number(input.height)},"url":${$string(
                            input.url,
                        )},"size":${$number(input.size)}}`;
                    const $so3: any = (input: any): any =>
                        `{"id":${$number(input.id)},"name":${$string(
                            input.name,
                        )},"path":${$string(input.path)},"size":${$number(
                            input.size,
                        )},"content":${$string(input.content)}}`;
                    const $so4: any = (input: any): any =>
                        `{"id":${$number(input.id)},"name":${$string(
                            input.name,
                        )},"path":${$string(input.path)},"size":${$number(
                            input.size,
                        )},"count":${$number(input.count)}}`;
                    const $so5: any = (input: any): any =>
                        `{"id":${$number(input.id)},"name":${$string(
                            input.name,
                        )},"path":${$string(input.path)},"target":${$su0(
                            input.target,
                        )}}`;
                    const $su0: any = (input: any): any =>
                        (() => {
                            if (undefined !== input.access) return $so1(input);
                            if (undefined !== input.width) return $so2(input);
                            if (undefined !== input.content) return $so3(input);
                            if (undefined !== input.count) return $so4(input);
                            if (undefined !== input.target) return $so5(input);
                            return $so0(input);
                        })();
                    return (() =>
                        `[${input
                            .map((elem: any) => $su0(elem))
                            .join(",")}]`)();
                };
                return stringify(assert(input));
            })(input),
        ArrayRecursiveUnionImplicit.SPOILERS,
    );
