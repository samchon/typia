import typia from "typia";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectAlias } from "../../../structures/ObjectAlias";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_json_assertStringifyCustom_ObjectAlias =
  _test_json_assertStringify(CustomGuardError)("ObjectAlias")<ObjectAlias>(
    ObjectAlias,
  )((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectAlias => {
        const __is = (input: any): input is ObjectAlias => {
          const $io0 = (input: any): boolean =>
            (null === input.id || "string" === typeof input.id) &&
            "string" === typeof input.email &&
            "string" === typeof input.name &&
            (null === input.sex ||
              2 === input.sex ||
              1 === input.sex ||
              "male" === input.sex ||
              "female" === input.sex) &&
            (null === input.age ||
              ("number" === typeof input.age && Number.isFinite(input.age))) &&
            (null === input.dead || "boolean" === typeof input.dead);
          return (
            Array.isArray(input) &&
            input.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            )
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectAlias => {
            const $guard = (typia.json.assertStringify as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (null === input.id ||
                "string" === typeof input.id ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: "(null | string)",
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.email ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".email",
                    expected: "string",
                    value: input.email,
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
              (null === input.sex ||
                2 === input.sex ||
                1 === input.sex ||
                "male" === input.sex ||
                "female" === input.sex ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".sex",
                    expected: '("female" | "male" | 1 | 2 | null)',
                    value: input.sex,
                  },
                  errorFactory,
                )) &&
              (null === input.age ||
                ("number" === typeof input.age && Number.isFinite(input.age)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".age",
                    expected: "(null | number)",
                    value: input.age,
                  },
                  errorFactory,
                )) &&
              (null === input.dead ||
                "boolean" === typeof input.dead ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".dead",
                    expected: "(boolean | null)",
                    value: input.dead,
                  },
                  errorFactory,
                ));
            return (
              ((Array.isArray(input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectAlias",
                    value: input,
                  },
                  errorFactory,
                )) &&
                input.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected: "ObjectAlias.IMember",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                    $guard(
                      true,
                      {
                        path: _path + "[" + _index1 + "]",
                        expected: "ObjectAlias.IMember",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectAlias",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ObjectAlias): string => {
        const $string = (typia.json.assertStringify as any).string;
        const $number = (typia.json.assertStringify as any).number;
        const $throws = (typia.json.assertStringify as any).throws;
        const $so0 = (input: any): any =>
          `{"id":${
            null !== input.id ? $string(input.id) : "null"
          },"email":${$string(input.email)},"name":${$string(
            input.name,
          )},"sex":${
            null !== input.sex
              ? (() => {
                  if ("string" === typeof input.sex) return $string(input.sex);
                  if ("number" === typeof input.sex) return $number(input.sex);
                  if ("string" === typeof input.sex)
                    return '"' + input.sex + '"';
                  $throws({
                    expected: '("female" | "male" | 1 | 2 | null)',
                    value: input.sex,
                  });
                })()
              : "null"
          },"age":${null !== input.age ? $number(input.age) : "null"},"dead":${
            null !== input.dead ? input.dead : "null"
          }}`;
        return `[${input.map((elem: any) => $so0(elem)).join(",")}]`;
      };
      return stringify(assert(input, errorFactory));
    })(input, (p) => new CustomGuardError(p)),
  );
