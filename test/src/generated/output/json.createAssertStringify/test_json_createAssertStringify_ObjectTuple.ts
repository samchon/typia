import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectTuple } from "../../../structures/ObjectTuple";

export const test_json_createAssertStringify_ObjectTuple =
  _test_json_assertStringify(TypeGuardError)("ObjectTuple")<ObjectTuple>(
    ObjectTuple,
  )(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectTuple => {
        const __is = (input: any): input is ObjectTuple => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.code &&
            "string" === typeof input.name;
          const $io1 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.mobile &&
            "string" === typeof input.name;
          return (
            Array.isArray(input) &&
            input.length === 2 &&
            "object" === typeof input[0] &&
            null !== input[0] &&
            $io0(input[0]) &&
            "object" === typeof input[1] &&
            null !== input[1] &&
            $io1(input[1])
          );
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectTuple => {
            const $guard = (typia.json.createAssertStringify as any).guard;
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("string" === typeof input.id ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: "string",
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
                ));
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("string" === typeof input.id ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".id",
                    expected: "string",
                    value: input.id,
                  },
                  errorFactory,
                )) &&
              ("string" === typeof input.mobile ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".mobile",
                    expected: "string",
                    value: input.mobile,
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
                ));
            return (
              ((Array.isArray(input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectTuple",
                    value: input,
                  },
                  errorFactory,
                )) &&
                (input.length === 2 ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "[ObjectTuple.ISection, ObjectTuple.ICitizen]",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input[0] && null !== input[0]) ||
                  $guard(
                    true,
                    {
                      path: _path + "[0]",
                      expected: "ObjectTuple.ISection",
                      value: input[0],
                    },
                    errorFactory,
                  )) &&
                  $ao0(input[0], _path + "[0]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[0]",
                      expected: "ObjectTuple.ISection",
                      value: input[0],
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input[1] && null !== input[1]) ||
                  $guard(
                    true,
                    {
                      path: _path + "[1]",
                      expected: "ObjectTuple.ICitizen",
                      value: input[1],
                    },
                    errorFactory,
                  )) &&
                  $ao1(input[1], _path + "[1]", true)) ||
                  $guard(
                    true,
                    {
                      path: _path + "[1]",
                      expected: "ObjectTuple.ICitizen",
                      value: input[1],
                    },
                    errorFactory,
                  ))) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectTuple",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ObjectTuple): string => {
        const $string = (typia.json.createAssertStringify as any).string;
        return `[${`{"id":${$string((input[0] as any).id)},"code":${$string(
          (input[0] as any).code,
        )},"name":${$string((input[0] as any).name)}}`},${`{"id":${$string(
          (input[1] as any).id,
        )},"mobile":${$string((input[1] as any).mobile)},"name":${$string(
          (input[1] as any).name,
        )}}`}]`;
      };
      return stringify(assert(input, errorFactory));
    },
  );
