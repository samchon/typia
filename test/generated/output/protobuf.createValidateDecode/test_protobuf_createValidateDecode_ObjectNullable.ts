import typia from "../../../../src";
import { _test_protobuf_validateDecode } from "../../../internal/_test_protobuf_validateDecode";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_protobuf_validateDecode_ObjectNullable =
    _test_protobuf_validateDecode("ObjectNullable")<ObjectNullable>(
        ObjectNullable,
    )({
        validateDecode: (
            input: Uint8Array,
        ): typia.IValidation<ObjectNullable> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectNullable> => {
                const errors = [] as any[];
                const __is = (input: any): input is ObjectNullable => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        "string" === typeof input.name &&
                        "object" === typeof input.manufacturer &&
                        null !== input.manufacturer &&
                        $io2(input.manufacturer) &&
                        (null === input.brand ||
                            ("object" === typeof input.brand &&
                                null !== input.brand &&
                                $io3(input.brand))) &&
                        (null === input.similar ||
                            ("object" === typeof input.similar &&
                                null !== input.similar &&
                                $iu0(input.similar)));
                    const $io2 = (input: any): boolean =>
                        "manufacturer" === input.type &&
                        "string" === typeof input.name;
                    const $io3 = (input: any): boolean =>
                        "brand" === input.type &&
                        "string" === typeof input.name;
                    const $iu0 = (input: any): any =>
                        (() => {
                            if ("brand" === input.type) return $io3(input);
                            else if ("manufacturer" === input.type)
                                return $io2(input);
                            else return false;
                        })();
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
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
                    ): input is ObjectNullable => {
                        const $vo0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((Array.isArray(input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "Array<ObjectNullable.IProduct>",
                                        value: input.value,
                                    })) &&
                                    input.value
                                        .map(
                                            (elem: any, _index1: number) =>
                                                ((("object" === typeof elem &&
                                                    null !== elem) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "ObjectNullable.IProduct",
                                                        value: elem,
                                                    })) &&
                                                    $vo1(
                                                        elem,
                                                        _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        true && _exceptionable,
                                                    )) ||
                                                $report(_exceptionable, {
                                                    path:
                                                        _path +
                                                        ".value[" +
                                                        _index1 +
                                                        "]",
                                                    expected:
                                                        "ObjectNullable.IProduct",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "Array<ObjectNullable.IProduct>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
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
                                ((("object" === typeof input.manufacturer &&
                                    null !== input.manufacturer) ||
                                    $report(_exceptionable, {
                                        path: _path + ".manufacturer",
                                        expected:
                                            "ObjectNullable.IManufacturer",
                                        value: input.manufacturer,
                                    })) &&
                                    $vo2(
                                        input.manufacturer,
                                        _path + ".manufacturer",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".manufacturer",
                                        expected:
                                            "ObjectNullable.IManufacturer",
                                        value: input.manufacturer,
                                    }),
                                null === input.brand ||
                                    ((("object" === typeof input.brand &&
                                        null !== input.brand) ||
                                        $report(_exceptionable, {
                                            path: _path + ".brand",
                                            expected:
                                                "(ObjectNullable.IBrand | null)",
                                            value: input.brand,
                                        })) &&
                                        $vo3(
                                            input.brand,
                                            _path + ".brand",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".brand",
                                        expected:
                                            "(ObjectNullable.IBrand | null)",
                                        value: input.brand,
                                    }),
                                null === input.similar ||
                                    ((("object" === typeof input.similar &&
                                        null !== input.similar) ||
                                        $report(_exceptionable, {
                                            path: _path + ".similar",
                                            expected:
                                                "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                                            value: input.similar,
                                        })) &&
                                        $vu0(
                                            input.similar,
                                            _path + ".similar",
                                            true && _exceptionable,
                                        )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".similar",
                                        expected:
                                            "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                                        value: input.similar,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo2 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "manufacturer" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"manufacturer"',
                                        value: input.type,
                                    }),
                                "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo3 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "brand" === input.type ||
                                    $report(_exceptionable, {
                                        path: _path + ".type",
                                        expected: '"brand"',
                                        value: input.type,
                                    }),
                                "string" === typeof input.name ||
                                    $report(_exceptionable, {
                                        path: _path + ".name",
                                        expected: "string",
                                        value: input.name,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vu0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            (() => {
                                if ("brand" === input.type)
                                    return $vo3(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else if ("manufacturer" === input.type)
                                    return $vo2(
                                        input,
                                        _path,
                                        true && _exceptionable,
                                    );
                                else
                                    return $report(_exceptionable, {
                                        path: _path,
                                        expected:
                                            "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                                        value: input,
                                    });
                            })();
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectNullable",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectNullable",
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
            const decode = (input: Uint8Array): ObjectNullable => {
                const $Reader = (typia.protobuf.createValidateDecode as any)
                    .Reader;
                const $pdo0 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        value: [] as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.value.push(
                                    $pdo1(reader, reader.uint32()),
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
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        name: "" as any,
                        manufacturer: undefined as any,
                        brand: null as any,
                        similar: null as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.name = reader.string();
                                break;
                            case 2:
                                output.manufacturer = $pdo2(
                                    reader,
                                    reader.uint32(),
                                );
                                break;
                            case 3:
                                output.brand = $pdo3(reader, reader.uint32());
                                break;
                            case 4:
                                output.similar = $pdo3(reader, reader.uint32());
                                break;
                            case 5:
                                output.similar = $pdo2(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo2 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        type: undefined as any,
                        name: "" as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.type = reader.string();
                                break;
                            case 2:
                                output.name = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                        }
                    }
                    return output;
                };
                const $pdo3 = (reader: any, length: number = -1): any => {
                    length =
                        length < 0 ? reader.size() : reader.index() + length;
                    const output = {
                        type: undefined as any,
                        name: "" as any,
                    };
                    while (reader.index() < length) {
                        const tag = reader.uint32();
                        switch (tag >>> 3) {
                            case 1:
                                output.type = reader.string();
                                break;
                            case 2:
                                output.name = reader.string();
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
        },
        encode: (input: ObjectNullable): Uint8Array => {
            const $throws = (typia.protobuf.createEncode as any).throws;
            const $Sizer = (typia.protobuf.createEncode as any).Sizer;
            const $Writer = (typia.protobuf.createEncode as any).Writer;
            const encoder = (writer: any): any => {
                const $peo0 = (input: any): any => {
                    // property "value";
                    if (0 !== input.value.length) {
                        for (const elem of input.value) {
                            writer.uint32(10);
                            writer.fork();
                            $peo1(elem);
                            writer.ldelim();
                        }
                    }
                };
                const $peo1 = (input: any): any => {
                    // property "name";
                    writer.uint32(10);
                    writer.string(input.name);
                    // property "manufacturer";
                    writer.uint32(18);
                    writer.fork();
                    $peo2(input.manufacturer);
                    writer.ldelim();
                    // property "brand";
                    if (null != input.brand) {
                        writer.uint32(26);
                        writer.fork();
                        $peo3(input.brand);
                        writer.ldelim();
                    }
                    // property "similar";
                    if (null != input.similar) {
                        if ("brand" === input.similar.type)
                            return (() => {
                                writer.uint32(34);
                                writer.fork();
                                $peo3(input.similar);
                                writer.ldelim();
                            })();
                        else if ("manufacturer" === input.similar.type)
                            return (() => {
                                writer.uint32(42);
                                writer.fork();
                                $peo2(input.similar);
                                writer.ldelim();
                            })();
                        else
                            $throws({
                                expected:
                                    "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                                value: input.similar,
                            });
                    }
                };
                const $peo2 = (input: any): any => {
                    // property "type";
                    writer.uint32(10);
                    writer.string(input.type);
                    // property "name";
                    writer.uint32(18);
                    writer.string(input.name);
                };
                const $peo3 = (input: any): any => {
                    // property "type";
                    writer.uint32(10);
                    writer.string(input.type);
                    // property "name";
                    writer.uint32(18);
                    writer.string(input.name);
                };
                const $io1 = (input: any): boolean =>
                    "string" === typeof input.name &&
                    "object" === typeof input.manufacturer &&
                    null !== input.manufacturer &&
                    $io2(input.manufacturer) &&
                    (null === input.brand ||
                        ("object" === typeof input.brand &&
                            null !== input.brand &&
                            $io3(input.brand))) &&
                    (null === input.similar ||
                        ("object" === typeof input.similar &&
                            null !== input.similar &&
                            $iu0(input.similar)));
                const $io2 = (input: any): boolean =>
                    "manufacturer" === input.type &&
                    "string" === typeof input.name;
                const $io3 = (input: any): boolean =>
                    "brand" === input.type && "string" === typeof input.name;
                const $iu0 = (input: any): any =>
                    (() => {
                        if ("brand" === input.type) return $io3(input);
                        else if ("manufacturer" === input.type)
                            return $io2(input);
                        else return false;
                    })();
                $peo0(input);
                return writer;
            };
            const sizer = encoder(new $Sizer());
            const writer = encoder(new $Writer(sizer));
            return writer.buffer();
        },
    });
