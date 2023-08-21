import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_protobuf_validateEncode_ClassNonPublic =
    _test_protobuf_validateEncode("ClassNonPublic")<ClassNonPublic>(
        ClassNonPublic,
    )({
        validateEncode: (input) =>
            ((input: ClassNonPublic): typia.IValidation<Uint8Array> => {
                const validate = (
                    input: any,
                ): typia.IValidation<ClassNonPublic> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is ClassNonPublic => {
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            "string" === typeof (input as any).implicit &&
                            "string" === typeof (input as any).shown
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
                        ): input is ClassNonPublic => {
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    "string" === typeof input.implicit ||
                                        $report(_exceptionable, {
                                            path: _path + ".implicit",
                                            expected: "string",
                                            value: input.implicit,
                                        }),
                                    "string" === typeof input.shown ||
                                        $report(_exceptionable, {
                                            path: _path + ".shown",
                                            expected: "string",
                                            value: input.shown,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "ClassNonPublic.Accessor",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ClassNonPublic.Accessor",
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
                const encode = (input: ClassNonPublic): Uint8Array => {
                    const $Sizer = (typia.protobuf.validateEncode as any).Sizer;
                    const $Writer = (typia.protobuf.validateEncode as any)
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
                const output = validate(input) as any;
                if (output.success) output.data = encode(input);
                return output;
            })(input),
        message:
            'syntax = "proto3";\n\nmessage ClassNonPublic {\n    message Accessor {\n        required string implicit = 1;\n        required string shown = 2;\n    }\n}',
    });
