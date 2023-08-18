import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ClassPropertyAssignment } from "../../../structures/ClassPropertyAssignment";

export const test_protobuf_assertEncode_ClassPropertyAssignment =
    _test_protobuf_assertEncode<ClassPropertyAssignment>(
        ClassPropertyAssignment,
    )({
        assertEncode: (input) =>
            ((input: any): Uint8Array => {
                const assert = (input: any): ClassPropertyAssignment => {
                    const __is = (
                        input: any,
                    ): input is ClassPropertyAssignment => {
                        const $io0 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            Number.isFinite(input.id) &&
                            "string" === typeof input.name &&
                            "assignment" === input.note &&
                            false === input.editable &&
                            "boolean" === typeof input.incremental;
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
                        );
                    };
                    if (false === __is(input))
                        ((
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): input is ClassPropertyAssignment => {
                            const $guard = (typia.protobuf.assertEncode as any)
                                .guard;
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
                                ("assignment" === input.note ||
                                    $guard(_exceptionable, {
                                        path: _path + ".note",
                                        expected: '"assignment"',
                                        value: input.note,
                                    })) &&
                                (false === input.editable ||
                                    $guard(_exceptionable, {
                                        path: _path + ".editable",
                                        expected: "false",
                                        value: input.editable,
                                    })) &&
                                ("boolean" === typeof input.incremental ||
                                    $guard(_exceptionable, {
                                        path: _path + ".incremental",
                                        expected: "boolean",
                                        value: input.incremental,
                                    }));
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $guard(true, {
                                        path: _path + "",
                                        expected: "ClassPropertyAssignment",
                                        value: input,
                                    })) &&
                                    $ao0(input, _path + "", true)) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ClassPropertyAssignment",
                                    value: input,
                                })
                            );
                        })(input, "$input", true);
                    return input;
                };
                const encode = (input: ClassPropertyAssignment): Uint8Array => {
                    const $Sizer = (typia.protobuf.assertEncode as any).Sizer;
                    const $Writer = (typia.protobuf.assertEncode as any).Writer;
                    const encoder = (writer: any): any => {
                        const $peo0 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "name";
                            writer.uint32(18);
                            writer.string(input.name);
                            // property "note";
                            writer.uint32(26);
                            writer.string(input.note);
                            // property "editable";
                            writer.uint32(32);
                            writer.bool(input.editable);
                            // property "incremental";
                            writer.uint32(40);
                            writer.bool(input.incremental);
                        };
                        $peo0(input);
                        return writer;
                    };
                    const sizer = encoder(new $Sizer());
                    const writer = encoder(new $Writer(sizer));
                    return writer.buffer();
                };
                return encode(assert(input));
            })(input),
        message:
            'syntax = "proto3";\n\nmessage ClassPropertyAssignment {\n    required double id = 1;\n    required string name = 2;\n    required string note = 3;\n    required bool editable = 4;\n    required bool incremental = 5;\n}',
    });
