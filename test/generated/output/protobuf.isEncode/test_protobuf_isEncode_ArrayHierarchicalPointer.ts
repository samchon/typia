import typia from "../../../../src";
import { _test_protobuf_isEncode } from "../../../internal/_test_protobuf_isEncode";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";

export const test_protobuf_isEncode_ArrayHierarchicalPointer =
    _test_protobuf_isEncode(
        "ArrayHierarchicalPointer",
    )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
        isEncode: (input) =>
            ((input: ArrayHierarchicalPointer): Uint8Array | null => {
                const is = (input: any): input is ArrayHierarchicalPointer => {
                    const $io0 = (input: any): boolean =>
                        Array.isArray(input.value) &&
                        input.value.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io1(elem),
                        );
                    const $io1 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "number" === typeof input.serial &&
                        Number.isFinite(input.serial) &&
                        "string" === typeof input.name &&
                        "object" === typeof input.established_at &&
                        null !== input.established_at &&
                        "number" ===
                            typeof (input.established_at as any).time &&
                        Number.isFinite((input.established_at as any).time) &&
                        "number" ===
                            typeof (input.established_at as any).zone &&
                        Number.isFinite((input.established_at as any).zone) &&
                        Array.isArray(input.departments) &&
                        input.departments.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io3(elem),
                        );
                    const $io3 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.code &&
                        "number" === typeof input.sales &&
                        Number.isFinite(input.sales) &&
                        "object" === typeof input.created_at &&
                        null !== input.created_at &&
                        "number" === typeof (input.created_at as any).time &&
                        Number.isFinite((input.created_at as any).time) &&
                        "number" === typeof (input.created_at as any).zone &&
                        Number.isFinite((input.created_at as any).zone) &&
                        Array.isArray(input.employees) &&
                        input.employees.every(
                            (elem: any) =>
                                "object" === typeof elem &&
                                null !== elem &&
                                $io4(elem),
                        );
                    const $io4 = (input: any): boolean =>
                        "number" === typeof input.id &&
                        Number.isFinite(input.id) &&
                        "string" === typeof input.name &&
                        "number" === typeof input.age &&
                        Number.isFinite(input.age) &&
                        "number" === typeof input.grade &&
                        Number.isFinite(input.grade) &&
                        "object" === typeof input.employeed_at &&
                        null !== input.employeed_at &&
                        "number" === typeof (input.employeed_at as any).time &&
                        Number.isFinite((input.employeed_at as any).time) &&
                        "number" === typeof (input.employeed_at as any).zone &&
                        Number.isFinite((input.employeed_at as any).zone);
                    return (
                        "object" === typeof input &&
                        null !== input &&
                        $io0(input)
                    );
                };
                const encode = (
                    input: ArrayHierarchicalPointer,
                ): Uint8Array => {
                    const $Sizer = (typia.protobuf.isEncode as any).Sizer;
                    const $Writer = (typia.protobuf.isEncode as any).Writer;
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
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "serial";
                            writer.uint32(17);
                            writer.double(input.serial);
                            // property "name";
                            writer.uint32(26);
                            writer.string(input.name);
                            // property "established_at";
                            writer.uint32(34);
                            writer.fork();
                            $peo2(input.established_at);
                            writer.ldelim();
                            // property "departments";
                            if (0 !== input.departments.length) {
                                for (const elem of input.departments) {
                                    writer.uint32(42);
                                    writer.fork();
                                    $peo3(elem);
                                    writer.ldelim();
                                }
                            }
                        };
                        const $peo2 = (input: any): any => {
                            // property "time";
                            writer.uint32(9);
                            writer.double(input.time);
                            // property "zone";
                            writer.uint32(17);
                            writer.double(input.zone);
                        };
                        const $peo3 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "code";
                            writer.uint32(18);
                            writer.string(input.code);
                            // property "sales";
                            writer.uint32(25);
                            writer.double(input.sales);
                            // property "created_at";
                            writer.uint32(34);
                            writer.fork();
                            $peo2(input.created_at);
                            writer.ldelim();
                            // property "employees";
                            if (0 !== input.employees.length) {
                                for (const elem of input.employees) {
                                    writer.uint32(42);
                                    writer.fork();
                                    $peo4(elem);
                                    writer.ldelim();
                                }
                            }
                        };
                        const $peo4 = (input: any): any => {
                            // property "id";
                            writer.uint32(9);
                            writer.double(input.id);
                            // property "name";
                            writer.uint32(18);
                            writer.string(input.name);
                            // property "age";
                            writer.uint32(25);
                            writer.double(input.age);
                            // property "grade";
                            writer.uint32(33);
                            writer.double(input.grade);
                            // property "employeed_at";
                            writer.uint32(42);
                            writer.fork();
                            $peo2(input.employeed_at);
                            writer.ldelim();
                        };
                        const $io1 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            "number" === typeof input.serial &&
                            "string" === typeof input.name &&
                            "object" === typeof input.established_at &&
                            null !== input.established_at &&
                            $io2(input.established_at) &&
                            Array.isArray(input.departments) &&
                            input.departments.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io3(elem),
                            );
                        const $io2 = (input: any): boolean =>
                            "number" === typeof input.time &&
                            "number" === typeof input.zone;
                        const $io3 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            "string" === typeof input.code &&
                            "number" === typeof input.sales &&
                            "object" === typeof input.created_at &&
                            null !== input.created_at &&
                            $io2(input.created_at) &&
                            Array.isArray(input.employees) &&
                            input.employees.every(
                                (elem: any) =>
                                    "object" === typeof elem &&
                                    null !== elem &&
                                    $io4(elem),
                            );
                        const $io4 = (input: any): boolean =>
                            "number" === typeof input.id &&
                            "string" === typeof input.name &&
                            "number" === typeof input.age &&
                            "number" === typeof input.grade &&
                            "object" === typeof input.employeed_at &&
                            null !== input.employeed_at &&
                            $io2(input.employeed_at);
                        $peo0(input);
                        return writer;
                    };
                    const sizer = encoder(new $Sizer());
                    const writer = encoder(new $Writer(sizer));
                    return writer.buffer();
                };
                return is(input) ? encode(input) : null;
            })(input),
        message:
            'syntax = "proto3";\n\nmessage ArrayHierarchicalPointer {\n    repeated ArrayHierarchicalPointer.ICompany value = 1;\n    message ICompany {\n        required double id = 1;\n        required double serial = 2;\n        required string name = 3;\n        required ArrayHierarchicalPointer.ITimestamp established_at = 4;\n        repeated ArrayHierarchicalPointer.IDepartment departments = 5;\n    }\n\n    message ITimestamp {\n        required double time = 1;\n        required double zone = 2;\n    }\n\n    message IDepartment {\n        required double id = 1;\n        required string code = 2;\n        required double sales = 3;\n        required ArrayHierarchicalPointer.ITimestamp created_at = 4;\n        repeated ArrayHierarchicalPointer.IEmployee employees = 5;\n    }\n\n    message IEmployee {\n        required double id = 1;\n        required string name = 2;\n        required double age = 3;\n        required double grade = 4;\n        required ArrayHierarchicalPointer.ITimestamp employeed_at = 5;\n    }\n}',
    });
