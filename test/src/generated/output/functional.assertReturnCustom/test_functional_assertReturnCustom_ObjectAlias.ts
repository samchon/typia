import typia from "typia";

import { CustomGuardError } from "../../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../../internal/_test_functional_assertReturn";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_functional_assertReturnCustom_ObjectAlias =
  _test_functional_assertReturn(CustomGuardError)("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => ObjectAlias) =>
      (input: ObjectAlias): ObjectAlias => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (p) => new CustomGuardError(p);
        return ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.return")
                : undefined,
            }),
        ): ObjectAlias => {
          const __is = (input: any): input is ObjectAlias => {
            const $io0 = (input: any): boolean =>
              (null === input.id || "string" === typeof input.id) &&
              "string" === typeof input.email &&
              "string" === typeof input.name &&
              (null === input.sex ||
                1 === input.sex ||
                2 === input.sex ||
                "male" === input.sex ||
                "female" === input.sex) &&
              (null === input.age ||
                ("number" === typeof input.age &&
                  Number.isFinite(input.age))) &&
              (null === input.dead || "boolean" === typeof input.dead);
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectAlias => {
              const $guard = (typia.functional.assertReturn as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (null === input.id ||
                  "string" === typeof input.id ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "(null | string)",
                      value: input.id,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.email ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".email",
                      expected: "string",
                      value: input.email,
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
                (null === input.sex ||
                  1 === input.sex ||
                  2 === input.sex ||
                  "male" === input.sex ||
                  "female" === input.sex ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".sex",
                      expected: '("female" | "male" | 1 | 2 | null)',
                      value: input.sex,
                    },
                    errorFactory,
                  )) &&
                (null === input.age ||
                  ("number" === typeof input.age &&
                    Number.isFinite(input.age)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".age",
                      expected: "(null | number)",
                      value: input.age,
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
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectAlias",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  input.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected: "ObjectAlias.IMember",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $ao0(elem, _path + "[" + _index1 + "]", true)) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected: "ObjectAlias.IMember",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectAlias",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(p(input));
      },
  );
