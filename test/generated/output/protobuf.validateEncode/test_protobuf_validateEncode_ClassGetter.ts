import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_protobuf_createValidateEncode_ClassGetter =
    _test_protobuf_validateEncode("ClassGetter")<ClassGetter>(ClassGetter)({
        encode: (input) =>
            ((input: ClassGetter): typia.IValidation<Uint8Array> => {
                const validate = (
                    input: any,
                ): typia.IValidation<ClassGetter> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is ClassGetter => {
                        const $io0 = (input: any): boolean =>
                            "string" === typeof input.id &&
                            "string" === typeof input.name &&
                            (null === input.dead ||
                                "boolean" === typeof input.dead);
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input)) {
                        const $report = (
                            typia.protobuf.validateEncode as any
                        ).report(errors);
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ClassGetter => {
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
                                    "string" === typeof input.name ||
                                        $report(_exceptionable, {
                                            path: _path + ".name",
                                            expected: "string",
                                            value: input.name,
                                        }),
                                    null === input.dead ||
                                        "boolean" === typeof input.dead ||
                                        $report(_exceptionable, {
                                            path: _path + ".dead",
                                            expected: "(boolean | null)",
                                            value: input.dead,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "ClassGetter.Person",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ClassGetter.Person",
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
                const encode = (input: ClassGetter): Uint8Array => {
                    const $Sizer = (typia.protobuf.validateEncode as any).Sizer;
                    const $Writer = (typia.protobuf.validateEncode as any)
                        .Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "id";
                            writer.uint32(10);
                            writer.string(input.id);
                            // property "name";
                            writer.uint32(18);
                            writer.string(input.name);
                            // property "dead";
                            if (null !== input.dead) {
                                writer.uint32(24);
                                writer.bool(input.dead);
                            }
                        };
                        //ClassGetter.Person;
                        $peo0(input);
                        return writer;
                    };
                    const sizer = encoder(new $Sizer());
                    const writer = encoder(new $Writer(sizer));
                    return writer.buffer();
                };
                const output = validate(input) as any;
                if (output.success) output.data = encode(input);
                return output;
            })(input),
        decode: (input: Uint8Array): typia.Resolved<ClassGetter> => {
            const $Reader = (typia.protobuf.createDecode as any).Reader;
            const $pdo0 = (reader: any, length: number = -1): any => {
                length = length < 0 ? reader.size() : reader.index() + length;
                const output = {
                    id: "" as any,
                    name: "" as any,
                    dead: null as any,
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
                            // bool;
                            output.dead = reader.bool();
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
        },
        message:
            'syntax = "proto3";\n\nmessage ClassGetter {\n    message Person {\n        required string id = 1;\n        required string name = 2;\n        optional bool dead = 3;\n    }\n}',
    });
