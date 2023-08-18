import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { DynamicSimple } from "../../../structures/DynamicSimple";

export const test_protobuf_isEncode_DynamicSimple =
    _test_protobuf_isEncode<DynamicSimple>(DynamicSimple)({
        isEncode: (input: DynamicSimple): Uint8Array | null => {
            const is = (input: any): input is DynamicSimple => {
                const $join = (typia.protobuf.createIsEncode as any).join;
                const $io0 = (input: any): boolean =>
                    "object" === typeof input.value &&
                    null !== input.value &&
                    false === Array.isArray(input.value) &&
                    $io1(input.value);
                const $io1 = (input: any): boolean =>
                    Object.keys(input).every((key: any) => {
                        const value = input[key];
                        if (undefined === value) return true;
                        if (RegExp(/(.*)/).test(key))
                            return (
                                "number" === typeof value &&
                                Number.isFinite(value)
                            );
                        return true;
                    });
                return (
                    "object" === typeof input && null !== input && $io0(input)
                );
            };
            const encode = (input: DynamicSimple): Uint8Array => {
                const $join = (typia.protobuf.createIsEncode as any).join;
                const $Sizer = (typia.protobuf.createIsEncode as any).Sizer;
                const $Writer = (typia.protobuf.createIsEncode as any).Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "value";
                        for (const [key, value] of Object.entries(
                            input.value,
                        )) {
                            writer.uint32(10);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(17);
                            writer.double(value);
                            writer.ldelim();
                        }
                    };
                    const $io1 = (input: any): boolean =>
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return "number" === typeof value;
                            return true;
                        });
                    $peo0(input);
                    return writer;
                };
                const sizer = encoder(new $Sizer());
                const writer = encoder(new $Writer(sizer));
                return writer.buffer();
            };
            return is(input) ? encode(input) : null;
        },
        message:
            'syntax = "proto3";\n\nmessage DynamicSimple {\n    map<string, double> value = 1;\n}',
    });
