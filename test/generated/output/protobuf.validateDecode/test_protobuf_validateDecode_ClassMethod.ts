import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_protobuf_validateDecode_ClassMethod =
    _test_protobuf_validateDecode("ClassMethod")<ClassMethod>(ClassMethod)({
        validateDecode: (input) =>
            ((input: Uint8Array): typia.IValidation<ClassMethod> => {
                const validate = (
                    input: any,
                ): typia.IValidation<ClassMethod> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is ClassMethod => {
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            "string" === typeof (input as any).name &&
                            "number" === typeof (input as any).age &&
                            Number.isFinite((input as any).age)
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
                        ): input is ClassMethod => {
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    "string" === typeof input.name ||
                                        $report(_exceptionable, {
                                            path: _path + ".name",
                                            expected: "string",
                                            value: input.name,
                                        }),
                                    ("number" === typeof input.age &&
                                        Number.isFinite(input.age)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".age",
                                            expected: "number",
                                            value: input.age,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "ClassMethod.Animal",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ClassMethod.Animal",
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
                const decode = (input: Uint8Array): ClassMethod => {
                    const $Reader = (typia.protobuf.validateDecode as any)
                        .Reader;
                    const $pdo0 = (reader: any, length: number = -1): any => {
                        length =
                            length < 0
                                ? reader.size()
                                : reader.index() + length;
                        const output = {
                            name: "" as any,
                            age: undefined as any,
                        };
                        while (reader.index() < length) {
                            const tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1:
                                    output.name = reader.string();
                                    break;
                                case 2:
                                    output.age = reader.double();
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
        encode: (input: ClassMethod): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "name";
                    writer.uint32(10);
                    writer.string(input.name);
                    // property "age";
                    writer.uint32(17);
                    writer.double(input.age);
                };
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
