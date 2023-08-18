import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ObjectUnionNonPredictable } from "../../../structures/ObjectUnionNonPredictable";

export const test_protobuf_validateEncode_ObjectUnionNonPredictable =
    _test_protobuf_validateEncode<ObjectUnionNonPredictable>(
        ObjectUnionNonPredictable,
    )({
        validateEncode: (
            input: ObjectUnionNonPredictable,
        ): typia.IValidation<Uint8Array> => {
            const validate = (
                input: any,
            ): typia.IValidation<ObjectUnionNonPredictable> => {
                const errors = [] as any[];
                const __is = (
                    input: any,
                ): input is ObjectUnionNonPredictable => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $io2(input.value);
                    const $io2 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $iu0(input.value);
                    const $io3 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        "boolean" === typeof (input.value as any).value;
                    const $io5 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        "number" === typeof (input.value as any).value &&
                        Number.isFinite((input.value as any).value);
                    const $io7 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        "string" === typeof (input.value as any).value;
                    const $iu0 = (input: any): any =>
                        (() => {
                            if ($io7(input)) return $io7(input);
                            else if ($io5(input)) return $io5(input);
                            else if ($io3(input)) return $io3(input);
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
                        typia.protobuf.createValidateEncode as any
                    ).report(errors);
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ObjectUnionNonPredictable => {
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
                                            "Array<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
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
                                                            "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
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
                                                        "ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>",
                                                    value: elem,
                                                }),
                                        )
                                        .every((flag: boolean) => flag)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "Array<ObjectUnionNonPredictable.IWrapper<ObjectUnionNonPredictable.IUnion>>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo1 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.value &&
                                    null !== input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "IPointer<ObjectUnionNonPredictable.IUnion>",
                                        value: input.value,
                                    })) &&
                                    $vo2(
                                        input.value,
                                        _path + ".value",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "IPointer<ObjectUnionNonPredictable.IUnion>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo2 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.value &&
                                    null !== input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                                        value: input.value,
                                    })) &&
                                    $vu0(
                                        input.value,
                                        _path + ".value",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected:
                                            "(ObjectUnionNonPredictable.IWrapper<boolean> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<string>)",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo3 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.value &&
                                    null !== input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "IPointer<boolean>",
                                        value: input.value,
                                    })) &&
                                    $vo4(
                                        input.value,
                                        _path + ".value",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "IPointer<boolean>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo4 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "boolean" === typeof input.value ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "boolean",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo5 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.value &&
                                    null !== input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "IPointer<number>",
                                        value: input.value,
                                    })) &&
                                    $vo6(
                                        input.value,
                                        _path + ".value",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "IPointer<number>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo6 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ("number" === typeof input.value &&
                                    Number.isFinite(input.value)) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "number",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo7 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                ((("object" === typeof input.value &&
                                    null !== input.value) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "IPointer<string>",
                                        value: input.value,
                                    })) &&
                                    $vo8(
                                        input.value,
                                        _path + ".value",
                                        true && _exceptionable,
                                    )) ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "IPointer<string>",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vo8 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): boolean =>
                            [
                                "string" === typeof input.value ||
                                    $report(_exceptionable, {
                                        path: _path + ".value",
                                        expected: "string",
                                        value: input.value,
                                    }),
                            ].every((flag: boolean) => flag);
                        const $vu0 = (
                            input: any,
                            _path: string,
                            _exceptionable: boolean = true,
                        ): any =>
                            $vo7(input, _path, false && _exceptionable) ||
                            $vo5(input, _path, false && _exceptionable) ||
                            $vo3(input, _path, false && _exceptionable);
                        return (
                            ((("object" === typeof input && null !== input) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ObjectUnionNonPredictable",
                                    value: input,
                                })) &&
                                $vo0(input, _path + "", true)) ||
                            $report(true, {
                                path: _path + "",
                                expected: "ObjectUnionNonPredictable",
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
            const encode = (input: ObjectUnionNonPredictable): Uint8Array => {
                const $throws = (typia.protobuf.createValidateEncode as any)
                    .throws;
                const $Sizer = (typia.protobuf.createValidateEncode as any)
                    .Sizer;
                const $Writer = (typia.protobuf.createValidateEncode as any)
                    .Writer;
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
                        // property "value";
                        writer.uint32(10);
                        writer.fork();
                        $peo2(input.value);
                        writer.ldelim();
                    };
                    const $peo2 = (input: any): any => {
                        // property "value";
                        (() => {
                            if ($io7(input.value))
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo7(input.value);
                                    writer.ldelim();
                                })();
                            else if ($io5(input.value))
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo5(input.value);
                                    writer.ldelim();
                                })();
                            else if ($io3(input.value))
                                return (() => {
                                    writer.uint32(10);
                                    writer.fork();
                                    $peo3(input.value);
                                    writer.ldelim();
                                })();
                            else
                                $throws({
                                    expected:
                                        "(ObjectUnionNonPredictable.IWrapper<string> | ObjectUnionNonPredictable.IWrapper<number> | ObjectUnionNonPredictable.IWrapper<boolean>)",
                                    value: input.value,
                                });
                        })();
                    };
                    const $peo3 = (input: any): any => {
                        // property "value";
                        writer.uint32(10);
                        writer.fork();
                        $peo4(input.value);
                        writer.ldelim();
                    };
                    const $peo4 = (input: any): any => {
                        // property "value";
                        writer.uint32(8);
                        writer.bool(input.value);
                    };
                    const $peo5 = (input: any): any => {
                        // property "value";
                        writer.uint32(10);
                        writer.fork();
                        $peo6(input.value);
                        writer.ldelim();
                    };
                    const $peo6 = (input: any): any => {
                        // property "value";
                        writer.uint32(9);
                        writer.double(input.value);
                    };
                    const $peo7 = (input: any): any => {
                        // property "value";
                        writer.uint32(10);
                        writer.fork();
                        $peo8(input.value);
                        writer.ldelim();
                    };
                    const $peo8 = (input: any): any => {
                        // property "value";
                        writer.uint32(10);
                        writer.string(input.value);
                    };
                    const $io1 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $io2(input.value);
                    const $io2 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $iu0(input.value);
                    const $io3 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $io4(input.value);
                    const $io4 = (input: any): boolean =>
                        "boolean" === typeof input.value;
                    const $io5 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $io6(input.value);
                    const $io6 = (input: any): boolean =>
                        "number" === typeof input.value;
                    const $io7 = (input: any): boolean =>
                        "object" === typeof input.value &&
                        null !== input.value &&
                        $io8(input.value);
                    const $io8 = (input: any): boolean =>
                        "string" === typeof input.value;
                    const $iu0 = (input: any): any =>
                        $io7(input) || $io5(input) || $io3(input);
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
        },
        message:
            'syntax = "proto3";\n\nmessage ObjectUnionNonPredictable {\n    repeated ObjectUnionNonPredictable.IWrapper_lt_ObjectUnionNonPredictable.IUnion_gt_ value = 1;\n    message IWrapper_lt_ObjectUnionNonPredictable {\n        message IUnion_gt_ {\n            required IPointer_lt_ObjectUnionNonPredictable.IUnion_gt_ value = 1;\n        }\n    }\n\n    message IWrapper_lt_boolean_gt_ {\n        required IPointer_lt_boolean_gt_ value = 1;\n    }\n\n    message IWrapper_lt_number_gt_ {\n        required IPointer_lt_number_gt_ value = 1;\n    }\n\n    message IWrapper_lt_string_gt_ {\n        required IPointer_lt_string_gt_ value = 1;\n    }\n}\n\nmessage IPointer_lt_ObjectUnionNonPredictable {\n    message IUnion_gt_ {\n        oneof value {\n            ObjectUnionNonPredictable.IWrapper_lt_string_gt_ v1 = 1;\n            ObjectUnionNonPredictable.IWrapper_lt_number_gt_ v2 = 2;\n            ObjectUnionNonPredictable.IWrapper_lt_boolean_gt_ v3 = 3;\n        }\n    }\n}\n\nmessage IPointer_lt_boolean_gt_ {\n    required bool value = 1;\n}\n\nmessage IPointer_lt_number_gt_ {\n    required double value = 1;\n}\n\nmessage IPointer_lt_string_gt_ {\n    required string value = 1;\n}',
    });
