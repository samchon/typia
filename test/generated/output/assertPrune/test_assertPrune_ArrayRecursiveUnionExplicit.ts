import typia from "../../../../src";
import { _test_assertPrune } from "../../../internal/_test_assertPrune";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_assertPrune_ArrayRecursiveUnionExplicit = _test_assertPrune(
    "ArrayRecursiveUnionExplicit",
    ArrayRecursiveUnionExplicit.generate,
    (input) =>
        ((input: any): Array<ArrayRecursiveUnionExplicit.IBucket> => {
            const assert = (
                input: any,
            ): Array<ArrayRecursiveUnionExplicit.IBucket> => {
                const $guard = (typia.assertPrune as any).guard;
                const __is = (
                    input: any,
                ): input is Array<ArrayRecursiveUnionExplicit.IBucket> => {
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
                        ) &&
                        "directory" === input.type;
                    const $io1 = (input: any): boolean =>
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
                        "file" === input.type &&
                        "jpg" === input.extension;
                    const $io2 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "number" === typeof input.size &&
                        Number.isFinite(input.size) &&
                        "string" === typeof input.content &&
                        "file" === input.type &&
                        "txt" === input.extension;
                    const $io3 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "number" === typeof input.size &&
                        Number.isFinite(input.size) &&
                        "number" === typeof input.count &&
                        Number.isFinite(input.count) &&
                        "file" === input.type &&
                        "zip" === input.extension;
                    const $io4 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "object" === typeof input.target &&
                        null !== input.target &&
                        $iu0(input.target) &&
                        "file" === input.type &&
                        "lnk" === input.extension;
                    const $iu0 = (input: any): any =>
                        (() => {
                            if ("directory" === input.type) return $io0(input);
                            if ("jpg" === input.extension) return $io1(input);
                            if ("txt" === input.extension) return $io2(input);
                            if ("zip" === input.extension) return $io3(input);
                            if ("lnk" === input.extension) return $io4(input);
                            return false;
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
                    ): input is Array<ArrayRecursiveUnionExplicit.IBucket> => {
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
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(_exceptionable, {
                                            path:
                                                _path +
                                                ".children[" +
                                                _index2 +
                                                "]",
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
                                }));
                        const $au0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            (() => {
                                if ("directory" === input.type)
                                    return $ao0(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("jpg" === input.extension)
                                    return $ao1(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("txt" === input.extension)
                                    return $ao2(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("zip" === input.extension)
                                    return $ao3(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                if ("lnk" === input.extension)
                                    return $ao4(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
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
                                    (("object" === typeof elem &&
                                        null !== elem) ||
                                        $guard(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
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
                input: Array<ArrayRecursiveUnionExplicit.IBucket>,
            ): void => {
                const $throws = (typia.assertPrune as any).throws;
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
                    ) &&
                    "directory" === input.type;
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.width &&
                    "number" === typeof input.height &&
                    "string" === typeof input.url &&
                    "number" === typeof input.size &&
                    "file" === input.type &&
                    "jpg" === input.extension;
                const $io2 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    "string" === typeof input.content &&
                    "file" === input.type &&
                    "txt" === input.extension;
                const $io3 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    "number" === typeof input.count &&
                    "file" === input.type &&
                    "zip" === input.extension;
                const $io4 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "object" === typeof input.target &&
                    null !== input.target &&
                    $iu0(input.target) &&
                    "file" === input.type &&
                    "lnk" === input.extension;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("directory" === input.type) return $io0(input);
                        if ("jpg" === input.extension) return $io1(input);
                        if ("txt" === input.extension) return $io2(input);
                        if ("zip" === input.extension) return $io3(input);
                        if ("lnk" === input.extension) return $io4(input);
                        return false;
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
                            "children" === key ||
                            "type" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $po1 = (input: any): any => {
                    for (const key of Object.keys(input)) {
                        if (
                            "id" === key ||
                            "name" === key ||
                            "path" === key ||
                            "width" === key ||
                            "height" === key ||
                            "url" === key ||
                            "size" === key ||
                            "type" === key ||
                            "extension" === key
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
                            "size" === key ||
                            "content" === key ||
                            "type" === key ||
                            "extension" === key
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
                            "count" === key ||
                            "type" === key ||
                            "extension" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $po4 = (input: any): any => {
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
                            "target" === key ||
                            "type" === key ||
                            "extension" === key
                        )
                            continue;
                        delete input[key];
                    }
                };
                const $pu0 = (input: any): any =>
                    (() => {
                        if ("directory" === input.type) return $po0(input);
                        if ("jpg" === input.extension) return $po1(input);
                        if ("txt" === input.extension) return $po2(input);
                        if ("zip" === input.extension) return $po3(input);
                        if ("lnk" === input.extension) return $po4(input);
                        $throws({
                            expected:
                                "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile | ArrayRecursiveUnionExplicit.IShortcut)",
                            value: input,
                        });
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
    ArrayRecursiveUnionExplicit.SPOILERS,
);
