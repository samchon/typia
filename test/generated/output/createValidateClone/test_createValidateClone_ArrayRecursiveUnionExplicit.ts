import typia from "../../../../src";
import { _test_validateClone } from "../../../internal/_test_validateClone";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_createValidateClone_ArrayRecursiveUnionExplicit =
    _test_validateClone(
        "ArrayRecursiveUnionExplicit",
        ArrayRecursiveUnionExplicit.generate,
        (
            input: any,
        ): typia.IValidation<typia.Primitive<ArrayRecursiveUnionExplicit>> => {
            const validate = (
                input: any,
            ): typia.IValidation<ArrayRecursiveUnionExplicit> => {
                const __is = (
                    input: any,
                ): input is ArrayRecursiveUnionExplicit => {
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
                const errors = [] as any[];
                const $report = (typia.createValidateClone as any).report(
                    errors,
                );
                if (false === __is(input))
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
                                                        _path +
                                                        "[" +
                                                        _index1 +
                                                        "]",
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
                                                path:
                                                    _path + "[" + _index1 + "]",
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
            const clone = (
                input: ArrayRecursiveUnionExplicit,
            ): typia.Primitive<ArrayRecursiveUnionExplicit> => {
                const $throws = (typia.createValidateClone as any).throws;
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
                const $co0 = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                    path: input.path as any,
                    children: Array.isArray(input.children)
                        ? input.children.map((elem: any) =>
                              "object" === typeof elem && null !== elem
                                  ? $cu0(elem)
                                  : (elem as any),
                          )
                        : (input.children as any),
                    type: input.type as any,
                });
                const $co1 = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                    path: input.path as any,
                    width: input.width as any,
                    height: input.height as any,
                    url: input.url as any,
                    size: input.size as any,
                    type: input.type as any,
                    extension: input.extension as any,
                });
                const $co2 = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                    path: input.path as any,
                    size: input.size as any,
                    content: input.content as any,
                    type: input.type as any,
                    extension: input.extension as any,
                });
                const $co3 = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                    path: input.path as any,
                    size: input.size as any,
                    count: input.count as any,
                    type: input.type as any,
                    extension: input.extension as any,
                });
                const $co4 = (input: any): any => ({
                    id: input.id as any,
                    name: input.name as any,
                    path: input.path as any,
                    target:
                        "object" === typeof input.target &&
                        null !== input.target
                            ? $cu0(input.target)
                            : (input.target as any),
                    type: input.type as any,
                    extension: input.extension as any,
                });
                const $cu0 = (input: any): any =>
                    (() => {
                        if ("directory" === input.type) return $co0(input);
                        if ("jpg" === input.extension) return $co1(input);
                        if ("txt" === input.extension) return $co2(input);
                        if ("zip" === input.extension) return $co3(input);
                        if ("lnk" === input.extension) return $co4(input);
                        $throws({
                            expected:
                                "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile | ArrayRecursiveUnionExplicit.IShortcut)",
                            value: input,
                        });
                    })();
                return Array.isArray(input)
                    ? input.map((elem: any) =>
                          "object" === typeof elem && null !== elem
                              ? $cu0(elem)
                              : (elem as any),
                      )
                    : (input as any);
            };
            const output = validate(input) as any;
            if (output.success) output.data = clone(input);
            return output;
        },
        ArrayRecursiveUnionExplicit.SPOILERS,
    );
