import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_notation_validateSnake_ObjectNullable =
  _test_notation_validateGeneral("ObjectNullable")<ObjectNullable>(
    ObjectNullable,
  )<typia.SnakeCase<ObjectNullable>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<ObjectNullable>> => {
        const validate = (input: any): typia.IValidation<ObjectNullable> => {
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
            const $report = require("typia/lib/functional/$report").$report(
              errors,
            );
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
                    ((("object" === typeof input.brand &&
                      null !== input.brand) ||
                      $report(_exceptionable, {
                        path: _path + ".brand",
                        expected: "(ObjectNullable.IBrand | null)",
                        value: input.brand,
                      })) &&
                      $vo3(
                        input.brand,
                        _path + ".brand",
                        true && _exceptionable,
                      )) ||
                    $report(_exceptionable, {
                      path: _path + ".brand",
                      expected: "(ObjectNullable.IBrand | null)",
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
        };
        const general = (
          input: ObjectNullable,
        ): typia.SnakeCase<ObjectNullable> => {
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
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $throws = require("typia/lib/functional/$throws").$throws(
            "typia.notations.validateSnake",
          );
          const $cp0 = (input: any) =>
            input.map((elem: any) =>
              "object" === typeof elem && null !== elem
                ? $co1(elem)
                : (elem as any),
            );
          const $co0 = (input: any): any => ({
            value: Array.isArray(input.value)
              ? $cp0(input.value)
              : (input.value as any),
          });
          const $co1 = (input: any): any => ({
            name: input.name as any,
            manufacturer:
              "object" === typeof input.manufacturer &&
              null !== input.manufacturer
                ? $co2(input.manufacturer)
                : (input.manufacturer as any),
            brand:
              "object" === typeof input.brand && null !== input.brand
                ? $co3(input.brand)
                : (input.brand as any),
            similar:
              "object" === typeof input.similar && null !== input.similar
                ? $cu0(input.similar)
                : (input.similar as any),
          });
          const $co2 = (input: any): any => ({
            type: input.type as any,
            name: input.name as any,
          });
          const $co3 = (input: any): any => ({
            type: input.type as any,
            name: input.name as any,
          });
          const $cu0 = (input: any): any =>
            (() => {
              if ("brand" === input.type) return $co3(input);
              else if ("manufacturer" === input.type) return $co2(input);
              else
                $throws({
                  expected:
                    "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                  value: input,
                });
            })();
          return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.SnakeCase<ObjectNullable> => {
      const __is = (input: any): input is typia.SnakeCase<ObjectNullable> => {
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
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ObjectNullable> => {
          // @ts-ignore;
          declare const require: (lib: string) => any;
          const $guard = require("typia/lib/functional/$guard").$guard(
            "typia.createAssert",
          );
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ((Array.isArray(input.value) ||
              $guard(_exceptionable, {
                path: _path + ".value",
                expected: "Array<ObjectNullable.IProduct>",
                value: input.value,
              })) &&
              input.value.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(_exceptionable, {
                      path: _path + ".value[" + _index1 + "]",
                      expected: "ObjectNullable.IProduct",
                      value: elem,
                    })) &&
                    $ao1(
                      elem,
                      _path + ".value[" + _index1 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(_exceptionable, {
                    path: _path + ".value[" + _index1 + "]",
                    expected: "ObjectNullable.IProduct",
                    value: elem,
                  }),
              )) ||
            $guard(_exceptionable, {
              path: _path + ".value",
              expected: "Array<ObjectNullable.IProduct>",
              value: input.value,
            });
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              })) &&
            (((("object" === typeof input.manufacturer &&
              null !== input.manufacturer) ||
              $guard(_exceptionable, {
                path: _path + ".manufacturer",
                expected: "ObjectNullable.IManufacturer",
                value: input.manufacturer,
              })) &&
              $ao2(
                input.manufacturer,
                _path + ".manufacturer",
                true && _exceptionable,
              )) ||
              $guard(_exceptionable, {
                path: _path + ".manufacturer",
                expected: "ObjectNullable.IManufacturer",
                value: input.manufacturer,
              })) &&
            (null === input.brand ||
              ((("object" === typeof input.brand && null !== input.brand) ||
                $guard(_exceptionable, {
                  path: _path + ".brand",
                  expected: "(ObjectNullable.IBrand | null)",
                  value: input.brand,
                })) &&
                $ao3(input.brand, _path + ".brand", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".brand",
                expected: "(ObjectNullable.IBrand | null)",
                value: input.brand,
              })) &&
            (null === input.similar ||
              ((("object" === typeof input.similar && null !== input.similar) ||
                $guard(_exceptionable, {
                  path: _path + ".similar",
                  expected:
                    "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                  value: input.similar,
                })) &&
                $au0(
                  input.similar,
                  _path + ".similar",
                  true && _exceptionable,
                )) ||
              $guard(_exceptionable, {
                path: _path + ".similar",
                expected:
                  "(ObjectNullable.IBrand | ObjectNullable.IManufacturer | null)",
                value: input.similar,
              }));
          const $ao2 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("manufacturer" === input.type ||
              $guard(_exceptionable, {
                path: _path + ".type",
                expected: '"manufacturer"',
                value: input.type,
              })) &&
            ("string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              }));
          const $ao3 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("brand" === input.type ||
              $guard(_exceptionable, {
                path: _path + ".type",
                expected: '"brand"',
                value: input.type,
              })) &&
            ("string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
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
                return $guard(_exceptionable, {
                  path: _path,
                  expected:
                    "(ObjectNullable.IBrand | ObjectNullable.IManufacturer)",
                  value: input,
                });
            })();
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectNullable",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectNullable",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
