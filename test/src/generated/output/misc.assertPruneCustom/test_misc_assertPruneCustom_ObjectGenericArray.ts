import typia from "typia";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_misc_assertPruneCustom_ObjectGenericArray =
  _test_misc_assertPrune(CustomGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): ObjectGenericArray => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectGenericArray => {
        const __is = (input: any): input is ObjectGenericArray => {
          const $io0 = (input: any): boolean =>
            "object" === typeof input.pagination &&
            null !== input.pagination &&
            "number" === typeof (input.pagination as any).page &&
            Number.isFinite((input.pagination as any).page) &&
            "number" === typeof (input.pagination as any).limit &&
            Number.isFinite((input.pagination as any).limit) &&
            "number" === typeof (input.pagination as any).total_count &&
            Number.isFinite((input.pagination as any).total_count) &&
            "number" === typeof (input.pagination as any).total_pages &&
            Number.isFinite((input.pagination as any).total_pages) &&
            Array.isArray(input.data) &&
            input.data.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io2(elem),
            );
          const $io2 = (input: any): boolean =>
            "string" === typeof input.name &&
            "number" === typeof input.age &&
            Number.isFinite(input.age);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectGenericArray => {
            const $guard = (typia.misc.assertPrune as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((("object" === typeof input.pagination &&
                null !== input.pagination) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".pagination",
                    expected: "ObjectGenericArray.IPagination",
                    value: input.pagination,
                  },
                  errorFactory,
                )) &&
                $ao1(
                  input.pagination,
                  _path + ".pagination",
                  true && _exceptionable,
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".pagination",
                    expected: "ObjectGenericArray.IPagination",
                    value: input.pagination,
                  },
                  errorFactory,
                )) &&
              (((Array.isArray(input.data) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".data",
                    expected: "Array<ObjectGenericArray.IPerson>",
                    value: input.data,
                  },
                  errorFactory,
                )) &&
                input.data.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".data[" + _index1 + "]",
                          expected: "ObjectGenericArray.IPerson",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao2(
                        elem,
                        _path + ".data[" + _index1 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".data[" + _index1 + "]",
                        expected: "ObjectGenericArray.IPerson",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".data",
                    expected: "Array<ObjectGenericArray.IPerson>",
                    value: input.data,
                  },
                  errorFactory,
                ));
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("number" === typeof input.page &&
                Number.isFinite(input.page)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".page",
                    expected: "number",
                    value: input.page,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.limit &&
                Number.isFinite(input.limit)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".limit",
                    expected: "number",
                    value: input.limit,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.total_count &&
                Number.isFinite(input.total_count)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".total_count",
                    expected: "number",
                    value: input.total_count,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.total_pages &&
                Number.isFinite(input.total_pages)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".total_pages",
                    expected: "number",
                    value: input.total_pages,
                  },
                  errorFactory,
                ));
            const $ao2 = (
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
              (("number" === typeof input.age && Number.isFinite(input.age)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".age",
                    expected: "number",
                    value: input.age,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectGenericArray",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectGenericArray",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const prune = (input: ObjectGenericArray): void => {
        const $io1 = (input: any): boolean =>
          "number" === typeof input.page &&
          "number" === typeof input.limit &&
          "number" === typeof input.total_count &&
          "number" === typeof input.total_pages;
        const $io2 = (input: any): boolean =>
          "string" === typeof input.name && "number" === typeof input.age;
        const $pp0 = (input: any) =>
          input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem) $po2(elem);
          });
        const $po0 = (input: any): any => {
          if ("object" === typeof input.pagination && null !== input.pagination)
            $po1(input.pagination);
          if (Array.isArray(input.data)) $pp0(input.data);
          for (const key of Object.keys(input)) {
            if ("pagination" === key || "data" === key) continue;
            delete input[key];
          }
        };
        const $po1 = (input: any): any => {
          for (const key of Object.keys(input)) {
            if (
              "page" === key ||
              "limit" === key ||
              "total_count" === key ||
              "total_pages" === key
            )
              continue;
            delete input[key];
          }
        };
        const $po2 = (input: any): any => {
          for (const key of Object.keys(input)) {
            if ("name" === key || "age" === key) continue;
            delete input[key];
          }
        };
        if ("object" === typeof input && null !== input) $po0(input);
      };
      assert(input, errorFactory);
      prune(input);
      return input;
    })(input, (p) => new CustomGuardError(p)),
  );
