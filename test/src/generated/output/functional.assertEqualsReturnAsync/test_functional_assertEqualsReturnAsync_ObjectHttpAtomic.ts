import typia from "typia";
import { _test_functional_assertEqualsReturnAsync } from "../../../internal/_test_functional_assertEqualsReturnAsync";
import { ObjectHttpAtomic } from "../../../structures/ObjectHttpAtomic";
import { TypeGuardError } from "typia";
export const test_functional_assertEqualsReturnAsync_ObjectHttpAtomic =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("ObjectHttpAtomic")(
    ObjectHttpAtomic,
  )(
    (p: (input: ObjectHttpAtomic) => Promise<ObjectHttpAtomic>) =>
      async (input: ObjectHttpAtomic): Promise<ObjectHttpAtomic> => {
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
        ): ObjectHttpAtomic => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectHttpAtomic => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "boolean" === typeof input.boolean &&
              "bigint" === typeof input.bigint &&
              "number" === typeof input.number &&
              Number.isFinite(input.number) &&
              "string" === typeof input.string &&
              (4 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    ["boolean", "bigint", "number", "string"].some(
                      (prop: any) => key === prop,
                    )
                  )
                    return true;
                  const value = input[key];
                  if (undefined === value) return true;
                  return false;
                }));
            return (
              "object" === typeof input && null !== input && $io0(input, true)
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectHttpAtomic => {
              const $guard = (typia.functional.assertEqualsReturn as any).guard;
              const $join = (typia.functional.assertEqualsReturn as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ("boolean" === typeof input.boolean ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".boolean",
                      expected: "boolean",
                      value: input.boolean,
                    },
                    errorFactory,
                  )) &&
                ("bigint" === typeof input.bigint ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".bigint",
                      expected: "bigint",
                      value: input.bigint,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.number &&
                  Number.isFinite(input.number)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".number",
                      expected: "number",
                      value: input.number,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.string ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".string",
                      expected: "string",
                      value: input.string,
                    },
                    errorFactory,
                  )) &&
                (4 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      ["boolean", "bigint", "number", "string"].some(
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
                ((("object" === typeof input && null !== input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ObjectHttpAtomic",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectHttpAtomic",
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
