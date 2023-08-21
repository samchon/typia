import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_protobuf_assertEncode_ClassNonPublic =
    _test_protobuf_assertEncode("ClassNonPublic")<ClassNonPublic>(
        ClassNonPublic,
    )({
        assertEncode: (input: any): Uint8Array => {
            const assert = (input: any): ClassNonPublic => {
                const __is = (input: any): input is ClassNonPublic => {
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        "string" === typeof (input as any).implicit &&
                        "string" === typeof (input as any).shown
                    );
                };
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ClassNonPublic => {
                        const $guard = (
                            typia.protobuf.createAssertEncode as any
                        ).guard;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("string" === typeof input.implicit ||
                                $guard(_exceptionable, {
                                    path: _path + ".implicit",
                                    expected: "string",
                                    value: input.implicit,
                                })) &&
                            ("string" === typeof input.shown ||
                                $guard(_exceptionable, {
                                    path: _path + ".shown",
                                    expected: "string",
                                    value: input.shown,
                                }));
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "ClassNonPublic.Accessor",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "ClassNonPublic.Accessor",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const encode = (input: ClassNonPublic): Uint8Array => {
                const $Sizer = (typia.protobuf.createAssertEncode as any).Sizer;
                const $Writer = (typia.protobuf.createAssertEncode as any)
                    .Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "implicit";
                        writer.uint32(10);
                        writer.string(input.implicit);
                        // property "shown";
                        writer.uint32(18);
                        writer.string(input.shown);
                    };
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            };
            return encode(assert(input));
        },
        message:
            'syntax = "proto3";\n\nmessage ClassNonPublic {\n    message Accessor {\n        required string implicit = 1;\n        required string shown = 2;\n    }\n}',
    });
