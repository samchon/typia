import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_functional_assertEqualsReturnAsync_ObjectOptional =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectOptional")(
    ObjectOptional,
  )(
    (p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
      async (input: ObjectOptional): Promise<ObjectOptional> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertEqualsReturn as any).errorFactory;
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
        ): ObjectOptional => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectOptional => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              (undefined === input.id || "string" === typeof input.id) &&
              (undefined === input.name || "string" === typeof input.name) &&
              (undefined === input.email || "string" === typeof input.email) &&
              (undefined === input.sequence ||
                ("number" === typeof input.sequence &&
                  Number.isFinite(input.sequence))) &&
              (0 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["id", "name", "email", "sequence"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input, true)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectOptional => {
              const $guard = (typia.functional.assertEqualsReturn as any).guard;
              const $join = (typia.functional.assertEqualsReturn as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (undefined === input.id ||
                  "string" === typeof input.id ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "(string | undefined)",
                      value: input.id,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.name ||
                  "string" === typeof input.name ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".name",
                      expected: "(string | undefined)",
                      value: input.name,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.email ||
                  "string" === typeof input.email ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".email",
                      expected: "(string | undefined)",
                      value: input.email,
                    },
                    errorFactory,
                  )) &&
                (undefined === input.sequence ||
                  ("number" === typeof input.sequence &&
                    Number.isFinite(input.sequence)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".sequence",
                      expected: "(number | undefined)",
                      value: input.sequence,
                    },
                    errorFactory,
                  )) &&
                (0 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["id", "name", "email", "sequence"].some(
                        (prop: any) => key === prop,
                      )
                    )
                      return true;
                    const value = input[key];
                    if (undefined === value) return true;
                    return $guard(
                      _exceptionable,
                      {
                        path: _path + $join(key),
                        expected: "undefined",
                        value: value,
                      },
                      errorFactory,
                    );
                  }));
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectOptional",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectOptional",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(await p(input));
      },
  );
