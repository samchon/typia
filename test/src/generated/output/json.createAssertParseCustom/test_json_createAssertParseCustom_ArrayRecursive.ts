import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_json_assertParse } from "../../../internal/_test_json_assertParse";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_json_createAssertParseCustom_ArrayRecursive =
  _test_json_assertParse(CustomGuardError)("ArrayRecursive")<ArrayRecursive>(
    ArrayRecursive,
  )(
    (
      input: string,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): typia.Primitive<ArrayRecursive> => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ArrayRecursive => {
        const __is = (input: any): input is ArrayRecursive => {
          const $io0 = (input: any): boolean =>
            Array.isArray(input.children) &&
            input.children.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io0(elem),
            ) &&
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.code &&
            "number" === typeof input.sequence &&
            Number.isFinite(input.sequence) &&
            "object" === typeof input.created_at &&
            null !== input.created_at &&
            "number" === typeof (input.created_at as any).time &&
            Number.isFinite((input.created_at as any).time) &&
            "number" === typeof (input.created_at as any).zone &&
            Number.isFinite((input.created_at as any).zone);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ArrayRecursive => {
            const $guard = (typia.json.createAssertParse as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (((Array.isArray(input.children) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".children",
                    expected: "Array<ArrayRecursive.ICategory>",
                    value: input.children,
                  },
                  errorFactory,
                )) &&
                input.children.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".children[" + _index1 + "]",
                          expected: "ArrayRecursive.ICategory",
                          value: elem,
                        },
                        errorFactory,
                      )) &&
                      $ao0(
                        elem,
                        _path + ".children[" + _index1 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".children[" + _index1 + "]",
                        expected: "ArrayRecursive.ICategory",
                        value: elem,
                      },
                      errorFactory,
                    ),
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".children",
                    expected: "Array<ArrayRecursive.ICategory>",
                    value: input.children,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.id && Number.isFinite(input.id)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: "number",
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.code ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".code",
                    expected: "string",
                    value: input.code,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.sequence &&
                Number.isFinite(input.sequence)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".sequence",
                    expected: "number",
                    value: input.sequence,
                  },
                  errorFactory,
                )) &&
              (((("object" === typeof input.created_at &&
                null !== input.created_at) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".created_at",
                    expected: "ArrayRecursive.ITimestamp",
                    value: input.created_at,
                  },
                  errorFactory,
                )) &&
                $ao1(
                  input.created_at,
                  _path + ".created_at",
                  true && _exceptionable,
                )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".created_at",
                    expected: "ArrayRecursive.ITimestamp",
                    value: input.created_at,
                  },
                  errorFactory,
                ));
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (("number" === typeof input.time &&
                Number.isFinite(input.time)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".time",
                    expected: "number",
                    value: input.time,
                  },
                  errorFactory,
                )) &&
              (("number" === typeof input.zone &&
                Number.isFinite(input.zone)) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".zone",
                    expected: "number",
                    value: input.zone,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ArrayRecursive.ICategory",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ArrayRecursive.ICategory",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      input = JSON.parse(input);
      return assert(input, errorFactory) as any;
    },
  );
