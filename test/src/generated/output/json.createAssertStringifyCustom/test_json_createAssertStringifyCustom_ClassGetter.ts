import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_json_createAssertStringifyCustom_ClassGetter =
  _test_json_assertStringify(CustomGuardError)("ClassGetter")<ClassGetter>(
    ClassGetter,
  )(
    (
      input: any,
      errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (p) =>
        new CustomGuardError(p),
    ): string => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ClassGetter => {
        const __is = (input: any): input is ClassGetter => {
          const $io0 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            (null === input.dead || "boolean" === typeof input.dead);
          return "object" === typeof input && null !== input && $io0(input);
        };
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ClassGetter => {
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
              (null === input.dead ||
                "boolean" === typeof input.dead ||
                $guard(
                  _exceptionable,
                  {
                    path: _path + ".dead",
                    expected: "(boolean | null)",
                    value: input.dead,
                  },
                  errorFactory,
                ));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ClassGetter.Person",
                    value: input,
                  },
                  errorFactory,
                )) &&
                $ao0(input, _path + "", true)) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ClassGetter.Person",
                  value: input,
                },
                errorFactory,
              )
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ClassGetter): string => {
        const $string = (typia.json.createAssertStringify as any).string;
        const $so0 = (input: any): any =>
          `{"id":${$string(input.id)},"name":${$string(input.name)},"dead":${null !== input.dead ? input.dead : "null"}}`;
        return $so0(input);
      };
      return stringify(assert(input, errorFactory));
    },
  );
