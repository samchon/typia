import typia from "typia";

import { _test_validate } from "../../../internal/_test_validate";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_validate_ObjectNullable = _test_validate(
  "ObjectNullable",
)<ObjectNullable>(ObjectNullable)((input) =>
  ((input: any): typia.IValidation<ObjectNullable> => {
    const errors = [] as any[];
    const __is = (input: any): input is ObjectNullable => {
      const $io0 = (input: any): boolean =>
        Array.isArray(input.value) &&
        input.value.every(
          (elem: any) =>
            "object" === typeof elem && null !== elem && $io1(elem),
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
        "manufacturer" === input.type && "string" === typeof input.name;
      const $io3 = (input: any): boolean =>
        "brand" === input.type && "string" === typeof input.name;
      const $iu0 = (input: any): any =>
        (() => {
          if ("brand" === input.type) return $io3(input);
          else if ("manufacturer" === input.type) return $io2(input);
          else return false;
        })();
      return "object" === typeof input && null !== input && $io0(input);
    };
    if (false === __is(input)) {
      const $report = (typia.validate as any).report(errors);
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
                expected: "Array<ObjectNullable.IProduct>",
                value: input.value,
              })) &&
              input.value
                .map(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $report(_exceptionable, {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "ObjectNullable.IProduct",
                        value: elem,
                      })) &&
                      $vo1(
                        elem,
                        _path + ".value[" + _index1 + "]",
                        true && _exceptionable,
                      )) ||
                    $report(_exceptionable, {
                      path: _path + ".value[" + _index1 + "]",
                      expected: "ObjectNullable.IProduct",
                      value: elem,
                    }),
                )
                .every((flag: boolean) => flag)) ||
              $report(_exceptionable, {
                path: _path + ".value",
                expected: "Array<ObjectNullable.IProduct>",
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
                expected: "ObjectNullable.IManufacturer",
                value: input.manufacturer,
              })) &&
              $vo2(
                input.manufacturer,
                _path + ".manufacturer",
                true && _exceptionable,
              )) ||
              $report(_exceptionable, {
                path: _path + ".manufacturer",
                expected: "ObjectNullable.IManufacturer",
                value: input.manufacturer,
              }),
            null === input.brand ||
              ((("object" === typeof input.brand && null !== input.brand) ||
                $report(_exceptionable, {
                  path: _path + ".brand",
                  expected: "(ObjectNullable.IBrand | null)",
                  value: input.brand,
                })) &&
                $vo3(input.brand, _path + ".brand", true && _exceptionable)) ||
              $report(_exceptionable, {
                path: _path + ".brand",
                expected: "(ObjectNullable.IBrand | null)",
                value: input.brand,
              }),
            null === input.similar ||
              ((("object" === typeof input.similar && null !== input.similar) ||
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
              return $vo3(input, _path, true && _exceptionable);
            else if ("manufacturer" === input.type)
              return $vo2(input, _path, true && _exceptionable);
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
  })(input),
);
