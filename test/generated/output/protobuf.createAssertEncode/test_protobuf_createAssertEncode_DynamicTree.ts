import typia from "../../../../src";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_protobuf_assertEncode_DynamicTree =
    _test_protobuf_assertEncode("DynamicTree")<DynamicTree>(DynamicTree)({
        assertEncode: (input: any): Uint8Array => {
            const assert = (input: any): DynamicTree => {
                const __is = (input: any): input is DynamicTree => {
                    const $join = (typia.protobuf.createAssertEncode as any)
                        .join;
                    const $io0 = (input: any): boolean =>
                        "string" === typeof input.id &&
                        "number" === typeof input.sequence &&
                        Number.isFinite(input.sequence) &&
                        "object" === typeof input.children &&
                        null !== input.children &&
                        false === Array.isArray(input.children) &&
                        $io1(input.children);
                    const $io1 = (input: any): boolean =>
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    "object" === typeof value &&
                                    null !== value &&
                                    $io0(value)
                                );
                            return true;
                        });
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
                    ): input is DynamicTree => {
                        const $guard = (
                            typia.protobuf.createAssertEncode as any
                        ).guard;
                        const $join = (typia.protobuf.createAssertEncode as any)
                            .join;
                        const $ao0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            ("string" === typeof input.id ||
                                $guard(_exceptionable, {
                                    path: _path + ".id",
                                    expected: "string",
                                    value: input.id,
                                })) &&
                            (("number" === typeof input.sequence &&
                                Number.isFinite(input.sequence)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".sequence",
                                    expected: "number",
                                    value: input.sequence,
                                })) &&
                            (((("object" === typeof input.children &&
                                null !== input.children &&
                                false === Array.isArray(input.children)) ||
                                $guard(_exceptionable, {
                                    path: _path + ".children",
                                    expected: "Record<string, DynamicTree>",
                                    value: input.children,
                                })) &&
                                $ao1(
                                    input.children,
                                    _path + ".children",
                                    true && _exceptionable,
                                )) ||
                                $guard(_exceptionable, {
                                    path: _path + ".children",
                                    expected: "Record<string, DynamicTree>",
                                    value: input.children,
                                }));
                        const $ao1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            false === _exceptionable ||
                            Object.keys(input).every((key: any) => {
                                const value = input[key];
                                if (undefined === value) return true;
                                if (RegExp(/(.*)/).test(key))
                                    return (
                                        ((("object" === typeof value &&
                                            null !== value) ||
                                            $guard(_exceptionable, {
                                                path: _path + $join(key),
                                                expected: "DynamicTree",
                                                value: value,
                                            })) &&
                                            $ao0(
                                                value,
                                                _path + $join(key),
                                                true && _exceptionable,
                                            )) ||
                                        $guard(_exceptionable, {
                                            path: _path + $join(key),
                                            expected: "DynamicTree",
                                            value: value,
                                        })
                                    );
                                return true;
                            });
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $guard(true, {
                                    path: _path + "",
                                    expected: "DynamicTree",
                                    value: input,
                                })) &&
                                $ao0(input, _path + "", true)) ||
                            $guard(true, {
                                path: _path + "",
                                expected: "DynamicTree",
                                value: input,
                            })
                        );
                    })(input, "$input", true);
                return input;
            };
            const encode = (input: DynamicTree): Uint8Array => {
                const $join = (typia.protobuf.createAssertEncode as any).join;
                const $Sizer = (typia.protobuf.createAssertEncode as any).Sizer;
                const $Writer = (typia.protobuf.createAssertEncode as any)
                    .Writer;
                const encoder = (writer: any): any => {
                    const $peo0 = (input: any): any => {
                        // property "id";
                        writer.uint32(10);
                        writer.string(input.id);
                        // property "sequence";
                        writer.uint32(17);
                        writer.double(input.sequence);
                        // property "children";
                        for (const [key, value] of Object.entries(
                            input.children,
                        )) {
                            writer.uint32(26);
                            writer.fork();
                            writer.uint32(10);
                            writer.string(key);
                            writer.uint32(18);
                            writer.fork();
                            $peo0(value);
                            writer.ldelim();
                            writer.ldelim();
                        }
                    };
                    const $io0 = (input: any): boolean =>
                        "string" === typeof input.id &&
                        "number" === typeof input.sequence &&
                        "object" === typeof input.children &&
                        null !== input.children &&
                        false === Array.isArray(input.children) &&
                        $io1(input.children);
                    const $io1 = (input: any): boolean =>
                        Object.keys(input).every((key: any) => {
                            const value = input[key];
                            if (undefined === value) return true;
                            if (RegExp(/(.*)/).test(key))
                                return (
                                    "object" === typeof value &&
                                    null !== value &&
                                    $io0(value)
                                );
                            return true;
                        });
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
            'syntax = "proto3";\n\nmessage DynamicTree {\n    required string id = 1;\n    required double sequence = 2;\n    map<string, DynamicTree> children = 3;\n}',
    });
