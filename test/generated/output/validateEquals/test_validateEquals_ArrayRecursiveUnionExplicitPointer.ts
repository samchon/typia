import typia from "../../../../src";
import { _test_validateEquals } from "../../../internal/_test_validateEquals";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_validateEquals_ArrayRecursiveUnionExplicitPointer =
    _test_validateEquals<ArrayRecursiveUnionExplicitPointer>(
        ArrayRecursiveUnionExplicitPointer,
    )((input) =>
        ((
            input: any,
        ): typia.IValidation<ArrayRecursiveUnionExplicitPointer> => {
            const errors = [] as any[];
            const __is = (
                input: any,
                _exceptionable: boolean = true,
            ): input is ArrayRecursiveUnionExplicitPointer => {
                const $io0 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    Array.isArray(input.value) &&
                    input.value.every(
                        (elem: any, _index1: number) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem, true && _exceptionable),
                    ) &&
                    (1 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (["value"].some((prop: any) => key === prop))
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io1 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $iu0(input.value, true && _exceptionable) &&
                    (1 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (["value"].some((prop: any) => key === prop))
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
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any, _index2: number) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem, true && _exceptionable),
                    ) &&
                    "directory" === input.type &&
                    (5 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                ["id", "name", "path", "children", "type"].some(
                                    (prop: any) => key === prop,
                                )
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
                    "number" === typeof input.width &&
                    Number.isFinite(input.width) &&
                    "number" === typeof input.height &&
                    Number.isFinite(input.height) &&
                    "string" === typeof input.url &&
                    "number" === typeof input.size &&
                    Number.isFinite(input.size) &&
                    "file" === input.type &&
                    "jpg" === input.extension &&
                    (9 === Object.keys(input).length ||
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
                                    "type",
                                    "extension",
                                ].some((prop: any) => key === prop)
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
                    "string" === typeof input.content &&
                    "file" === input.type &&
                    "txt" === input.extension &&
                    (7 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                [
                                    "id",
                                    "name",
                                    "path",
                                    "size",
                                    "content",
                                    "type",
                                    "extension",
                                ].some((prop: any) => key === prop)
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
                    "number" === typeof input.size &&
                    Number.isFinite(input.size) &&
                    "number" === typeof input.count &&
                    Number.isFinite(input.count) &&
                    "file" === input.type &&
                    "zip" === input.extension &&
                    (7 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                [
                                    "id",
                                    "name",
                                    "path",
                                    "size",
                                    "count",
                                    "type",
                                    "extension",
                                ].some((prop: any) => key === prop)
                            )
                                return true;
                            const value = input[key];
                            if (undefined === value) return true;
                            return false;
                        }));
                const $io6 = (
                    input: any,
                    _exceptionable: boolean = true,
                ): boolean =>
                    "number" === typeof input.id &&
                    Number.isFinite(input.id) &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "object" === typeof input.target &&
                    null !== input.target &&
                    $io1(input.target, true && _exceptionable) &&
                    "file" === input.type &&
                    "lnk" === input.extension &&
                    (6 === Object.keys(input).length ||
                        Object.keys(input).every((key: any) => {
                            if (
                                [
                                    "id",
                                    "name",
                                    "path",
                                    "target",
                                    "type",
                                    "extension",
                                ].some((prop: any) => key === prop)
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
                        if ("directory" === input.type)
                            return $io2(input, true && _exceptionable);
                        if ("jpg" === input.extension)
                            return $io3(input, true && _exceptionable);
                        if ("txt" === input.extension)
                            return $io4(input, true && _exceptionable);
                        if ("zip" === input.extension)
                            return $io5(input, true && _exceptionable);
                        if ("lnk" === input.extension)
                            return $io6(input, true && _exceptionable);
                        return false;
                    })();
                return (
                    "object" === typeof input &&
                    null !== input &&
                    $io0(input, true)
                );
            };
            if (false === __is(input)) {
                const $report = (typia.validateEquals as any).report(errors);
                ((
                    input: any,
                    _path: string,
                    _exceptionable: boolean = true,
                ): input is ArrayRecursiveUnionExplicitPointer => {
                    const $join = (typia.validateEquals as any).join;
                    const $vo0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((Array.isArray(input.value) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "Array<ArrayRecursiveUnionExplicitPointer.IBucket>",
                                    value: input.value,
                                })) &&
                                input.value
                                    .map(
                                        (elem: any, _index1: number) =>
                                            ((("object" === typeof elem &&
                                                null !== elem) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "ArrayRecursiveUnionExplicitPointer.IBucket",
                                                    value: elem,
                                                })) &&
                                                $vo1(
                                                    elem,
                                                    _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    true && _exceptionable,
                                                )) ||
                                            $report(_exceptionable, {
                                                path:
                                                    _path +
                                                    ".value[" +
                                                    _index1 +
                                                    "]",
                                                expected:
                                                    "ArrayRecursiveUnionExplicitPointer.IBucket",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "Array<ArrayRecursiveUnionExplicitPointer.IBucket>",
                                    value: input.value,
                                }),
                            1 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            ["value"].some(
                                                (prop: any) => key === prop,
                                            )
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
                        ].every((flag: boolean) => flag);
                    const $vo1 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): boolean =>
                        [
                            ((("object" === typeof input.value &&
                                null !== input.value) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "(ArrayRecursiveUnionExplicitPointer.IDirectory | ArrayRecursiveUnionExplicitPointer.IImageFile | ArrayRecursiveUnionExplicitPointer.IShortcut | ArrayRecursiveUnionExplicitPointer.ITextFile | ArrayRecursiveUnionExplicitPointer.IZipFile)",
                                    value: input.value,
                                })) &&
                                $vu0(
                                    input.value,
                                    _path + ".value",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".value",
                                    expected:
                                        "(ArrayRecursiveUnionExplicitPointer.IDirectory | ArrayRecursiveUnionExplicitPointer.IImageFile | ArrayRecursiveUnionExplicitPointer.IShortcut | ArrayRecursiveUnionExplicitPointer.ITextFile | ArrayRecursiveUnionExplicitPointer.IZipFile)",
                                    value: input.value,
                                }),
                            1 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            ["value"].some(
                                                (prop: any) => key === prop,
                                            )
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
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
                            ((Array.isArray(input.children) ||
                                $report(_exceptionable, {
                                    path: _path + ".children",
                                    expected:
                                        "Array<ArrayRecursiveUnionExplicitPointer.IBucket>.o1",
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
                                                        "ArrayRecursiveUnionExplicitPointer.IBucket",
                                                    value: elem,
                                                })) &&
                                                $vo1(
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
                                                    "ArrayRecursiveUnionExplicitPointer.IBucket",
                                                value: elem,
                                            }),
                                    )
                                    .every((flag: boolean) => flag)) ||
                                $report(_exceptionable, {
                                    path: _path + ".children",
                                    expected:
                                        "Array<ArrayRecursiveUnionExplicitPointer.IBucket>.o1",
                                    value: input.children,
                                }),
                            "directory" === input.type ||
                                $report(_exceptionable, {
                                    path: _path + ".type",
                                    expected: '"directory"',
                                    value: input.type,
                                }),
                            5 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            [
                                                "id",
                                                "name",
                                                "path",
                                                "children",
                                                "type",
                                            ].some((prop: any) => key === prop)
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
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
                            9 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
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
                                            ].some((prop: any) => key === prop)
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
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
                            7 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            [
                                                "id",
                                                "name",
                                                "path",
                                                "size",
                                                "content",
                                                "type",
                                                "extension",
                                            ].some((prop: any) => key === prop)
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
                        ].every((flag: boolean) => flag);
                    const $vo5 = (
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
                            7 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            [
                                                "id",
                                                "name",
                                                "path",
                                                "size",
                                                "count",
                                                "type",
                                                "extension",
                                            ].some((prop: any) => key === prop)
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
                        ].every((flag: boolean) => flag);
                    const $vo6 = (
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
                                        "ArrayRecursiveUnionExplicitPointer.IBucket",
                                    value: input.target,
                                })) &&
                                $vo1(
                                    input.target,
                                    _path + ".target",
                                    true && _exceptionable,
                                )) ||
                                $report(_exceptionable, {
                                    path: _path + ".target",
                                    expected:
                                        "ArrayRecursiveUnionExplicitPointer.IBucket",
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
                            6 === Object.keys(input).length ||
                                false === _exceptionable ||
                                Object.keys(input)
                                    .map((key: any) => {
                                        if (
                                            [
                                                "id",
                                                "name",
                                                "path",
                                                "target",
                                                "type",
                                                "extension",
                                            ].some((prop: any) => key === prop)
                                        )
                                            return true;
                                        const value = input[key];
                                        if (undefined === value) return true;
                                        return $report(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "undefined",
                                            value: value,
                                        });
                                    })
                                    .every((flag: boolean) => flag),
                        ].every((flag: boolean) => flag);
                    const $vu0 = (
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): any =>
                        (() => {
                            if ("directory" === input.type)
                                return $vo2(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("jpg" === input.extension)
                                return $vo3(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("txt" === input.extension)
                                return $vo4(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("zip" === input.extension)
                                return $vo5(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            if ("lnk" === input.extension)
                                return $vo6(
                                    input,
                                    _path,
                                    true && _exceptionable,
                                );
                            return $report(_exceptionable, {
                                path: _path,
                                expected:
                                    "(ArrayRecursiveUnionExplicitPointer.IDirectory | ArrayRecursiveUnionExplicitPointer.IImageFile | ArrayRecursiveUnionExplicitPointer.ITextFile | ArrayRecursiveUnionExplicitPointer.IZipFile | ArrayRecursiveUnionExplicitPointer.IShortcut)",
                                value: input,
                            });
                        })();
                    return (
                        ((("object" === typeof input && null !== input) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ArrayRecursiveUnionExplicitPointer",
                                value: input,
                            })) &&
                            $vo0(input, _path + "", true)) ||
                        $report(true, {
                            path: _path + "",
                            expected: "ArrayRecursiveUnionExplicitPointer",
                            value: input,
                        })
                    );
                })(input, "$input", true);
            }
            const success = 0 === errors.length;
            return {
                success,
                errors,
                data: success ? input : undefined,
            } as any;
        })(input),
    );
