import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_protobuf_validateDecode_ArrayRecursive =
    _test_protobuf_validateDecode("ArrayRecursive")<ArrayRecursive>(
        ArrayRecursive,
    )({
        validateDecode: (input) =>
            ((input: Uint8Array): typia.IValidation<ArrayRecursive> => {
                const validate = (
                    input: any,
                ): typia.IValidation<ArrayRecursive> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is ArrayRecursive => {
                        const $io0 = (input: any): boolean =>
                            Array.isArray(input.children) &&
                            input.children.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io0(elem),
                            ) &&
                            "number" === typeof input.id &&
                            Number.isFinite(input.id) &&
                            "string" === typeof input.code &&
                            "number" === typeof input.sequence &&
                            Number.isFinite(input.sequence) &&
                            "object" === typeof input.created_at &&
                            null !== input.created_at &&
                            "number" ===
                                typeof (input.created_at as any).time &&
                            Number.isFinite((input.created_at as any).time) &&
                            "number" ===
                                typeof (input.created_at as any).zone &&
                            Number.isFinite((input.created_at as any).zone);
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
                        ): input is ArrayRecursive => {
                            const $vo0 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    ((Array.isArray(input.children) ||
                                        $report(_exceptionable, {
                                            path: _path + ".children",
                                            expected:
                                                "Array<ArrayRecursive.ICategory>",
                                            value: input.children,
                                        })) &&
                                        input.children
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
                                                                    ".children[" +
                                                                    _index1 +
                                                                    "]",
                                                                expected:
                                                                    "ArrayRecursive.ICategory",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo0(
                                                            elem,
                                                            _path +
                                                                ".children[" +
                                                                _index1 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".children[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "ArrayRecursive.ICategory",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".children",
                                            expected:
                                                "Array<ArrayRecursive.ICategory>",
                                            value: input.children,
                                        }),
                                    ("number" === typeof input.id &&
                                        Number.isFinite(input.id)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".id",
                                            expected: "number",
                                            value: input.id,
                                        }),
                                    "string" === typeof input.code ||
                                        $report(_exceptionable, {
                                            path: _path + ".code",
                                            expected: "string",
                                            value: input.code,
                                        }),
                                    ("number" === typeof input.sequence &&
                                        Number.isFinite(input.sequence)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".sequence",
                                            expected: "number",
                                            value: input.sequence,
                                        }),
                                    ((("object" === typeof input.created_at &&
                                        null !== input.created_at) ||
                                        $report(_exceptionable, {
                                            path: _path + ".created_at",
                                            expected:
                                                "ArrayRecursive.ITimestamp",
                                            value: input.created_at,
                                        })) &&
                                        $vo1(
                                            input.created_at,
                                            _path + ".created_at",
                                            true && _exceptionable,
                                        )) ||
                                        $report(_exceptionable, {
                                            path: _path + ".created_at",
                                            expected:
                                                "ArrayRecursive.ITimestamp",
                                            value: input.created_at,
                                        }),
                                ].every((flag: boolean) => flag);
                            const $vo1 = (
                                input: any,
                                _path: string,
                                _exceptionable: boolean = true,
                            ): boolean =>
                                [
                                    ("number" === typeof input.time &&
                                        Number.isFinite(input.time)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".time",
                                            expected: "number",
                                            value: input.time,
                                        }),
                                    ("number" === typeof input.zone &&
                                        Number.isFinite(input.zone)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".zone",
                                            expected: "number",
                                            value: input.zone,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "ArrayRecursive.ICategory",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ArrayRecursive.ICategory",
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
                const decode = (input: Uint8Array): ArrayRecursive => {
                    const $Reader = (typia.protobuf.validateDecode as any)
                        .Reader;
                    const $pdo0 = (reader: any, length: number = -1): any => {
                        length =
                            length < 0
                                ? reader.size()
                                : reader.index() + length;
                        const output = {
                            children: [] as any,
                            id: undefined as any,
                            code: "" as any,
                            sequence: undefined as any,
                            created_at: undefined as any,
                        };
                        while (reader.index() < length) {
                            const tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1:
                                    output.children.push(
                                        $pdo0(reader, reader.uint32()),
                                    );
                                    break;
                                case 2:
                                    output.id = reader.double();
                                    break;
                                case 3:
                                    output.code = reader.string();
                                    break;
                                case 4:
                                    output.sequence = reader.double();
                                    break;
                                case 5:
                                    output.created_at = $pdo1(
                                        reader,
                                        reader.uint32(),
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
                            length < 0
                                ? reader.size()
                                : reader.index() + length;
                        const output = {
                            time: undefined as any,
                            zone: undefined as any,
                        };
                        while (reader.index() < length) {
                            const tag = reader.uint32();
                            switch (tag >>> 3) {
                                case 1:
                                    output.time = reader.double();
                                    break;
                                case 2:
                                    output.zone = reader.double();
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
        encode: (input: ArrayRecursive): Uint8Array => {
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "children";
                    if (0 !== input.children.length) {
                        for (const elem of input.children) {
                            writer.uint32(10);
                            writer.fork();
                            $peo0(elem);
                            writer.ldelim();
                        }
                    }
                    // property "id";
                    writer.uint32(17);
                    writer.double(input.id);
                    // property "code";
                    writer.uint32(26);
                    writer.string(input.code);
                    // property "sequence";
                    writer.uint32(33);
                    writer.double(input.sequence);
                    // property "created_at";
                    writer.uint32(42);
                    writer.fork();
                    $peo1(input.created_at);
                    writer.ldelim();
                };
                const $peo1 = (input: any): any => {
                    // property "time";
                    writer.uint32(9);
                    writer.double(input.time);
                    // property "zone";
                    writer.uint32(17);
                    writer.double(input.zone);
                };
                const $io0 = (input: any): boolean =>
                    Array.isArray(input.children) &&
                    input.children.every(
                        (elem: any) =>
                            "object" === typeof elem &&
                            null !== elem &&
                            $io0(elem),
                    ) &&
                    "number" === typeof input.id &&
                    "string" === typeof input.code &&
                    "number" === typeof input.sequence &&
                    "object" === typeof input.created_at &&
                    null !== input.created_at &&
                    $io1(input.created_at);
                const $io1 = (input: any): boolean =>
                    "number" === typeof input.time &&
                    "number" === typeof input.zone;
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
