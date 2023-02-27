import typia from "../../../../src";
import { _test_validatePrune } from "../../../internal/_test_validatePrune";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_createValidatePrune_ArrayRecursiveUnionExplicit =
    _test_validatePrune(
        "ArrayRecursiveUnionExplicit",
        ArrayRecursiveUnionExplicit.generate,
        (input: any): typia.IValidation<ArrayRecursiveUnionExplicit> => {
            const validate = (
                input: any,
            ): typia.IValidation<ArrayRecursiveUnionExplicit> => {
                const errors = [] as any[];
                const $report = (typia.createValidatePrune as any).report(
                    errors,
                );
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ArrayRecursiveUnionExplicit => {
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.id &&
                                Number.isFinite(input.id)) ||
                                $report(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "number",
                                    value: input.id,
                                }),
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                            "string" === typeof input.path ||
                                $report(_exceptionable, {
                                    path: _path + ".path",
                                    expected: "string",
                                    value: input.path,
                                }),
                            ((Array.isArray(input.children) ||
                                $report(_exceptionable, {
                                    path: _path + ".children",
                                    expected:
                                        "Array<(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)>",
                                    value: input.children,
                                })) &&
                                input.children
                                    .map(
                                        (elem: any, _index2: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".children[" +
                                                        _index2 +
                                                        "]",
                                                    expected:
                                                        "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
                                                    value: elem,
                                                })) &&
                                                $vu0(
                                                    elem,
                                                    _path +
                                                        ".children[" +
                                                        _index2 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".children[" +
                                                    _index2 +
                                                    "]",
                                                expected:
                                                    "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".children",
                                    expected:
                                        "Array<(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)>",
                                    value: input.children,
                                }),
                            "directory" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"directory"',
                                    value: input.type,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.id &&
                                Number.isFinite(input.id)) ||
                                $report(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "number",
                                    value: input.id,
                                }),
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                            "string" === typeof input.path ||
                                $report(_exceptionable, {
                                    path: _path + ".path",
                                    expected: "string",
                                    value: input.path,
                                }),
                            ("number" === typeof input.width &&
                                Number.isFinite(input.width)) ||
                                $report(_exceptionable, {
                                    path: _path + ".width",
                                    expected: "number",
                                    value: input.width,
                                }),
                            ("number" === typeof input.height &&
                                Number.isFinite(input.height)) ||
                                $report(_exceptionable, {
                                    path: _path + ".height",
                                    expected: "number",
                                    value: input.height,
                                }),
                            "string" === typeof input.url ||
                                $report(_exceptionable, {
                                    path: _path + ".url",
                                    expected: "string",
                                    value: input.url,
                                }),
                            ("number" === typeof input.size &&
                                Number.isFinite(input.size)) ||
                                $report(_exceptionable, {
                                    path: _path + ".size",
                                    expected: "number",
                                    value: input.size,
                                }),
                            "file" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"file"',
                                    value: input.type,
                                }),
                            "jpg" === input.extension ||
                                $report(_exceptionable, {
                                    path: _path + ".extension",
                                    expected: '"jpg"',
                                    value: input.extension,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo2 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.id &&
                                Number.isFinite(input.id)) ||
                                $report(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "number",
                                    value: input.id,
                                }),
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                            "string" === typeof input.path ||
                                $report(_exceptionable, {
                                    path: _path + ".path",
                                    expected: "string",
                                    value: input.path,
                                }),
                            ("number" === typeof input.size &&
                                Number.isFinite(input.size)) ||
                                $report(_exceptionable, {
                                    path: _path + ".size",
                                    expected: "number",
                                    value: input.size,
                                }),
                            "string" === typeof input.content ||
                                $report(_exceptionable, {
                                    path: _path + ".content",
                                    expected: "string",
                                    value: input.content,
                                }),
                            "file" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"file"',
                                    value: input.type,
                                }),
                            "txt" === input.extension ||
                                $report(_exceptionable, {
                                    path: _path + ".extension",
                                    expected: '"txt"',
                                    value: input.extension,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo3 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.id &&
                                Number.isFinite(input.id)) ||
                                $report(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "number",
                                    value: input.id,
                                }),
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                            "string" === typeof input.path ||
                                $report(_exceptionable, {
                                    path: _path + ".path",
                                    expected: "string",
                                    value: input.path,
                                }),
                            ("number" === typeof input.size &&
                                Number.isFinite(input.size)) ||
                                $report(_exceptionable, {
                                    path: _path + ".size",
                                    expected: "number",
                                    value: input.size,
                                }),
                            ("number" === typeof input.count &&
                                Number.isFinite(input.count)) ||
                                $report(_exceptionable, {
                                    path: _path + ".count",
                                    expected: "number",
                                    value: input.count,
                                }),
                            "file" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"file"',
                                    value: input.type,
                                }),
                            "zip" === input.extension ||
                                $report(_exceptionable, {
                                    path: _path + ".extension",
                                    expected: '"zip"',
                                    value: input.extension,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vo4 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ("number" === typeof input.id &&
                                Number.isFinite(input.id)) ||
                                $report(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "number",
                                    value: input.id,
                                }),
                            "string" === typeof input.name ||
                                $report(_exceptionable, {
                                    path: _path + ".name",
                                    expected: "string",
                                    value: input.name,
                                }),
                            "string" === typeof input.path ||
                                $report(_exceptionable, {
                                    path: _path + ".path",
                                    expected: "string",
                                    value: input.path,
                                }),
                            ((("object" === typeof input.target &&
                                null !== input.target) ||
                                $report(_exceptionable, {
                                    path: _path + ".target",
                                    expected:
                                        "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
                                    value: input.target,
                                })) &&
                                $vu0(
                                    input.target,
                                    _path + ".target",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".target",
                                    expected:
                                        "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
                                    value: input.target,
                                }),
                            "file" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"file"',
                                    value: input.type,
                                }),
                            "lnk" === input.extension ||
                                $report(_exceptionable, {
                                    path: _path + ".extension",
                                    expected: '"lnk"',
                                    value: input.extension,
                                }),
                        ].every((flag: boolean) => flag);
                    const $vu0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("directory" === input.type)
                                return $vo0(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("jpg" === input.extension)
                                return $vo1(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("txt" === input.extension)
                                return $vo2(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("zip" === input.extension)
                                return $vo3(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("lnk" === input.extension)
                                return $vo4(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return $report(_exceptionable, {
                                path: _path,
                                expected:
                                    "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile | ArrayRecursiveUnionExplicit.IShortcut)",
                                value: input,
                            });
                        })();
                    return (
                        ((Array.isArray(input) ||
                            $report(true, {
                                path: _path + "",
                                expected:
                                    "Array<(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)>",
                                value: input,
                            })) &&
                            input
                                .map(
                                    (elem: any, _index1: number) =>
                                        ((("object" === typeof elem &&
                                            null !== elem) ||
                                            $report(true, {
                                                path:
                                                    _path + "[" + _index1 + "]",
                                                expected:
                                                    "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
                                                value: elem,
                                            })) &&
                                            $vu0(
                                                elem,
                                                _path + "[" + _index1 + "]",
                                                true,
                                            )) ||
                                        $report(true, {
                                            path: _path + "[" + _index1 + "]",
                                            expected:
                                                "(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)",
                                            value: elem,
                                        }),
                                )
                                .every((flag: boolean) => flag)) ||
                        $report(true, {
                            path: _path + "",
                            expected:
                                "Array<(Resolve<ArrayRecursiveUnionExplicit.IDirectory> | Resolve<ArrayRecursiveUnionExplicit.IImageFile> | Resolve<ArrayRecursiveUnionExplicit.IShortcut> | Resolve<ArrayRecursiveUnionExplicit.ITextFile> | Resolve<ArrayRecursiveUnionExplicit.IZipFile>)>",
                            value: input,
                        })
                    );
                })(input, "$input", true);
                const success = 0 === errors.length;
                return {
                    success,
                    errors,
                    data: success ? input : undefined,
                } as any;
            };
            const prune = (input: ArrayRecursiveUnionExplicit): void => {
                const $throws = (typia.createValidatePrune as any).throws;
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
            const output = validate(input);
            if (output.success) prune(input);
            return output;
        },
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
