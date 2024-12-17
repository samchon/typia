import typia, { ILlmApplicationOfValidate } from "typia";
import * as __typia_transform__isFormatDateTime from "typia/lib/internal/_isFormatDateTime.js";
import * as __typia_transform__isFormatUuid from "typia/lib/internal/_isFormatUuid.js";
import * as __typia_transform__validateReport from "typia/lib/internal/_validateReport.js";

import IApplication from "./IApplication";

const application: ILlmApplicationOfValidate<"chatgpt"> = {
  model: "chatgpt",
  options: {
    reference: false,
    strict: false,
    separate: null,
  },
  functions: [
    {
      name: "establishCompany",
      parameters: {
        type: "object",
        properties: {
          company: {
            $ref: "#/$defs/default.o1",
          },
        },
        required: ["company"],
        additionalProperties: false,
        $defs: {
          "default.o1": {
            type: "object",
            properties: {
              id: {
                description: "@format uuid",
                type: "string",
              },
              serial: {
                type: "number",
              },
              name: {
                type: "string",
              },
              established_at: {
                description: "@format date-time",
                type: "string",
              },
              departments: {
                type: "array",
                items: {
                  $ref: "#/$defs/default.o2",
                },
              },
            },
            required: ["id", "serial", "name", "established_at", "departments"],
          },
          "default.o2": {
            type: "object",
            properties: {
              id: {
                description: "@format uuid",
                type: "string",
              },
              code: {
                type: "string",
              },
              sales: {
                type: "number",
              },
              created_at: {
                description: "@format date-time",
                type: "string",
              },
              children: {
                type: "array",
                items: {
                  $ref: "#/$defs/default.o2",
                },
              },
              employees: {
                type: "array",
                items: {
                  $ref: "#/$defs/default.o1",
                },
              },
            },
            required: [
              "id",
              "code",
              "sales",
              "created_at",
              "children",
              "employees",
            ],
          },
        },
      },
      output: {
        $ref: "#/$defs/default.o1",
      },
      validate: (() => {
        const _io0 = (input: any): boolean =>
          "object" === typeof input.company &&
          null !== input.company &&
          _io1(input.company);
        const _io1 = (input: any): boolean =>
          "string" === typeof input.id &&
          __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
          "number" === typeof input.serial &&
          Number.isFinite(input.serial) &&
          "string" === typeof input.name &&
          "string" === typeof input.established_at &&
          __typia_transform__isFormatDateTime._isFormatDateTime(
            input.established_at,
          ) &&
          Array.isArray(input.departments) &&
          input.departments.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && _io2(elem),
          );
        const _io2 = (input: any): boolean =>
          "string" === typeof input.id &&
          __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
          "string" === typeof input.code &&
          "number" === typeof input.sales &&
          Number.isFinite(input.sales) &&
          "string" === typeof input.created_at &&
          __typia_transform__isFormatDateTime._isFormatDateTime(
            input.created_at,
          ) &&
          Array.isArray(input.children) &&
          input.children.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && _io2(elem),
          ) &&
          Array.isArray(input.employees) &&
          input.employees.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && _io1(elem),
          );
        const _vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ((("object" === typeof input.company && null !== input.company) ||
              _report(_exceptionable, {
                path: _path + ".company",
                expected: "default",
                value: input.company,
              })) &&
              _vo1(
                input.company,
                _path + ".company",
                true && _exceptionable,
              )) ||
              _report(_exceptionable, {
                path: _path + ".company",
                expected: "default",
                value: input.company,
              }),
          ].every((flag: boolean) => flag);
        const _vo1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("string" === typeof input.id &&
              (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
                _report(_exceptionable, {
                  path: _path + ".id",
                  expected: 'string & Format<"uuid">',
                  value: input.id,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".id",
                expected: '(string & Format<"uuid">)',
                value: input.id,
              }),
            ("number" === typeof input.serial &&
              Number.isFinite(input.serial)) ||
              _report(_exceptionable, {
                path: _path + ".serial",
                expected: "number",
                value: input.serial,
              }),
            "string" === typeof input.name ||
              _report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              }),
            ("string" === typeof input.established_at &&
              (__typia_transform__isFormatDateTime._isFormatDateTime(
                input.established_at,
              ) ||
                _report(_exceptionable, {
                  path: _path + ".established_at",
                  expected: 'string & Format<"date-time">',
                  value: input.established_at,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".established_at",
                expected: '(string & Format<"date-time">)',
                value: input.established_at,
              }),
            ((Array.isArray(input.departments) ||
              _report(_exceptionable, {
                path: _path + ".departments",
                expected: "Array<default>",
                value: input.departments,
              })) &&
              input.departments
                .map(
                  (elem: any, _index4: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      _report(_exceptionable, {
                        path: _path + ".departments[" + _index4 + "]",
                        expected: "default.o1",
                        value: elem,
                      })) &&
                      _vo2(
                        elem,
                        _path + ".departments[" + _index4 + "]",
                        true && _exceptionable,
                      )) ||
                    _report(_exceptionable, {
                      path: _path + ".departments[" + _index4 + "]",
                      expected: "default.o1",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              _report(_exceptionable, {
                path: _path + ".departments",
                expected: "Array<default>",
                value: input.departments,
              }),
          ].every((flag: boolean) => flag);
        const _vo2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("string" === typeof input.id &&
              (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
                _report(_exceptionable, {
                  path: _path + ".id",
                  expected: 'string & Format<"uuid">',
                  value: input.id,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".id",
                expected: '(string & Format<"uuid">)',
                value: input.id,
              }),
            "string" === typeof input.code ||
              _report(_exceptionable, {
                path: _path + ".code",
                expected: "string",
                value: input.code,
              }),
            ("number" === typeof input.sales && Number.isFinite(input.sales)) ||
              _report(_exceptionable, {
                path: _path + ".sales",
                expected: "number",
                value: input.sales,
              }),
            ("string" === typeof input.created_at &&
              (__typia_transform__isFormatDateTime._isFormatDateTime(
                input.created_at,
              ) ||
                _report(_exceptionable, {
                  path: _path + ".created_at",
                  expected: 'string & Format<"date-time">',
                  value: input.created_at,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".created_at",
                expected: '(string & Format<"date-time">)',
                value: input.created_at,
              }),
            ((Array.isArray(input.children) ||
              _report(_exceptionable, {
                path: _path + ".children",
                expected: "Array<default>",
                value: input.children,
              })) &&
              input.children
                .map(
                  (elem: any, _index5: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      _report(_exceptionable, {
                        path: _path + ".children[" + _index5 + "]",
                        expected: "default.o1",
                        value: elem,
                      })) &&
                      _vo2(
                        elem,
                        _path + ".children[" + _index5 + "]",
                        true && _exceptionable,
                      )) ||
                    _report(_exceptionable, {
                      path: _path + ".children[" + _index5 + "]",
                      expected: "default.o1",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              _report(_exceptionable, {
                path: _path + ".children",
                expected: "Array<default>",
                value: input.children,
              }),
            ((Array.isArray(input.employees) ||
              _report(_exceptionable, {
                path: _path + ".employees",
                expected: "Array<default>.o1",
                value: input.employees,
              })) &&
              input.employees
                .map(
                  (elem: any, _index6: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      _report(_exceptionable, {
                        path: _path + ".employees[" + _index6 + "]",
                        expected: "default",
                        value: elem,
                      })) &&
                      _vo1(
                        elem,
                        _path + ".employees[" + _index6 + "]",
                        true && _exceptionable,
                      )) ||
                    _report(_exceptionable, {
                      path: _path + ".employees[" + _index6 + "]",
                      expected: "default",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              _report(_exceptionable, {
                path: _path + ".employees",
                expected: "Array<default>.o1",
                value: input.employees,
              }),
          ].every((flag: boolean) => flag);
        const __is = (
          input: any,
        ): input is Parameters<IApplication["establishCompany"]>[0] =>
          "object" === typeof input && null !== input && _io0(input);
        let errors: any;
        let _report: any;
        return (
          input: any,
        ): import("typia").IValidation<
          Parameters<IApplication["establishCompany"]>[0]
        > => {
          if (false === __is(input)) {
            errors = [];
            _report = (
              __typia_transform__validateReport._validateReport as any
            )(errors);
            ((input: any, _path: string, _exceptionable: boolean = true) =>
              ((("object" === typeof input && null !== input) ||
                _report(true, {
                  path: _path + "",
                  expected: "__type",
                  value: input,
                })) &&
                _vo0(input, _path + "", true)) ||
              _report(true, {
                path: _path + "",
                expected: "__type",
                value: input,
              }))(input, "$input", true);
            const success = 0 === errors.length;
            return success
              ? {
                  success,
                  data: input,
                }
              : ({
                  success,
                  errors,
                  data: input,
                } as any);
          }
          return {
            success: true,
            data: input,
          } as any;
        };
      })(),
    },
    {
      name: "createDepartment",
      parameters: {
        type: "object",
        properties: {
          company: {
            $ref: "#/$defs/default.o1",
          },
          department: {
            $ref: "#/$defs/default.o2",
          },
        },
        required: ["company", "department"],
        additionalProperties: false,
        $defs: {
          "default.o1": {
            type: "object",
            properties: {
              id: {
                description: "@format uuid",
                type: "string",
              },
              serial: {
                type: "number",
              },
              name: {
                type: "string",
              },
              established_at: {
                description: "@format date-time",
                type: "string",
              },
              departments: {
                type: "array",
                items: {
                  $ref: "#/$defs/default.o2",
                },
              },
            },
            required: ["id", "serial", "name", "established_at", "departments"],
          },
          "default.o2": {
            type: "object",
            properties: {
              id: {
                description: "@format uuid",
                type: "string",
              },
              code: {
                type: "string",
              },
              sales: {
                type: "number",
              },
              created_at: {
                description: "@format date-time",
                type: "string",
              },
              children: {
                type: "array",
                items: {
                  $ref: "#/$defs/default.o2",
                },
              },
              employees: {
                type: "array",
                items: {
                  $ref: "#/$defs/default.o1",
                },
              },
            },
            required: [
              "id",
              "code",
              "sales",
              "created_at",
              "children",
              "employees",
            ],
          },
        },
      },
      output: {
        $ref: "#/$defs/default.o2",
      },
      validate: (() => {
        const _io0 = (input: any): boolean =>
          "object" === typeof input.company &&
          null !== input.company &&
          _io1(input.company) &&
          "object" === typeof input.department &&
          null !== input.department &&
          _io2(input.department);
        const _io1 = (input: any): boolean =>
          "string" === typeof input.id &&
          __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
          "number" === typeof input.serial &&
          Number.isFinite(input.serial) &&
          "string" === typeof input.name &&
          "string" === typeof input.established_at &&
          __typia_transform__isFormatDateTime._isFormatDateTime(
            input.established_at,
          ) &&
          Array.isArray(input.departments) &&
          input.departments.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && _io2(elem),
          );
        const _io2 = (input: any): boolean =>
          "string" === typeof input.id &&
          __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
          "string" === typeof input.code &&
          "number" === typeof input.sales &&
          Number.isFinite(input.sales) &&
          "string" === typeof input.created_at &&
          __typia_transform__isFormatDateTime._isFormatDateTime(
            input.created_at,
          ) &&
          Array.isArray(input.children) &&
          input.children.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && _io2(elem),
          ) &&
          Array.isArray(input.employees) &&
          input.employees.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && _io1(elem),
          );
        const _vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ((("object" === typeof input.company && null !== input.company) ||
              _report(_exceptionable, {
                path: _path + ".company",
                expected: "default",
                value: input.company,
              })) &&
              _vo1(
                input.company,
                _path + ".company",
                true && _exceptionable,
              )) ||
              _report(_exceptionable, {
                path: _path + ".company",
                expected: "default",
                value: input.company,
              }),
            ((("object" === typeof input.department &&
              null !== input.department) ||
              _report(_exceptionable, {
                path: _path + ".department",
                expected: "default.o1",
                value: input.department,
              })) &&
              _vo2(
                input.department,
                _path + ".department",
                true && _exceptionable,
              )) ||
              _report(_exceptionable, {
                path: _path + ".department",
                expected: "default.o1",
                value: input.department,
              }),
          ].every((flag: boolean) => flag);
        const _vo1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("string" === typeof input.id &&
              (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
                _report(_exceptionable, {
                  path: _path + ".id",
                  expected: 'string & Format<"uuid">',
                  value: input.id,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".id",
                expected: '(string & Format<"uuid">)',
                value: input.id,
              }),
            ("number" === typeof input.serial &&
              Number.isFinite(input.serial)) ||
              _report(_exceptionable, {
                path: _path + ".serial",
                expected: "number",
                value: input.serial,
              }),
            "string" === typeof input.name ||
              _report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              }),
            ("string" === typeof input.established_at &&
              (__typia_transform__isFormatDateTime._isFormatDateTime(
                input.established_at,
              ) ||
                _report(_exceptionable, {
                  path: _path + ".established_at",
                  expected: 'string & Format<"date-time">',
                  value: input.established_at,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".established_at",
                expected: '(string & Format<"date-time">)',
                value: input.established_at,
              }),
            ((Array.isArray(input.departments) ||
              _report(_exceptionable, {
                path: _path + ".departments",
                expected: "Array<default>",
                value: input.departments,
              })) &&
              input.departments
                .map(
                  (elem: any, _index4: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      _report(_exceptionable, {
                        path: _path + ".departments[" + _index4 + "]",
                        expected: "default.o1",
                        value: elem,
                      })) &&
                      _vo2(
                        elem,
                        _path + ".departments[" + _index4 + "]",
                        true && _exceptionable,
                      )) ||
                    _report(_exceptionable, {
                      path: _path + ".departments[" + _index4 + "]",
                      expected: "default.o1",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              _report(_exceptionable, {
                path: _path + ".departments",
                expected: "Array<default>",
                value: input.departments,
              }),
          ].every((flag: boolean) => flag);
        const _vo2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("string" === typeof input.id &&
              (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
                _report(_exceptionable, {
                  path: _path + ".id",
                  expected: 'string & Format<"uuid">',
                  value: input.id,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".id",
                expected: '(string & Format<"uuid">)',
                value: input.id,
              }),
            "string" === typeof input.code ||
              _report(_exceptionable, {
                path: _path + ".code",
                expected: "string",
                value: input.code,
              }),
            ("number" === typeof input.sales && Number.isFinite(input.sales)) ||
              _report(_exceptionable, {
                path: _path + ".sales",
                expected: "number",
                value: input.sales,
              }),
            ("string" === typeof input.created_at &&
              (__typia_transform__isFormatDateTime._isFormatDateTime(
                input.created_at,
              ) ||
                _report(_exceptionable, {
                  path: _path + ".created_at",
                  expected: 'string & Format<"date-time">',
                  value: input.created_at,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".created_at",
                expected: '(string & Format<"date-time">)',
                value: input.created_at,
              }),
            ((Array.isArray(input.children) ||
              _report(_exceptionable, {
                path: _path + ".children",
                expected: "Array<default>",
                value: input.children,
              })) &&
              input.children
                .map(
                  (elem: any, _index5: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      _report(_exceptionable, {
                        path: _path + ".children[" + _index5 + "]",
                        expected: "default.o1",
                        value: elem,
                      })) &&
                      _vo2(
                        elem,
                        _path + ".children[" + _index5 + "]",
                        true && _exceptionable,
                      )) ||
                    _report(_exceptionable, {
                      path: _path + ".children[" + _index5 + "]",
                      expected: "default.o1",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              _report(_exceptionable, {
                path: _path + ".children",
                expected: "Array<default>",
                value: input.children,
              }),
            ((Array.isArray(input.employees) ||
              _report(_exceptionable, {
                path: _path + ".employees",
                expected: "Array<default>.o1",
                value: input.employees,
              })) &&
              input.employees
                .map(
                  (elem: any, _index6: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      _report(_exceptionable, {
                        path: _path + ".employees[" + _index6 + "]",
                        expected: "default",
                        value: elem,
                      })) &&
                      _vo1(
                        elem,
                        _path + ".employees[" + _index6 + "]",
                        true && _exceptionable,
                      )) ||
                    _report(_exceptionable, {
                      path: _path + ".employees[" + _index6 + "]",
                      expected: "default",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              _report(_exceptionable, {
                path: _path + ".employees",
                expected: "Array<default>.o1",
                value: input.employees,
              }),
          ].every((flag: boolean) => flag);
        const __is = (
          input: any,
        ): input is Parameters<IApplication["createDepartment"]>[0] =>
          "object" === typeof input && null !== input && _io0(input);
        let errors: any;
        let _report: any;
        return (
          input: any,
        ): import("typia").IValidation<
          Parameters<IApplication["createDepartment"]>[0]
        > => {
          if (false === __is(input)) {
            errors = [];
            _report = (
              __typia_transform__validateReport._validateReport as any
            )(errors);
            ((input: any, _path: string, _exceptionable: boolean = true) =>
              ((("object" === typeof input && null !== input) ||
                _report(true, {
                  path: _path + "",
                  expected: "__type",
                  value: input,
                })) &&
                _vo0(input, _path + "", true)) ||
              _report(true, {
                path: _path + "",
                expected: "__type",
                value: input,
              }))(input, "$input", true);
            const success = 0 === errors.length;
            return success
              ? {
                  success,
                  data: input,
                }
              : ({
                  success,
                  errors,
                  data: input,
                } as any);
          }
          return {
            success: true,
            data: input,
          } as any;
        };
      })(),
    },
    {
      name: "hire",
      parameters: {
        type: "object",
        properties: {
          company: {
            $ref: "#/$defs/default.o1",
          },
          department: {
            $ref: "#/$defs/default.o2",
          },
          employee: {
            $ref: "#/$defs/default.o1",
          },
        },
        required: ["company", "department", "employee"],
        additionalProperties: false,
        $defs: {
          "default.o1": {
            type: "object",
            properties: {
              id: {
                description: "@format uuid",
                type: "string",
              },
              serial: {
                type: "number",
              },
              name: {
                type: "string",
              },
              established_at: {
                description: "@format date-time",
                type: "string",
              },
              departments: {
                type: "array",
                items: {
                  $ref: "#/$defs/default.o2",
                },
              },
            },
            required: ["id", "serial", "name", "established_at", "departments"],
          },
          "default.o2": {
            type: "object",
            properties: {
              id: {
                description: "@format uuid",
                type: "string",
              },
              code: {
                type: "string",
              },
              sales: {
                type: "number",
              },
              created_at: {
                description: "@format date-time",
                type: "string",
              },
              children: {
                type: "array",
                items: {
                  $ref: "#/$defs/default.o2",
                },
              },
              employees: {
                type: "array",
                items: {
                  $ref: "#/$defs/default.o1",
                },
              },
            },
            required: [
              "id",
              "code",
              "sales",
              "created_at",
              "children",
              "employees",
            ],
          },
        },
      },
      output: {
        $ref: "#/$defs/default.o1",
      },
      validate: (() => {
        const _io0 = (input: any): boolean =>
          "object" === typeof input.company &&
          null !== input.company &&
          _io1(input.company) &&
          "object" === typeof input.department &&
          null !== input.department &&
          _io2(input.department) &&
          "object" === typeof input.employee &&
          null !== input.employee &&
          _io1(input.employee);
        const _io1 = (input: any): boolean =>
          "string" === typeof input.id &&
          __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
          "number" === typeof input.serial &&
          Number.isFinite(input.serial) &&
          "string" === typeof input.name &&
          "string" === typeof input.established_at &&
          __typia_transform__isFormatDateTime._isFormatDateTime(
            input.established_at,
          ) &&
          Array.isArray(input.departments) &&
          input.departments.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && _io2(elem),
          );
        const _io2 = (input: any): boolean =>
          "string" === typeof input.id &&
          __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
          "string" === typeof input.code &&
          "number" === typeof input.sales &&
          Number.isFinite(input.sales) &&
          "string" === typeof input.created_at &&
          __typia_transform__isFormatDateTime._isFormatDateTime(
            input.created_at,
          ) &&
          Array.isArray(input.children) &&
          input.children.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && _io2(elem),
          ) &&
          Array.isArray(input.employees) &&
          input.employees.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && _io1(elem),
          );
        const _vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ((("object" === typeof input.company && null !== input.company) ||
              _report(_exceptionable, {
                path: _path + ".company",
                expected: "default",
                value: input.company,
              })) &&
              _vo1(
                input.company,
                _path + ".company",
                true && _exceptionable,
              )) ||
              _report(_exceptionable, {
                path: _path + ".company",
                expected: "default",
                value: input.company,
              }),
            ((("object" === typeof input.department &&
              null !== input.department) ||
              _report(_exceptionable, {
                path: _path + ".department",
                expected: "default.o1",
                value: input.department,
              })) &&
              _vo2(
                input.department,
                _path + ".department",
                true && _exceptionable,
              )) ||
              _report(_exceptionable, {
                path: _path + ".department",
                expected: "default.o1",
                value: input.department,
              }),
            ((("object" === typeof input.employee && null !== input.employee) ||
              _report(_exceptionable, {
                path: _path + ".employee",
                expected: "default",
                value: input.employee,
              })) &&
              _vo1(
                input.employee,
                _path + ".employee",
                true && _exceptionable,
              )) ||
              _report(_exceptionable, {
                path: _path + ".employee",
                expected: "default",
                value: input.employee,
              }),
          ].every((flag: boolean) => flag);
        const _vo1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("string" === typeof input.id &&
              (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
                _report(_exceptionable, {
                  path: _path + ".id",
                  expected: 'string & Format<"uuid">',
                  value: input.id,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".id",
                expected: '(string & Format<"uuid">)',
                value: input.id,
              }),
            ("number" === typeof input.serial &&
              Number.isFinite(input.serial)) ||
              _report(_exceptionable, {
                path: _path + ".serial",
                expected: "number",
                value: input.serial,
              }),
            "string" === typeof input.name ||
              _report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              }),
            ("string" === typeof input.established_at &&
              (__typia_transform__isFormatDateTime._isFormatDateTime(
                input.established_at,
              ) ||
                _report(_exceptionable, {
                  path: _path + ".established_at",
                  expected: 'string & Format<"date-time">',
                  value: input.established_at,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".established_at",
                expected: '(string & Format<"date-time">)',
                value: input.established_at,
              }),
            ((Array.isArray(input.departments) ||
              _report(_exceptionable, {
                path: _path + ".departments",
                expected: "Array<default>",
                value: input.departments,
              })) &&
              input.departments
                .map(
                  (elem: any, _index4: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      _report(_exceptionable, {
                        path: _path + ".departments[" + _index4 + "]",
                        expected: "default.o1",
                        value: elem,
                      })) &&
                      _vo2(
                        elem,
                        _path + ".departments[" + _index4 + "]",
                        true && _exceptionable,
                      )) ||
                    _report(_exceptionable, {
                      path: _path + ".departments[" + _index4 + "]",
                      expected: "default.o1",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              _report(_exceptionable, {
                path: _path + ".departments",
                expected: "Array<default>",
                value: input.departments,
              }),
          ].every((flag: boolean) => flag);
        const _vo2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("string" === typeof input.id &&
              (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
                _report(_exceptionable, {
                  path: _path + ".id",
                  expected: 'string & Format<"uuid">',
                  value: input.id,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".id",
                expected: '(string & Format<"uuid">)',
                value: input.id,
              }),
            "string" === typeof input.code ||
              _report(_exceptionable, {
                path: _path + ".code",
                expected: "string",
                value: input.code,
              }),
            ("number" === typeof input.sales && Number.isFinite(input.sales)) ||
              _report(_exceptionable, {
                path: _path + ".sales",
                expected: "number",
                value: input.sales,
              }),
            ("string" === typeof input.created_at &&
              (__typia_transform__isFormatDateTime._isFormatDateTime(
                input.created_at,
              ) ||
                _report(_exceptionable, {
                  path: _path + ".created_at",
                  expected: 'string & Format<"date-time">',
                  value: input.created_at,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".created_at",
                expected: '(string & Format<"date-time">)',
                value: input.created_at,
              }),
            ((Array.isArray(input.children) ||
              _report(_exceptionable, {
                path: _path + ".children",
                expected: "Array<default>",
                value: input.children,
              })) &&
              input.children
                .map(
                  (elem: any, _index5: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      _report(_exceptionable, {
                        path: _path + ".children[" + _index5 + "]",
                        expected: "default.o1",
                        value: elem,
                      })) &&
                      _vo2(
                        elem,
                        _path + ".children[" + _index5 + "]",
                        true && _exceptionable,
                      )) ||
                    _report(_exceptionable, {
                      path: _path + ".children[" + _index5 + "]",
                      expected: "default.o1",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              _report(_exceptionable, {
                path: _path + ".children",
                expected: "Array<default>",
                value: input.children,
              }),
            ((Array.isArray(input.employees) ||
              _report(_exceptionable, {
                path: _path + ".employees",
                expected: "Array<default>.o1",
                value: input.employees,
              })) &&
              input.employees
                .map(
                  (elem: any, _index6: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      _report(_exceptionable, {
                        path: _path + ".employees[" + _index6 + "]",
                        expected: "default",
                        value: elem,
                      })) &&
                      _vo1(
                        elem,
                        _path + ".employees[" + _index6 + "]",
                        true && _exceptionable,
                      )) ||
                    _report(_exceptionable, {
                      path: _path + ".employees[" + _index6 + "]",
                      expected: "default",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              _report(_exceptionable, {
                path: _path + ".employees",
                expected: "Array<default>.o1",
                value: input.employees,
              }),
          ].every((flag: boolean) => flag);
        const __is = (
          input: any,
        ): input is Parameters<IApplication["hire"]>[0] =>
          "object" === typeof input && null !== input && _io0(input);
        let errors: any;
        let _report: any;
        return (
          input: any,
        ): import("typia").IValidation<Parameters<IApplication["hire"]>[0]> => {
          if (false === __is(input)) {
            errors = [];
            _report = (
              __typia_transform__validateReport._validateReport as any
            )(errors);
            ((input: any, _path: string, _exceptionable: boolean = true) =>
              ((("object" === typeof input && null !== input) ||
                _report(true, {
                  path: _path + "",
                  expected: "__type",
                  value: input,
                })) &&
                _vo0(input, _path + "", true)) ||
              _report(true, {
                path: _path + "",
                expected: "__type",
                value: input,
              }))(input, "$input", true);
            const success = 0 === errors.length;
            return success
              ? {
                  success,
                  data: input,
                }
              : ({
                  success,
                  errors,
                  data: input,
                } as any);
          }
          return {
            success: true,
            data: input,
          } as any;
        };
      })(),
    },
    {
      name: "erase",
      parameters: {
        type: "object",
        properties: {
          entity: {
            anyOf: [
              {
                $ref: "#/$defs/default.o1",
              },
              {
                $ref: "#/$defs/default.o2",
              },
            ],
          },
        },
        required: ["entity"],
        additionalProperties: false,
        $defs: {
          "default.o1": {
            type: "object",
            properties: {
              id: {
                description: "@format uuid",
                type: "string",
              },
              serial: {
                type: "number",
              },
              name: {
                type: "string",
              },
              established_at: {
                description: "@format date-time",
                type: "string",
              },
              departments: {
                type: "array",
                items: {
                  $ref: "#/$defs/default.o2",
                },
              },
            },
            required: ["id", "serial", "name", "established_at", "departments"],
          },
          "default.o2": {
            type: "object",
            properties: {
              id: {
                description: "@format uuid",
                type: "string",
              },
              code: {
                type: "string",
              },
              sales: {
                type: "number",
              },
              created_at: {
                description: "@format date-time",
                type: "string",
              },
              children: {
                type: "array",
                items: {
                  $ref: "#/$defs/default.o2",
                },
              },
              employees: {
                type: "array",
                items: {
                  $ref: "#/$defs/default.o1",
                },
              },
            },
            required: [
              "id",
              "code",
              "sales",
              "created_at",
              "children",
              "employees",
            ],
          },
        },
      },
      output: {
        description: "@format uuid",
        type: "string",
      },
      validate: (() => {
        const _io0 = (input: any): boolean =>
          "object" === typeof input.entity &&
          null !== input.entity &&
          _iu0(input.entity);
        const _io1 = (input: any): boolean =>
          "string" === typeof input.id &&
          __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
          "number" === typeof input.serial &&
          Number.isFinite(input.serial) &&
          "string" === typeof input.name &&
          "string" === typeof input.established_at &&
          __typia_transform__isFormatDateTime._isFormatDateTime(
            input.established_at,
          ) &&
          Array.isArray(input.departments) &&
          input.departments.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && _io2(elem),
          );
        const _io2 = (input: any): boolean =>
          "string" === typeof input.id &&
          __typia_transform__isFormatUuid._isFormatUuid(input.id) &&
          "string" === typeof input.code &&
          "number" === typeof input.sales &&
          Number.isFinite(input.sales) &&
          "string" === typeof input.created_at &&
          __typia_transform__isFormatDateTime._isFormatDateTime(
            input.created_at,
          ) &&
          Array.isArray(input.children) &&
          input.children.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && _io2(elem),
          ) &&
          Array.isArray(input.employees) &&
          input.employees.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && _io1(elem),
          );
        const _iu0 = (input: any): any =>
          (() => {
            if (undefined !== input.serial) return _io1(input);
            else if (undefined !== input.code) return _io2(input);
            else return false;
          })();
        const _vo0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ((("object" === typeof input.entity && null !== input.entity) ||
              _report(_exceptionable, {
                path: _path + ".entity",
                expected: "(default | default.o1)",
                value: input.entity,
              })) &&
              _vu0(input.entity, _path + ".entity", true && _exceptionable)) ||
              _report(_exceptionable, {
                path: _path + ".entity",
                expected: "(default | default.o1)",
                value: input.entity,
              }),
          ].every((flag: boolean) => flag);
        const _vo1 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("string" === typeof input.id &&
              (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
                _report(_exceptionable, {
                  path: _path + ".id",
                  expected: 'string & Format<"uuid">',
                  value: input.id,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".id",
                expected: '(string & Format<"uuid">)',
                value: input.id,
              }),
            ("number" === typeof input.serial &&
              Number.isFinite(input.serial)) ||
              _report(_exceptionable, {
                path: _path + ".serial",
                expected: "number",
                value: input.serial,
              }),
            "string" === typeof input.name ||
              _report(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              }),
            ("string" === typeof input.established_at &&
              (__typia_transform__isFormatDateTime._isFormatDateTime(
                input.established_at,
              ) ||
                _report(_exceptionable, {
                  path: _path + ".established_at",
                  expected: 'string & Format<"date-time">',
                  value: input.established_at,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".established_at",
                expected: '(string & Format<"date-time">)',
                value: input.established_at,
              }),
            ((Array.isArray(input.departments) ||
              _report(_exceptionable, {
                path: _path + ".departments",
                expected: "Array<default>",
                value: input.departments,
              })) &&
              input.departments
                .map(
                  (elem: any, _index4: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      _report(_exceptionable, {
                        path: _path + ".departments[" + _index4 + "]",
                        expected: "default.o1",
                        value: elem,
                      })) &&
                      _vo2(
                        elem,
                        _path + ".departments[" + _index4 + "]",
                        true && _exceptionable,
                      )) ||
                    _report(_exceptionable, {
                      path: _path + ".departments[" + _index4 + "]",
                      expected: "default.o1",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              _report(_exceptionable, {
                path: _path + ".departments",
                expected: "Array<default>",
                value: input.departments,
              }),
          ].every((flag: boolean) => flag);
        const _vo2 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): boolean =>
          [
            ("string" === typeof input.id &&
              (__typia_transform__isFormatUuid._isFormatUuid(input.id) ||
                _report(_exceptionable, {
                  path: _path + ".id",
                  expected: 'string & Format<"uuid">',
                  value: input.id,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".id",
                expected: '(string & Format<"uuid">)',
                value: input.id,
              }),
            "string" === typeof input.code ||
              _report(_exceptionable, {
                path: _path + ".code",
                expected: "string",
                value: input.code,
              }),
            ("number" === typeof input.sales && Number.isFinite(input.sales)) ||
              _report(_exceptionable, {
                path: _path + ".sales",
                expected: "number",
                value: input.sales,
              }),
            ("string" === typeof input.created_at &&
              (__typia_transform__isFormatDateTime._isFormatDateTime(
                input.created_at,
              ) ||
                _report(_exceptionable, {
                  path: _path + ".created_at",
                  expected: 'string & Format<"date-time">',
                  value: input.created_at,
                }))) ||
              _report(_exceptionable, {
                path: _path + ".created_at",
                expected: '(string & Format<"date-time">)',
                value: input.created_at,
              }),
            ((Array.isArray(input.children) ||
              _report(_exceptionable, {
                path: _path + ".children",
                expected: "Array<default>",
                value: input.children,
              })) &&
              input.children
                .map(
                  (elem: any, _index5: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      _report(_exceptionable, {
                        path: _path + ".children[" + _index5 + "]",
                        expected: "default.o1",
                        value: elem,
                      })) &&
                      _vo2(
                        elem,
                        _path + ".children[" + _index5 + "]",
                        true && _exceptionable,
                      )) ||
                    _report(_exceptionable, {
                      path: _path + ".children[" + _index5 + "]",
                      expected: "default.o1",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              _report(_exceptionable, {
                path: _path + ".children",
                expected: "Array<default>",
                value: input.children,
              }),
            ((Array.isArray(input.employees) ||
              _report(_exceptionable, {
                path: _path + ".employees",
                expected: "Array<default>.o1",
                value: input.employees,
              })) &&
              input.employees
                .map(
                  (elem: any, _index6: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      _report(_exceptionable, {
                        path: _path + ".employees[" + _index6 + "]",
                        expected: "default",
                        value: elem,
                      })) &&
                      _vo1(
                        elem,
                        _path + ".employees[" + _index6 + "]",
                        true && _exceptionable,
                      )) ||
                    _report(_exceptionable, {
                      path: _path + ".employees[" + _index6 + "]",
                      expected: "default",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              _report(_exceptionable, {
                path: _path + ".employees",
                expected: "Array<default>.o1",
                value: input.employees,
              }),
          ].every((flag: boolean) => flag);
        const _vu0 = (
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): any =>
          (() => {
            if (undefined !== input.serial)
              return _vo1(input, _path, true && _exceptionable);
            else if (undefined !== input.code)
              return _vo2(input, _path, true && _exceptionable);
            else
              return _report(_exceptionable, {
                path: _path,
                expected: "(default | default.o1)",
                value: input,
              });
          })();
        const __is = (
          input: any,
        ): input is Parameters<IApplication["erase"]>[0] =>
          "object" === typeof input && null !== input && _io0(input);
        let errors: any;
        let _report: any;
        return (
          input: any,
        ): import("typia").IValidation<
          Parameters<IApplication["erase"]>[0]
        > => {
          if (false === __is(input)) {
            errors = [];
            _report = (
              __typia_transform__validateReport._validateReport as any
            )(errors);
            ((input: any, _path: string, _exceptionable: boolean = true) =>
              ((("object" === typeof input && null !== input) ||
                _report(true, {
                  path: _path + "",
                  expected: "__type",
                  value: input,
                })) &&
                _vo0(input, _path + "", true)) ||
              _report(true, {
                path: _path + "",
                expected: "__type",
                value: input,
              }))(input, "$input", true);
            const success = 0 === errors.length;
            return success
              ? {
                  success,
                  data: input,
                }
              : ({
                  success,
                  errors,
                  data: input,
                } as any);
          }
          return {
            success: true,
            data: input,
          } as any;
        };
      })(),
    },
  ],
} as import("typia").ILlmApplicationOfValidate<"chatgpt">;
export default application;
