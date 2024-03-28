import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../../internal/_test_functional_equalsParametersAsync";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_functional_equalsParametersAsync_ObjectNullable =
  _test_functional_equalsParametersAsync("ObjectNullable")(ObjectNullable)(
    (p: (input: ObjectNullable) => Promise<ObjectNullable>) =>
      async (input: ObjectNullable): Promise<ObjectNullable | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectNullable => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
            const $io2 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
            const $io3 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
