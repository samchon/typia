import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectPropertyNullable } from "../../../structures/ObjectPropertyNullable";

export const test_json_createAssertStringifyCustom_ObjectPropertyNullable =
  _test_json_assertStringify(CustomGuardError)(
    "ObjectPropertyNullable",
  )<ObjectPropertyNullable>(ObjectPropertyNullable)(
    (
      input: any,
      errorFactory: import("typia").TypeGuardError.IProps = (p) =>
        new CustomGuardError(p),
    ): string => {
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): ObjectPropertyNullable => {
        const $guard = (typia.json.createAssertStringify as any).guard(
          errorFactory,
        );
        const __is = (input: any): input is ObjectPropertyNullable => {
          const $io0 = (input: any): boolean =>
            null === input.value || "boolean" === typeof input.value;
          const $io1 = (input: any): boolean =>
            null === input.value ||
            ("number" === typeof input.value && Number.isFinite(input.value));
          const $io2 = (input: any): boolean =>
            null === input.value || "string" === typeof input.value;
          const $io3 = (input: any): boolean =>
            null === input.value ||
            ("object" === typeof input.value &&
              null !== input.value &&
              $io4(input.value));
          const $io4 = (input: any): boolean =>
            "string" === typeof input.id &&
            (null === input.name || "string" === typeof input.name) &&
            (undefined === input.grade ||
              ("number" === typeof input.grade &&
                Number.isFinite(input.grade))) &&
            (null === input.serial ||
              undefined === input.serial ||
              ("number" === typeof input.serial &&
                Number.isFinite(input.serial))) &&
            (null === input.activated || "boolean" === typeof input.activated);
          return (
            Array.isArray(input) &&
            input.length === 4 &&
            Array.isArray(input[0]) &&
            input[0].every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            ) &&
            Array.isArray(input[1]) &&
            input[1].every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            ) &&
            Array.isArray(input[2]) &&
            input[2].every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io2(elem),
            ) &&
            Array.isArray(input[3]) &&
            input[3].every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io3(elem),
            )
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectPropertyNullable => {
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              null === input.value ||
              "boolean" === typeof input.value ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "(boolean | null)",
                value: input.value,
              });
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              null === input.value ||
              ("number" === typeof input.value &&
                Number.isFinite(input.value)) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "(null | number)",
                value: input.value,
              });
            const $ao2 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              null === input.value ||
              "string" === typeof input.value ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "(null | string)",
                value: input.value,
              });
            const $ao3 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              null === input.value ||
              ((("object" === typeof input.value && null !== input.value) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "(ObjectPropertyNullable.IMember | null)",
                  value: input.value,
                })) &&
                $ao4(input.value, _path + ".value", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "(ObjectPropertyNullable.IMember | null)",
                value: input.value,
              });
            const $ao4 = (
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
              (null === input.name ||
                "string" === typeof input.name ||
                $guard(_exceptionable, {
                  path: _path + ".name",
                  expected: "(null | string)",
                  value: input.name,
                })) &&
              (undefined === input.grade ||
                ("number" === typeof input.grade &&
                  Number.isFinite(input.grade)) ||
                $guard(_exceptionable, {
                  path: _path + ".grade",
                  expected: "(number | undefined)",
                  value: input.grade,
                })) &&
              (null === input.serial ||
                undefined === input.serial ||
                ("number" === typeof input.serial &&
                  Number.isFinite(input.serial)) ||
                $guard(_exceptionable, {
                  path: _path + ".serial",
                  expected: "(null | number | undefined)",
                  value: input.serial,
                })) &&
              (null === input.activated ||
                "boolean" === typeof input.activated ||
                $guard(_exceptionable, {
                  path: _path + ".activated",
                  expected: "(boolean | null)",
                  value: input.activated,
                }));
            return (
              ((Array.isArray(input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectPropertyNullable",
                  value: input,
                })) &&
                (input.length === 4 ||
                  $guard(true, {
                    path: _path + "",
                    expected:
                      "[Array<ObjectPropertyNullable.IPointer<boolean>>, Array<ObjectPropertyNullable.IPointer<number>>, Array<ObjectPropertyNullable.IPointer<string>>, Array<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>]",
                    value: input,
                  })) &&
                (((Array.isArray(input[0]) ||
                  $guard(true, {
                    path: _path + "[0]",
                    expected: "Array<ObjectPropertyNullable.IPointer<boolean>>",
                    value: input[0],
                  })) &&
                  input[0].every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(true, {
                          path: _path + "[0][" + _index1 + "]",
                          expected: "ObjectPropertyNullable.IPointer<boolean>",
                          value: elem,
                        })) &&
                        $ao0(elem, _path + "[0][" + _index1 + "]", true)) ||
                      $guard(true, {
                        path: _path + "[0][" + _index1 + "]",
                        expected: "ObjectPropertyNullable.IPointer<boolean>",
                        value: elem,
                      }),
                  )) ||
                  $guard(true, {
                    path: _path + "[0]",
                    expected: "Array<ObjectPropertyNullable.IPointer<boolean>>",
                    value: input[0],
                  })) &&
                (((Array.isArray(input[1]) ||
                  $guard(true, {
                    path: _path + "[1]",
                    expected: "Array<ObjectPropertyNullable.IPointer<number>>",
                    value: input[1],
                  })) &&
                  input[1].every(
                    (elem: any, _index2: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(true, {
                          path: _path + "[1][" + _index2 + "]",
                          expected: "ObjectPropertyNullable.IPointer<number>",
                          value: elem,
                        })) &&
                        $ao1(elem, _path + "[1][" + _index2 + "]", true)) ||
                      $guard(true, {
                        path: _path + "[1][" + _index2 + "]",
                        expected: "ObjectPropertyNullable.IPointer<number>",
                        value: elem,
                      }),
                  )) ||
                  $guard(true, {
                    path: _path + "[1]",
                    expected: "Array<ObjectPropertyNullable.IPointer<number>>",
                    value: input[1],
                  })) &&
                (((Array.isArray(input[2]) ||
                  $guard(true, {
                    path: _path + "[2]",
                    expected: "Array<ObjectPropertyNullable.IPointer<string>>",
                    value: input[2],
                  })) &&
                  input[2].every(
                    (elem: any, _index3: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(true, {
                          path: _path + "[2][" + _index3 + "]",
                          expected: "ObjectPropertyNullable.IPointer<string>",
                          value: elem,
                        })) &&
                        $ao2(elem, _path + "[2][" + _index3 + "]", true)) ||
                      $guard(true, {
                        path: _path + "[2][" + _index3 + "]",
                        expected: "ObjectPropertyNullable.IPointer<string>",
                        value: elem,
                      }),
                  )) ||
                  $guard(true, {
                    path: _path + "[2]",
                    expected: "Array<ObjectPropertyNullable.IPointer<string>>",
                    value: input[2],
                  })) &&
                (((Array.isArray(input[3]) ||
                  $guard(true, {
                    path: _path + "[3]",
                    expected:
                      "Array<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>",
                    value: input[3],
                  })) &&
                  input[3].every(
                    (elem: any, _index4: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(true, {
                          path: _path + "[3][" + _index4 + "]",
                          expected:
                            "ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>",
                          value: elem,
                        })) &&
                        $ao3(elem, _path + "[3][" + _index4 + "]", true)) ||
                      $guard(true, {
                        path: _path + "[3][" + _index4 + "]",
                        expected:
                          "ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>",
                        value: elem,
                      }),
                  )) ||
                  $guard(true, {
                    path: _path + "[3]",
                    expected:
                      "Array<ObjectPropertyNullable.IPointer<ObjectPropertyNullable.IMember>>",
                    value: input[3],
                  }))) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectPropertyNullable",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ObjectPropertyNullable): string => {
        const $io4 = (input: any): boolean =>
          "string" === typeof input.id &&
          (null === input.name || "string" === typeof input.name) &&
          (undefined === input.grade || "number" === typeof input.grade) &&
          (null === input.serial ||
            undefined === input.serial ||
            "number" === typeof input.serial) &&
          (null === input.activated || "boolean" === typeof input.activated);
        const $number = (typia.json.createAssertStringify as any).number;
        const $string = (typia.json.createAssertStringify as any).string;
        const $so0 = (input: any): any =>
          `{"value":${null !== input.value ? input.value : "null"}}`;
        const $so1 = (input: any): any =>
          `{"value":${null !== input.value ? $number(input.value) : "null"}}`;
        const $so2 = (input: any): any =>
          `{"value":${null !== input.value ? $string(input.value) : "null"}}`;
        const $so3 = (input: any): any =>
          `{"value":${null !== input.value ? $so4(input.value) : "null"}}`;
        const $so4 = (input: any): any =>
          `{${
            undefined === input.grade
              ? ""
              : `"grade":${
                  undefined !== input.grade ? $number(input.grade) : undefined
                },`
          }${
            undefined === input.serial
              ? ""
              : `"serial":${
                  undefined !== input.serial
                    ? null !== input.serial
                      ? $number(input.serial)
                      : "null"
                    : undefined
                },`
          }"id":${$string(input.id)},"name":${
            null !== input.name ? $string(input.name) : "null"
          },"activated":${
            null !== input.activated ? input.activated : "null"
          }}`;
        return `[${`[${input[0]
          .map((elem: any) => $so0(elem))
          .join(",")}]`},${`[${input[1]
          .map((elem: any) => $so1(elem))
          .join(",")}]`},${`[${input[2]
          .map((elem: any) => $so2(elem))
          .join(",")}]`},${`[${input[3]
          .map((elem: any) => $so3(elem))
          .join(",")}]`}]`;
      };
      return stringify(assert(input, errorFactory));
    },
  );
