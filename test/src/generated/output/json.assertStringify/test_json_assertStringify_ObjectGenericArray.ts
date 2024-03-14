import typia from "typia";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectGenericArray } from "../../../structures/ObjectGenericArray";
import { TypeGuardError } from "typia";
export const test_json_assertStringify_ObjectGenericArray =
  _test_json_assertStringify(TypeGuardError)(
    "ObjectGenericArray",
  )<ObjectGenericArray>(ObjectGenericArray)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): string => {
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
            const $guard = (typia.json.assertStringify as any).guard;
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
      const stringify = (input: ObjectGenericArray): string => {
        const $io1 = (input: any): boolean =>
          "number" === typeof input.page &&
          "number" === typeof input.limit &&
          "number" === typeof input.total_count &&
          "number" === typeof input.total_pages;
        const $io2 = (input: any): boolean =>
          "string" === typeof input.name && "number" === typeof input.age;
        const $number = (typia.json.assertStringify as any).number;
        const $string = (typia.json.assertStringify as any).string;
        const $so0 = (input: any): any =>
          `{"pagination":${`{"page":${$number((input.pagination as any).page)},"limit":${$number((input.pagination as any).limit)},"total_count":${$number((input.pagination as any).total_count)},"total_pages":${$number((input.pagination as any).total_pages)}}`},"data":${`[${input.data.map((elem: any) => `{"name":${$string((elem as any).name)},"age":${$number((elem as any).age)}}`).join(",")}]`}}`;
        return $so0(input);
      };
      return stringify(assert(input, errorFactory));
    })(input),
  );
