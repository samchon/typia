import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_assertGuardEquals } from "../../../internal/_test_assertGuardEquals";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_assertGuardEqualsCustom_ObjectNullable =
  _test_assertGuardEquals(CustomGuardError)("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): asserts input is ObjectNullable => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is ObjectNullable => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          Array.isArray(input.value) &&
          input.value.every(
            (elem: any, _index1: number) =>
              "object" === typeof elem &&
              null !== elem &&
              $io1(elem, true && _exceptionable),
          ) &&
          (1 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["value"].some((prop: any) => key === prop)) return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
          "string" === typeof input.name &&
          "object" === typeof input.manufacturer &&
          null !== input.manufacturer &&
          $io2(input.manufacturer, true && _exceptionable) &&
          (null === input.brand ||
            ("object" === typeof input.brand &&
              null !== input.brand &&
              $io3(input.brand, true && _exceptionable))) &&
          (null === input.similar ||
            ("object" === typeof input.similar &&
              null !== input.similar &&
              $iu0(input.similar, true && _exceptionable))) &&
          (4 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                ["name", "manufacturer", "brand", "similar"].some(
                  (prop: any) => key === prop,
                )
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
          "manufacturer" === input.type &&
          "string" === typeof input.name &&
          (2 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["type", "name"].some((prop: any) => key === prop))
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
          "brand" === input.type &&
          "string" === typeof input.name &&
          (2 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (["type", "name"].some((prop: any) => key === prop))
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $iu0 = (input: any, _exceptionable: boolean = true): any =>
          (() => {
            if ("brand" === input.type)
              return $io3(input, true && _exceptionable);
            else if ("manufacturer" === input.type)
              return $io2(input, true && _exceptionable);
            else return false;
          })();
        return "object" === typeof input && null !== input && $io0(input, true);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ObjectNullable => {
          const $guard = (typia.assertGuardEquals as any).guard;
          const $join = (typia.assertGuardEquals as any).join;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (((Array.isArray(input.value) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "Array<ObjectNullable.IProduct>",
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
                        expected: "ObjectNullable.IProduct",
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
                      expected: "ObjectNullable.IProduct",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".value",
                  expected: "Array<ObjectNullable.IProduct>",
                  value: input.value,
                },
                errorFactory,
              )) &&
            (1 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["value"].some((prop: any) => key === prop)) return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
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
            (((("object" === typeof input.manufacturer &&
              null !== input.manufacturer) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".manufacturer",
                  expected: "ObjectNullable.IManufacturer",
                  value: input.manufacturer,
                },
                errorFactory,
              )) &&
              $ao2(
                input.manufacturer,
                _path + ".manufacturer",
                true && _exceptionable,
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".manufacturer",
                  expected: "ObjectNullable.IManufacturer",
                  value: input.manufacturer,
                },
                errorFactory,
              )) &&
            (null === input.brand ||
              ((("object" === typeof input.brand && null !== input.brand) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".brand",
                    expected: "(ObjectNullable.IBrand | null)",
                    value: input.brand,
                  },
                  errorFactory,
                )) &&
                $ao3(input.brand, _path + ".brand", true && _exceptionable)) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".brand",
                  expected: "(ObjectNullable.IBrand | null)",
                  value: input.brand,
                },
                errorFactory,
              )) &&
            (null === input.similar ||
              ((("object" === typeof input.similar && null !== input.similar) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".similar",
                    expected:
                      "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                    value: input.similar,
                  },
                  errorFactory,
                )) &&
                $au0(
                  input.similar,
                  _path + ".similar",
                  true && _exceptionable,
                )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".similar",
                  expected:
                    "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                  value: input.similar,
                },
                errorFactory,
              )) &&
            (4 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  ["name", "manufacturer", "brand", "similar"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          const $ao2 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("manufacturer" === input.type ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".type",
                  expected: '"manufacturer"',
                  value: input.type,
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
            (2 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["type", "name"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          const $ao3 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("brand" === input.type ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".type",
                  expected: '"brand"',
                  value: input.type,
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
            (2 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (["type", "name"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
          const $au0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): any =>
            (() => {
              if ("brand" === input.type)
                return $ao3(input, _path, true && _exceptionable);
              else if ("manufacturer" === input.type)
                return $ao2(input, _path, true && _exceptionable);
              else
                return $guard(
                  _exceptionable,
                  {
                    path: _path,
                    expected:
                      "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                    value: input,
                  },
                  errorFactory,
                );
            })();
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectNullable",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectNullable",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
    })(input, (p) => new CustomGuardError(p)),
  );
