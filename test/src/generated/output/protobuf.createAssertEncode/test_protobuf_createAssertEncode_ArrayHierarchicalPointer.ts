import typia from "typia";
import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ArrayHierarchicalPointer } from "../../../structures/ArrayHierarchicalPointer";
import { TypeGuardError } from "typia";
export const test_protobuf_createAssertEncode_ArrayHierarchicalPointer =
  _test_protobuf_assertEncode(TypeGuardError)(
    "ArrayHierarchicalPointer",
  )<ArrayHierarchicalPointer>(ArrayHierarchicalPointer)({
    encode: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): Uint8Array => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ArrayHierarchicalPointer => {
        const __is = (input: any): input is ArrayHierarchicalPointer => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.value) &&
            input.value.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            );
          const $io1 = (input: any): boolean =>
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "number" === typeof input.serial &&
            Number.isFinite(input.serial) &&
            "string" === typeof input.name &&
            "object" === typeof input.established_at &&
            null !== input.established_at &&
            "number" === typeof (input.established_at as any).time &&
            Number.isFinite((input.established_at as any).time) &&
            "number" === typeof (input.established_at as any).zone &&
            Number.isFinite((input.established_at as any).zone) &&
            Array.isArray(input.departments) &&
            input.departments.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io3(elem),
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
                "object" === typeof elem && null !== elem && $io4(elem),
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
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ArrayHierarchicalPointer => {
            const $guard = (typia.protobuf.createAssertEncode as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.value) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".value",
                    expected: "Array<ArrayHierarchicalPointer.ICompany>",
                    value: input.value,
                  },
                  errorFactory,
                )) &&
                input.value.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".value[" + _index1 + "]",
                          expected: "ArrayHierarchicalPointer.ICompany",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao1(
                        elem,
                        _path + ".value[" + _index1 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "ArrayHierarchicalPointer.ICompany",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "Array<ArrayHierarchicalPointer.ICompany>",
                  value: input.value,
                },
                errorFactory,
              );
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("number" === typeof input.id && Number.isFinite(input.id)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.serial &&
                Number.isFinite(input.serial)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".serial",
                    expected: "number",
                    value: input.serial,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.name ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input.established_at &&
                null !== input.established_at) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".established_at",
                    expected: "ArrayHierarchicalPointer.ITimestamp",
                    value: input.established_at,
                  },
                  errorFactory,
                )) &&
                $ao2(
                  input.established_at,
                  _path + ".established_at",
                  true && _exceptionable,
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".established_at",
                    expected: "ArrayHierarchicalPointer.ITimestamp",
                    value: input.established_at,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input.departments) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".departments",
                    expected: "Array<ArrayHierarchicalPointer.IDepartment>",
                    value: input.departments,
                  },
                  errorFactory,
                )) &&
                input.departments.every(
                  (elem: any, _index2: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".departments[" + _index2 + "]",
                          expected: "ArrayHierarchicalPointer.IDepartment",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao3(
                        elem,
                        _path + ".departments[" + _index2 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".departments[" + _index2 + "]",
                        expected: "ArrayHierarchicalPointer.IDepartment",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".departments",
                    expected: "Array<ArrayHierarchicalPointer.IDepartment>",
                    value: input.departments,
                  },
                  errorFactory,
                ));
            const $ao2 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("number" === typeof input.time &&
                Number.isFinite(input.time)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".time",
                    expected: "number",
                    value: input.time,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.zone &&
                Number.isFinite(input.zone)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".zone",
                    expected: "number",
                    value: input.zone,
                  },
                  errorFactory,
                ));
            const $ao3 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("number" === typeof input.id && Number.isFinite(input.id)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.code ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".code",
                    expected: "string",
                    value: input.code,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.sales &&
                Number.isFinite(input.sales)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".sales",
                    expected: "number",
                    value: input.sales,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input.created_at &&
                null !== input.created_at) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".created_at",
                    expected: "ArrayHierarchicalPointer.ITimestamp",
                    value: input.created_at,
                  },
                  errorFactory,
                )) &&
                $ao2(
                  input.created_at,
                  _path + ".created_at",
                  true && _exceptionable,
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".created_at",
                    expected: "ArrayHierarchicalPointer.ITimestamp",
                    value: input.created_at,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input.employees) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".employees",
                    expected: "Array<ArrayHierarchicalPointer.IEmployee>",
                    value: input.employees,
                  },
                  errorFactory,
                )) &&
                input.employees.every(
                  (elem: any, _index3: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".employees[" + _index3 + "]",
                          expected: "ArrayHierarchicalPointer.IEmployee",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao4(
                        elem,
                        _path + ".employees[" + _index3 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".employees[" + _index3 + "]",
                        expected: "ArrayHierarchicalPointer.IEmployee",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".employees",
                    expected: "Array<ArrayHierarchicalPointer.IEmployee>",
                    value: input.employees,
                  },
                  errorFactory,
                ));
            const $ao4 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("number" === typeof input.id && Number.isFinite(input.id)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.name ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".name",
                    expected: "string",
                    value: input.name,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.age && Number.isFinite(input.age)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".age",
                    expected: "number",
                    value: input.age,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.grade &&
                Number.isFinite(input.grade)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".grade",
                    expected: "number",
                    value: input.grade,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input.employeed_at &&
                null !== input.employeed_at) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".employeed_at",
                    expected: "ArrayHierarchicalPointer.ITimestamp",
                    value: input.employeed_at,
                  },
                  errorFactory,
                )) &&
                $ao2(
                  input.employeed_at,
                  _path + ".employeed_at",
                  true && _exceptionable,
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".employeed_at",
                    expected: "ArrayHierarchicalPointer.ITimestamp",
                    value: input.employeed_at,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ArrayHierarchicalPointer",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ArrayHierarchicalPointer",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const encode = (input: ArrayHierarchicalPointer): Uint8Array => {
        const $Sizer = (typia.protobuf.createAssertEncode as any).Sizer;
        const $Writer = (typia.protobuf.createAssertEncode as any).Writer;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "value";
            if (0 !== input.value.length) {
              for (const elem of input.value) {
                // 1 -> ArrayHierarchicalPointer.ICompany;
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
            // 4 -> ArrayHierarchicalPointer.ITimestamp;
            writer.uint32(34);
            writer.fork();
            $peo2(input.established_at);
            writer.ldelim();
            // property "departments";
            if (0 !== input.departments.length) {
              for (const elem of input.departments) {
                // 5 -> ArrayHierarchicalPointer.IDepartment;
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
            // 4 -> ArrayHierarchicalPointer.ITimestamp;
            writer.uint32(34);
            writer.fork();
            $peo2(input.created_at);
            writer.ldelim();
            // property "employees";
            if (0 !== input.employees.length) {
              for (const elem of input.employees) {
                // 5 -> ArrayHierarchicalPointer.IEmployee;
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
            // 5 -> ArrayHierarchicalPointer.ITimestamp;
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
                "object" === typeof elem && null !== elem && $io3(elem),
            );
          const $io2 = (input: any): boolean =>
            "number" === typeof input.time && "number" === typeof input.zone;
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
                "object" === typeof elem && null !== elem && $io4(elem),
            );
          const $io4 = (input: any): boolean =>
            "number" === typeof input.id &&
            "string" === typeof input.name &&
            "number" === typeof input.age &&
            "number" === typeof input.grade &&
            "object" === typeof input.employeed_at &&
            null !== input.employeed_at &&
            $io2(input.employeed_at);
          //ArrayHierarchicalPointer;
          $peo0(input);
          return writer;
        };
        const sizer = encoder(new $Sizer());
        const writer = encoder(new $Writer(sizer));
        return writer.buffer();
      };
      return encode(assert(input, errorFactory));
    },
    decode: (
      input: Uint8Array,
    ): import("typia").Resolved<ArrayHierarchicalPointer> => {
      const $Reader = (typia.protobuf.createDecode as any).Reader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          value: [] as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // type: Array<ArrayHierarchicalPointer.ICompany>;
              output.value.push($pdo1(reader, reader.uint32()));
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo1 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: undefined as any,
          serial: undefined as any,
          name: "" as any,
          established_at: undefined as any,
          departments: [] as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // double;
              output.id = reader.double();
              break;
            case 2:
              // double;
              output.serial = reader.double();
              break;
            case 3:
              // string;
              output.name = reader.string();
              break;
            case 4:
              // ArrayHierarchicalPointer.ITimestamp;
              output.established_at = $pdo2(reader, reader.uint32());
              break;
            case 5:
              // type: Array<ArrayHierarchicalPointer.IDepartment>;
              output.departments.push($pdo3(reader, reader.uint32()));
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo2 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          time: undefined as any,
          zone: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // double;
              output.time = reader.double();
              break;
            case 2:
              // double;
              output.zone = reader.double();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo3 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: undefined as any,
          code: "" as any,
          sales: undefined as any,
          created_at: undefined as any,
          employees: [] as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // double;
              output.id = reader.double();
              break;
            case 2:
              // string;
              output.code = reader.string();
              break;
            case 3:
              // double;
              output.sales = reader.double();
              break;
            case 4:
              // ArrayHierarchicalPointer.ITimestamp;
              output.created_at = $pdo2(reader, reader.uint32());
              break;
            case 5:
              // type: Array<ArrayHierarchicalPointer.IEmployee>;
              output.employees.push($pdo4(reader, reader.uint32()));
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo4 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: undefined as any,
          name: "" as any,
          age: undefined as any,
          grade: undefined as any,
          employeed_at: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // double;
              output.id = reader.double();
              break;
            case 2:
              // string;
              output.name = reader.string();
              break;
            case 3:
              // double;
              output.age = reader.double();
              break;
            case 4:
              // double;
              output.grade = reader.double();
              break;
            case 5:
              // ArrayHierarchicalPointer.ITimestamp;
              output.employeed_at = $pdo2(reader, reader.uint32());
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
    },
    message:
      'syntax = "proto3";\n\nmessage ArrayHierarchicalPointer {\n  repeated ArrayHierarchicalPointer.ICompany value = 1;\n  message ICompany {\n    required double id = 1;\n    required double serial = 2;\n    required string name = 3;\n    required ArrayHierarchicalPointer.ITimestamp established_at = 4;\n    repeated ArrayHierarchicalPointer.IDepartment departments = 5;\n  }\n\n  message ITimestamp {\n    required double time = 1;\n    required double zone = 2;\n  }\n\n  message IDepartment {\n    required double id = 1;\n    required string code = 2;\n    required double sales = 3;\n    required ArrayHierarchicalPointer.ITimestamp created_at = 4;\n    repeated ArrayHierarchicalPointer.IEmployee employees = 5;\n  }\n\n  message IEmployee {\n    required double id = 1;\n    required string name = 2;\n    required double age = 3;\n    required double grade = 4;\n    required ArrayHierarchicalPointer.ITimestamp employeed_at = 5;\n  }\n}',
  });
