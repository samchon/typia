import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_protobuf_validateDecode_ObjectPrimitive =
    _test_protobuf_validateDecode("ObjectPrimitive")<ObjectPrimitive>(
        ObjectPrimitive,
    )({
        validateDecode: (input) =>
            ((
                input: Uint8Array,
            ): typia.IValidation<typia.Resolved<ObjectPrimitive>> => {
                const validate = (
                    input: any,
                ): typia.IValidation<ObjectPrimitive> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is ObjectPrimitive => {
                        const $io0 = (input: any): boolean =>
                            "string" === typeof input.id &&
                            ("txt" === input.extension ||
                                "md" === input.extension ||
                                "html" === input.extension) &&
                            "string" === typeof input.title &&
                            "string" === typeof input.body &&
                            Array.isArray(input.files) &&
                            input.files.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io1(elem),
                            ) &&
                            "boolean" === typeof input.secret &&
                            "string" === typeof input.created_at;
                        const $io1 = (input: any): boolean =>
                            "string" === typeof input.id &&
                            "string" === typeof input.name &&
                            "string" === typeof input.extension &&
                            "string" === typeof input.url &&
                            "string" === typeof input.created_at;
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.protobuf.validateDecode as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ObjectPrimitive => {
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    "string" === typeof input.id ||
                                        $report(_exceptionable, {
                                            path: _path + ".id",
                                            expected: "string",
                                            value: input.id,
                                        }),
                                    "txt" === input.extension ||
                                        "md" === input.extension ||
                                        "html" === input.extension ||
                                        $report(_exceptionable, {
                                            path: _path + ".extension",
                                            expected: '("html" | "md" | "txt")',
                                            value: input.extension,
                                        }),
                                    "string" === typeof input.title ||
                                        $report(_exceptionable, {
                                            path: _path + ".title",
                                            expected: "string",
                                            value: input.title,
                                        }),
                                    "string" === typeof input.body ||
                                        $report(_exceptionable, {
                                            path: _path + ".body",
                                            expected: "string",
                                            value: input.body,
                                        }),
                                    ((Array.isArray(input.files) ||
                                        $report(_exceptionable, {
                                            path: _path + ".files",
                                            expected:
                                                "Array<ObjectPrimitive.IFile>",
                                            value: input.files,
                                        })) &&
                                        input.files
                                            .map(
                                                (elem: any, _index1: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".files[" +
                                                                    _index1 +
                                                                    "]",
                                                                expected:
                                                                    "ObjectPrimitive.IFile",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo1(
                                                            elem,
                                                            _path +
                                                                ".files[" +
                                                                _index1 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".files[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "ObjectPrimitive.IFile",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".files",
                                            expected:
                                                "Array<ObjectPrimitive.IFile>",
                                            value: input.files,
                                        }),
                                    "boolean" === typeof input.secret ||
                                        $report(_exceptionable, {
                                            path: _path + ".secret",
                                            expected: "boolean",
                                            value: input.secret,
                                        }),
                                    "string" === typeof input.created_at ||
                                        $report(_exceptionable, {
                                            path: _path + ".created_at",
                                            expected: "string",
                                            value: input.created_at,
                                        }),
                                ].every((flag: boolean) => flag);
                            const $vo1 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    "string" === typeof input.id ||
                                        $report(_exceptionable, {
                                            path: _path + ".id",
                                            expected: "string",
                                            value: input.id,
                                        }),
                                    "string" === typeof input.name ||
                                        $report(_exceptionable, {
                                            path: _path + ".name",
                                            expected: "string",
                                            value: input.name,
                                        }),
                                    "string" === typeof input.extension ||
                                        $report(_exceptionable, {
                                            path: _path + ".extension",
                                            expected: "string",
                                            value: input.extension,
                                        }),
                                    "string" === typeof input.url ||
                                        $report(_exceptionable, {
                                            path: _path + ".url",
                                            expected: "string",
                                            value: input.url,
                                        }),
                                    "string" === typeof input.created_at ||
                                        $report(_exceptionable, {
                                            path: _path + ".created_at",
                                            expected: "string",
                                            value: input.created_at,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "ObjectPrimitive.IArticle",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectPrimitive.IArticle",
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
                ): typia.Resolved<ObjectPrimitive> => {
                    const $Reader = (typia.protobuf.validateDecode as any)
                        .Reader;
                    const $pdo0 = (reader: any, length: number = -1): any => {
                        length =
                            length < 0
                                ? reader.size()
                                : reader.index() + length;
                        const output = {
                            id: "" as any,
                            extension: undefined as any,
                            title: "" as any,
                            body: "" as any,
                            files: [] as any,
                            secret: undefined as any,
                            created_at: "" as any,
                        };
                        while (reader.index() < length) {
                            const tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1:
                                    // string;
                                    output.id = reader.string();
                                    break;
                                case 2:
                                    // string;
                                    output.extension = reader.string();
                                    break;
                                case 3:
                                    // string;
                                    output.title = reader.string();
                                    break;
                                case 4:
                                    // string;
                                    output.body = reader.string();
                                    break;
                                case 5:
                                    // type: Array<ObjectPrimitive.IFile>;
                                    output.files.push(
                                        $pdo1(reader, reader.uint32()),
                                    );
                                    break;
                                case 6:
                                    // bool;
                                    output.secret = reader.bool();
                                    break;
                                case 7:
                                    // string;
                                    output.created_at = reader.string();
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
                            length < 0
                                ? reader.size()
                                : reader.index() + length;
                        const output = {
                            id: "" as any,
                            name: "" as any,
                            extension: "" as any,
                            url: "" as any,
                            created_at: "" as any,
                        };
                        while (reader.index() < length) {
                            const tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1:
                                    // string;
                                    output.id = reader.string();
                                    break;
                                case 2:
                                    // string;
                                    output.name = reader.string();
                                    break;
                                case 3:
                                    // string;
                                    output.extension = reader.string();
                                    break;
                                case 4:
                                    // string;
                                    output.url = reader.string();
                                    break;
                                case 5:
                                    // string;
                                    output.created_at = reader.string();
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
                const output = decode(input);
                return validate(output) as any;
            })(input),
        encode: (input: ObjectPrimitive): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "id";
                    writer.uint32(10);
                    writer.string(input.id);
                    // property "extension";
                    writer.uint32(18);
                    writer.string(input.extension);
                    // property "title";
                    writer.uint32(26);
                    writer.string(input.title);
                    // property "body";
                    writer.uint32(34);
                    writer.string(input.body);
                    // property "files";
                    if (0 !== input.files.length) {
                        for (const elem of input.files) {
                            // 5 -> ObjectPrimitive.IFile;
                            writer.uint32(42);
                            writer.fork();
                            $peo1(elem);
                            writer.ldelim();
                        }
                    }
                    // property "secret";
                    writer.uint32(48);
                    writer.bool(input.secret);
                    // property "created_at";
                    writer.uint32(58);
                    writer.string(input.created_at);
                };
                const $peo1 = (input: any): any => {
                    // property "id";
                    writer.uint32(10);
                    writer.string(input.id);
                    // property "name";
                    writer.uint32(18);
                    writer.string(input.name);
                    // property "extension";
                    writer.uint32(26);
                    writer.string(input.extension);
                    // property "url";
                    writer.uint32(34);
                    writer.string(input.url);
                    // property "created_at";
                    writer.uint32(42);
                    writer.string(input.created_at);
                };
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.id &&
                    "string" === typeof input.name &&
                    "string" === typeof input.extension &&
                    "string" === typeof input.url &&
                    "string" === typeof input.created_at;
                //ObjectPrimitive.IArticle;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
