import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_validateDecode_ArrayRecursiveUnionExplicitPointer =
    _test_protobuf_validateDecode(
        "ArrayRecursiveUnionExplicitPointer",
    )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
        validateDecode: (
            input: Uint8Array,
        ): typia.IValidation<ArrayRecursiveUnionExplicitPointer> => {
            const validate = (
                input: any,
            ): typia.IValidation<ArrayRecursiveUnionExplicitPointer> => {
                const errors = [] as any[];
                const __is = (
                    input: any,
                ): input is ArrayRecursiveUnionExplicitPointer => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $iu0(input.value);
                    const $io2 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        Array.isArray(input.children) &&
                        input.children.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        ) &&
                        "directory" === input.type;
                    const $io3 = (input: any): boolean =>
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
                    const $io4 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "number" === typeof input.size &&
                        Number.isFinite(input.size) &&
                        "string" === typeof input.content &&
                        "file" === input.type &&
                        "txt" === input.extension;
                    const $io5 = (input: any): boolean =>
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
                    const $io6 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "string" === typeof input.path &&
                        "object" === typeof input.target &&
                        null !== input.target &&
                        $io1(input.target) &&
                        "file" === input.type &&
                        "lnk" === input.extension;
                    const $iu0 = (input: any): any =>
                        (() => {
                            if ("directory" === input.type) return $io2(input);
                            else if ("jpg" === input.extension)
                                return $io3(input);
                            else if ("txt" === input.extension)
                                return $io4(input);
                            else if ("zip" === input.extension)
                                return $io5(input);
                            else if ("lnk" === input.extension)
                                return $io6(input);
                            else return false;
                        })();
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                if (false === __is(input)) {
                    const $report = (
                        typia.protobuf.createValidateDecode as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ArrayRecursiveUnionExplicitPointer => {
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
                                else if ("jpg" === input.extension)
                                    return $vo3(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else if ("txt" === input.extension)
                                    return $vo4(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else if ("zip" === input.extension)
                                    return $vo5(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else if ("lnk" === input.extension)
                                    return $vo6(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else
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
                                    expected:
                                        "ArrayRecursiveUnionExplicitPointer",
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
            };
            const decode = (
                input: Uint8Array,
            ): ArrayRecursiveUnionExplicitPointer => {
                const $Reader = (typia.protobuf.createValidateDecode as any)
                    .Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        value: [] as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.value.push(
                                    $pdo1(reader, reader.uint32()),
                                );
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo1 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        value: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.value = $pdo2(reader, reader.uint32());
                                break;
                            case 2:
                                output.value = $pdo3(reader, reader.uint32());
                                break;
                            case 3:
                                output.value = $pdo4(reader, reader.uint32());
                                break;
                            case 4:
                                output.value = $pdo5(reader, reader.uint32());
                                break;
                            case 5:
                                output.value = $pdo6(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo2 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        id: undefined as any,
                        name: "" as any,
                        path: "" as any,
                        children: [] as any,
                        type: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.id = reader.double();
                                break;
                            case 2:
                                output.name = reader.string();
                                break;
                            case 3:
                                output.path = reader.string();
                                break;
                            case 4:
                                output.children.push(
                                    $pdo1(reader, reader.uint32()),
                                );
                                break;
                            case 5:
                                output.type = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo3 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        id: undefined as any,
                        name: "" as any,
                        path: "" as any,
                        width: undefined as any,
                        height: undefined as any,
                        url: "" as any,
                        size: undefined as any,
                        type: undefined as any,
                        extension: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.id = reader.double();
                                break;
                            case 2:
                                output.name = reader.string();
                                break;
                            case 3:
                                output.path = reader.string();
                                break;
                            case 4:
                                output.width = reader.double();
                                break;
                            case 5:
                                output.height = reader.double();
                                break;
                            case 6:
                                output.url = reader.string();
                                break;
                            case 7:
                                output.size = reader.double();
                                break;
                            case 8:
                                output.type = reader.string();
                                break;
                            case 9:
                                output.extension = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo4 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        id: undefined as any,
                        name: "" as any,
                        path: "" as any,
                        size: undefined as any,
                        content: "" as any,
                        type: undefined as any,
                        extension: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.id = reader.double();
                                break;
                            case 2:
                                output.name = reader.string();
                                break;
                            case 3:
                                output.path = reader.string();
                                break;
                            case 4:
                                output.size = reader.double();
                                break;
                            case 5:
                                output.content = reader.string();
                                break;
                            case 6:
                                output.type = reader.string();
                                break;
                            case 7:
                                output.extension = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo5 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        id: undefined as any,
                        name: "" as any,
                        path: "" as any,
                        size: undefined as any,
                        count: undefined as any,
                        type: undefined as any,
                        extension: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.id = reader.double();
                                break;
                            case 2:
                                output.name = reader.string();
                                break;
                            case 3:
                                output.path = reader.string();
                                break;
                            case 4:
                                output.size = reader.double();
                                break;
                            case 5:
                                output.count = reader.double();
                                break;
                            case 6:
                                output.type = reader.string();
                                break;
                            case 7:
                                output.extension = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo6 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        id: undefined as any,
                        name: "" as any,
                        path: "" as any,
                        target: undefined as any,
                        type: undefined as any,
                        extension: undefined as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.id = reader.double();
                                break;
                            case 2:
                                output.name = reader.string();
                                break;
                            case 3:
                                output.path = reader.string();
                                break;
                            case 4:
                                output.target = $pdo1(reader, reader.uint32());
                                break;
                            case 5:
                                output.type = reader.string();
                                break;
                            case 6:
                                output.extension = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const reader = new $Reader(input);
                return $pdo0(reader);
            };
            const output = validate(input) as any;
            if (output.success) output.data = decode(input);
            return output;
        },
        encode: (input: ArrayRecursiveUnionExplicitPointer): Uint8Array => {
            const $throws = (typia.protobuf.createEncode as any).throws;
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "value";
                    if (0 !== input.value.length) {
                        for (const elem of input.value) {
                            writer.uint32(10);
                            writer.fork();
                            $peo1(elem);
                            writer.ldelim();
                        }
                    }
                };
                const $peo1 = (input: any): any => {
                    // property "value";
                    if ("directory" === input.value.type)
                        return (() => {
                            writer.uint32(10);
                            writer.fork();
                            $peo2(input.value);
                            writer.ldelim();
                        })();
                    else if ("jpg" === input.value.extension)
                        return (() => {
                            writer.uint32(10);
                            writer.fork();
                            $peo3(input.value);
                            writer.ldelim();
                        })();
                    else if ("txt" === input.value.extension)
                        return (() => {
                            writer.uint32(10);
                            writer.fork();
                            $peo4(input.value);
                            writer.ldelim();
                        })();
                    else if ("zip" === input.value.extension)
                        return (() => {
                            writer.uint32(10);
                            writer.fork();
                            $peo5(input.value);
                            writer.ldelim();
                        })();
                    else if ("lnk" === input.value.extension)
                        return (() => {
                            writer.uint32(10);
                            writer.fork();
                            $peo6(input.value);
                            writer.ldelim();
                        })();
                    else
                        $throws({
                            expected:
                                "(ArrayRecursiveUnionExplicitPointer.IDirectory | ArrayRecursiveUnionExplicitPointer.IImageFile | ArrayRecursiveUnionExplicitPointer.ITextFile | ArrayRecursiveUnionExplicitPointer.IZipFile | ArrayRecursiveUnionExplicitPointer.IShortcut)",
                            value: input.value,
                        });
                };
                const $peo2 = (input: any): any => {
                    // property "id";
                    writer.uint32(9);
                    writer.double(input.id);
                    // property "name";
                    writer.uint32(18);
                    writer.string(input.name);
                    // property "path";
                    writer.uint32(26);
                    writer.string(input.path);
                    // property "children";
                    if (0 !== input.children.length) {
                        for (const elem of input.children) {
                            writer.uint32(34);
                            writer.fork();
                            $peo1(elem);
                            writer.ldelim();
                        }
                    }
                    // property "type";
                    writer.uint32(42);
                    writer.string(input.type);
                };
                const $peo3 = (input: any): any => {
                    // property "id";
                    writer.uint32(9);
                    writer.double(input.id);
                    // property "name";
                    writer.uint32(18);
                    writer.string(input.name);
                    // property "path";
                    writer.uint32(26);
                    writer.string(input.path);
                    // property "width";
                    writer.uint32(33);
                    writer.double(input.width);
                    // property "height";
                    writer.uint32(41);
                    writer.double(input.height);
                    // property "url";
                    writer.uint32(50);
                    writer.string(input.url);
                    // property "size";
                    writer.uint32(57);
                    writer.double(input.size);
                    // property "type";
                    writer.uint32(66);
                    writer.string(input.type);
                    // property "extension";
                    writer.uint32(74);
                    writer.string(input.extension);
                };
                const $peo4 = (input: any): any => {
                    // property "id";
                    writer.uint32(9);
                    writer.double(input.id);
                    // property "name";
                    writer.uint32(18);
                    writer.string(input.name);
                    // property "path";
                    writer.uint32(26);
                    writer.string(input.path);
                    // property "size";
                    writer.uint32(33);
                    writer.double(input.size);
                    // property "content";
                    writer.uint32(42);
                    writer.string(input.content);
                    // property "type";
                    writer.uint32(50);
                    writer.string(input.type);
                    // property "extension";
                    writer.uint32(58);
                    writer.string(input.extension);
                };
                const $peo5 = (input: any): any => {
                    // property "id";
                    writer.uint32(9);
                    writer.double(input.id);
                    // property "name";
                    writer.uint32(18);
                    writer.string(input.name);
                    // property "path";
                    writer.uint32(26);
                    writer.string(input.path);
                    // property "size";
                    writer.uint32(33);
                    writer.double(input.size);
                    // property "count";
                    writer.uint32(41);
                    writer.double(input.count);
                    // property "type";
                    writer.uint32(50);
                    writer.string(input.type);
                    // property "extension";
                    writer.uint32(58);
                    writer.string(input.extension);
                };
                const $peo6 = (input: any): any => {
                    // property "id";
                    writer.uint32(9);
                    writer.double(input.id);
                    // property "name";
                    writer.uint32(18);
                    writer.string(input.name);
                    // property "path";
                    writer.uint32(26);
                    writer.string(input.path);
                    // property "target";
                    writer.uint32(34);
                    writer.fork();
                    $peo1(input.target);
                    writer.ldelim();
                    // property "type";
                    writer.uint32(42);
                    writer.string(input.type);
                    // property "extension";
                    writer.uint32(50);
                    writer.string(input.extension);
                };
                const $io1 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    $iu0(input.value);
                const $io2 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io1(elem),
                    ) &&
                    "directory" === input.type;
                const $io3 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.width &&
                    "number" === typeof input.height &&
                    "string" === typeof input.url &&
                    "number" === typeof input.size &&
                    "file" === input.type &&
                    "jpg" === input.extension;
                const $io4 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    "string" === typeof input.content &&
                    "file" === input.type &&
                    "txt" === input.extension;
                const $io5 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "number" === typeof input.size &&
                    "number" === typeof input.count &&
                    "file" === input.type &&
                    "zip" === input.extension;
                const $io6 = (input: any): boolean =>
                    "number" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.path &&
                    "object" === typeof input.target &&
                    null !== input.target &&
                    $io1(input.target) &&
                    "file" === input.type &&
                    "lnk" === input.extension;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("directory" === input.type) return $io2(input);
                        else if ("jpg" === input.extension) return $io3(input);
                        else if ("txt" === input.extension) return $io4(input);
                        else if ("zip" === input.extension) return $io5(input);
                        else if ("lnk" === input.extension) return $io6(input);
                        else return false;
                    })();
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
