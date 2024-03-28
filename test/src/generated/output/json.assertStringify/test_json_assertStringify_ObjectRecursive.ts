import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectRecursive } from "../../../structures/ObjectRecursive";

export const test_json_assertStringify_ObjectRecursive =
  _test_json_assertStringify(TypeGuardError)(
    "ObjectRecursive",
  )<ObjectRecursive>(ObjectRecursive)((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectRecursive => {
        const __is = (input: any): input is ObjectRecursive => {
          const $io0 = (input: any): boolean =>
            (null === input.parent ||
              ("object" === typeof input.parent &&
                null !== input.parent &&
                $io0(input.parent))) &&
            "number" === typeof input.id &&
            Number.isFinite(input.id) &&
            "string" === typeof input.code &&
            "string" === typeof input.name &&
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
          ): input is ObjectRecursive => {
            const $guard = (typia.json.assertStringify as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              (null === input.parent ||
                ((("object" === typeof input.parent && null !== input.parent) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".parent",
                      expected: "(ObjectRecursive.IDepartment | null)",
                      value: input.parent,
                    },
                    errorFactory,
                  )) &&
                  $ao0(
                    input.parent,
                    _path + ".parent",
                    true && _exceptionable,
                  )) ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".parent",
                    expected: "(ObjectRecursive.IDepartment | null)",
                    value: input.parent,
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
                    expected: "ObjectRecursive.ITimestamp",
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
                    expected: "ObjectRecursive.ITimestamp",
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
                    expected: "ObjectRecursive.IDepartment",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectRecursive.IDepartment",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ObjectRecursive): string => {
        const $io0 = (input: any): boolean =>
          (null === input.parent ||
            ("object" === typeof input.parent &&
              null !== input.parent &&
              $io0(input.parent))) &&
          "number" === typeof input.id &&
          "string" === typeof input.code &&
          "string" === typeof input.name &&
          "number" === typeof input.sequence &&
          "object" === typeof input.created_at &&
          null !== input.created_at &&
          $io1(input.created_at);
        const $io1 = (input: any): boolean =>
          "number" === typeof input.time && "number" === typeof input.zone;
        const $number = (typia.json.assertStringify as any).number;
        const $string = (typia.json.assertStringify as any).string;
        const $so0 = (input: any): any =>
          `{"parent":${null !== input.parent ? $so0(input.parent) : "null"},"id":${$number(input.id)},"code":${$string(input.code)},"name":${$string(input.name)},"sequence":${$number(input.sequence)},"created_at":${`{"time":${$number((input.created_at as any).time)},"zone":${$number((input.created_at as any).zone)}}`}}`;
        return $so0(input);
      };
      return stringify(assert(input, errorFactory));
    })(input),
  );
