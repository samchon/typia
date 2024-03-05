import typia from "typia";

import { _test_functional_equalsFunction } from "../../../internal/_test_functional_equalsFunction";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";

export const test_functional_equalsFunction_ObjectGenericArray =
  _test_functional_equalsFunction("ObjectGenericArray")(ObjectGenericArray)(
    (p: (input: ObjectGenericArray) => ObjectGenericArray) =>
      (input: ObjectGenericArray): ObjectGenericArray | null => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectGenericArray => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "object" === typeof input.pagination &&
              null !== input.pagination &&
              $io1(input.pagination, true && _exceptionable) &&
              Array.isArray(input.data) &&
              input.data.every(
                (elem: any, _index1: number) =>
                  "object" === typeof elem &&
                  null !== elem &&
                  $io2(elem, true && _exceptionable),
              ) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["pagination", "data"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "number" === typeof input.page &&
              Number.isFinite(input.page) &&
              "number" === typeof input.limit &&
              Number.isFinite(input.limit) &&
              "number" === typeof input.total_count &&
              Number.isFinite(input.total_count) &&
              "number" === typeof input.total_pages &&
              Number.isFinite(input.total_pages) &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["page", "limit", "total_count", "total_pages"].some(
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
              "string" === typeof input.name &&
              "number" === typeof input.age &&
              Number.isFinite(input.age) &&
              (2 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (["name", "age"].some((prop: any) => key === prop))
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          })(input)
        )
          return null;
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is ObjectGenericArray => {
          const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
            "object" === typeof input.pagination &&
            null !== input.pagination &&
            $io1(input.pagination, true && _exceptionable) &&
            Array.isArray(input.data) &&
            input.data.every(
              (elem: any, _index1: number) =>
                "object" === typeof elem &&
                null !== elem &&
                $io2(elem, true && _exceptionable),
            ) &&
            (2 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["pagination", "data"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
            "number" === typeof input.page &&
            Number.isFinite(input.page) &&
            "number" === typeof input.limit &&
            Number.isFinite(input.limit) &&
            "number" === typeof input.total_count &&
            Number.isFinite(input.total_count) &&
            "number" === typeof input.total_pages &&
            Number.isFinite(input.total_pages) &&
            (4 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (
                  ["page", "limit", "total_count", "total_pages"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
            "string" === typeof input.name &&
            "number" === typeof input.age &&
            Number.isFinite(input.age) &&
            (2 === Object.keys(input).length ||
              Object.keys(input).every((key: any) => {
                if (["name", "age"].some((prop: any) => key === prop))
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return false;
              }));
          return (
            "object" === typeof input && null !== input && $io0(input, true)
          );
        })(result)
          ? result
          : null;
      },
  );
