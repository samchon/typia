import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ClassNonPublic } from "../../../structures/ClassNonPublic";

export const test_protobuf_validateDecode_ClassNonPublic =
    _test_protobuf_validateDecode("ClassNonPublic")<ClassNonPublic>(
        ClassNonPublic,
    )({
        validateDecode: (
            input: Uint8Array,
        ): typia.IValidation<ClassNonPublic> => {
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
                        typia.protobuf.createValidateDecode as any
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
                            ((("object" === typeof input && null !== input) ||
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
            const decode = (input: Uint8Array): ClassNonPublic => {
                const $Reader = (typia.protobuf.createValidateDecode as any)
                    .Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        implicit: "" as any,
                        shown: "" as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.implicit = reader.string();
                                break;
                            case 2:
                                output.shown = reader.string();
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
        encode: (input: ClassNonPublic): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
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
        },
    });
