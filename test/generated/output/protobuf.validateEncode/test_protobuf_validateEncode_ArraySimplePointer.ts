import typia from "../../../../src";
import { _test_protobuf_validateEncode } from "../../../internal/_test_protobuf_validateEncode";
import { ArraySimplePointer } from "../../../structures/ArraySimplePointer";

export const test_protobuf_validateEncode_ArraySimplePointer =
    _test_protobuf_validateEncode<ArraySimplePointer>(ArraySimplePointer)({
        validateEncode: (input) =>
            ((input: ArraySimplePointer): typia.IValidation<Uint8Array> => {
                const validate = (
                    input: any,
                ): typia.IValidation<ArraySimplePointer> => {
                    const errors = [] as any[];
                    const __is = (input: any): input is ArraySimplePointer => {
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
                            "string" === typeof input.email &&
                            Array.isArray(input.hobbies) &&
                            input.hobbies.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            );
                        const $io2 = (input: any): boolean =>
                            "string" === typeof input.name &&
                            "string" === typeof input.body &&
                            "number" === typeof input.rank &&
                            Number.isFinite(input.rank);
                        return (
                            "object" === typeof input &&
                            null !== input &&
                            $io0(input)
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
                        ): input is ArraySimplePointer => {
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
                                                "Array<ArraySimplePointer.IPerson>",
                                            value: input.value,
                                        })) &&
                                        input.value
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
                                                                    ".value[" +
                                                                    _index1 +
                                                                    "]",
                                                                expected:
                                                                    "ArraySimplePointer.IPerson",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo1(
                                                            elem,
                                                            _path +
                                                                ".value[" +
                                                                _index1 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".value[" +
                                                            _index1 +
                                                            "]",
                                                        expected:
                                                            "ArraySimplePointer.IPerson",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".value",
                                            expected:
                                                "Array<ArraySimplePointer.IPerson>",
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
                                    "string" === typeof input.email ||
                                        $report(_exceptionable, {
                                            path: _path + ".email",
                                            expected: "string",
                                            value: input.email,
                                        }),
                                    ((Array.isArray(input.hobbies) ||
                                        $report(_exceptionable, {
                                            path: _path + ".hobbies",
                                            expected:
                                                "Array<ArraySimplePointer.IHobby>",
                                            value: input.hobbies,
                                        })) &&
                                        input.hobbies
                                            .map(
                                                (elem: any, _index2: number) =>
                                                    ((("object" ===
                                                        typeof elem &&
                                                        null !== elem) ||
                                                        $report(
                                                            _exceptionable,
                                                            {
                                                                path:
                                                                    _path +
                                                                    ".hobbies[" +
                                                                    _index2 +
                                                                    "]",
                                                                expected:
                                                                    "ArraySimplePointer.IHobby",
                                                                value: elem,
                                                            },
                                                        )) &&
                                                        $vo2(
                                                            elem,
                                                            _path +
                                                                ".hobbies[" +
                                                                _index2 +
                                                                "]",
                                                            true &&
                                                                _exceptionable,
                                                        )) ||
                                                    $report(_exceptionable, {
                                                        path:
                                                            _path +
                                                            ".hobbies[" +
                                                            _index2 +
                                                            "]",
                                                        expected:
                                                            "ArraySimplePointer.IHobby",
                                                        value: elem,
                                                    }),
                                            )
                                            .every((flag: boolean) => flag)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".hobbies",
                                            expected:
                                                "Array<ArraySimplePointer.IHobby>",
                                            value: input.hobbies,
                                        }),
                                ].every((flag: boolean) => flag);
                            const $vo2 = (
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
                                    "string" === typeof input.body ||
                                        $report(_exceptionable, {
                                            path: _path + ".body",
                                            expected: "string",
                                            value: input.body,
                                        }),
                                    ("number" === typeof input.rank &&
                                        Number.isFinite(input.rank)) ||
                                        $report(_exceptionable, {
                                            path: _path + ".rank",
                                            expected: "number",
                                            value: input.rank,
                                        }),
                                ].every((flag: boolean) => flag);
                            return (
                                ((("object" === typeof input &&
                                    null !== input) ||
                                    $report(true, {
                                        path: _path + "",
                                        expected: "ArraySimplePointer",
                                        value: input,
                                    })) &&
                                    $vo0(input, _path + "", true)) ||
                                $report(true, {
                                    path: _path + "",
                                    expected: "ArraySimplePointer",
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
                const encode = (input: ArraySimplePointer): Uint8Array => {
                    const $Sizer = (typia.protobuf.validateEncode as any).Sizer;
                    const $Writer = (typia.protobuf.validateEncode as any)
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
                            // property "name";
                            writer.uint32(10);
                            writer.string(input.name);
                            // property "email";
                            writer.uint32(18);
                            writer.string(input.email);
                            // property "hobbies";
                            if (0 !== input.hobbies.length) {
                                for (const elem of input.hobbies) {
                                    writer.uint32(26);
                                    writer.fork();
                                    $peo2(elem);
                                    writer.ldelim();
                                }
                            }
                        };
                        const $peo2 = (input: any): any => {
                            // property "name";
                            writer.uint32(10);
                            writer.string(input.name);
                            // property "body";
                            writer.uint32(18);
                            writer.string(input.body);
                            // property "rank";
                            writer.uint32(25);
                            writer.double(input.rank);
                        };
                        const $io1 = (input: any): boolean =>
                            "string" === typeof input.name &&
                            "string" === typeof input.email &&
                            Array.isArray(input.hobbies) &&
                            input.hobbies.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io2(elem),
                            );
                        const $io2 = (input: any): boolean =>
                            "string" === typeof input.name &&
                            "string" === typeof input.body &&
                            "number" === typeof input.rank;
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
            'syntax = "proto3";\n\nmessage ArraySimplePointer {\n    repeated ArraySimplePointer.IPerson value = 1;\n    message IPerson {\n        required string name = 1;\n        required string email = 2;\n        repeated ArraySimplePointer.IHobby hobbies = 3;\n    }\n\n    message IHobby {\n        required string name = 1;\n        required string body = 2;\n        required double rank = 3;\n    }\n}',
    });
