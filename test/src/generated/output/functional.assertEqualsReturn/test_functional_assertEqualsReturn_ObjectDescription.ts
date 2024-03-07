import typia from "typia";
import { _test_functional_assertEqualsReturn } from "../../../internal/_test_functional_assertEqualsReturn";
import { ObjectDescription } from "../../../structures/ObjectDescription";
import { TypeGuardError } from "typia";
export const test_functional_assertEqualsReturn_ObjectDescription =
  _test_functional_assertEqualsReturn(TypeGuardError)("ObjectDescription")(
    ObjectDescription,
  )(
    (p: (input: ObjectDescription) => ObjectDescription) =>
      (input: ObjectDescription): ObjectDescription => {
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
        ): ObjectDescription => {
          const __is = (
            input: any,
            _exceptionable: boolean = true,
          ): input is ObjectDescription => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
              "string" === typeof input.id &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.id,
              ) &&
              "boolean" === typeof input.deprecated &&
              "string" === typeof input.title &&
              Array.isArray(input.descriptions) &&
              input.descriptions.every(
                (elem: any, _index1: number) => "string" === typeof elem,
              ) &&
              "number" === typeof input.newLine &&
              Number.isFinite(input.newLine) &&
              (5 === Object.keys(input).length ||
                Object.keys(input).every((key: any) => {
                  if (
                    [
                      "id",
                      "deprecated",
                      "title",
                      "descriptions",
                      "newLine",
                    ].some((prop: any) => key === prop)
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
            ): input is ObjectDescription => {
              const $guard = (typia.functional.assertEqualsReturn as any).guard;
              const $join = (typia.functional.assertEqualsReturn as any).join;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("string" === typeof input.id &&
                  (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                    input.id,
                  ) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".id",
                        expected: 'string & Format<"uuid">',
                        value: input.id,
                      },
                      errorFactory,
                    ))) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: '(string & Format<"uuid">)',
                      value: input.id,
                    },
                    errorFactory,
                  )) &&
                ("boolean" === typeof input.deprecated ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".deprecated",
                      expected: "boolean",
                      value: input.deprecated,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.title ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".title",
                      expected: "string",
                      value: input.title,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.descriptions) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".descriptions",
                      expected: "Array<string>",
                      value: input.descriptions,
                    },
                    errorFactory,
                  )) &&
                  input.descriptions.every(
                    (elem: any, _index1: number) =>
                      "string" === typeof elem ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".descriptions[" + _index1 + "]",
                          expected: "string",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".descriptions",
                      expected: "Array<string>",
                      value: input.descriptions,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.newLine &&
                  Number.isFinite(input.newLine)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".newLine",
                      expected: "number",
                      value: input.newLine,
                    },
                    errorFactory,
                  )) &&
                (5 === Object.keys(input).length ||
                  false === _exceptionable ||
                  Object.keys(input).every((key: any) => {
                    if (
                      [
                        "id",
                        "deprecated",
                        "title",
                        "descriptions",
                        "newLine",
                      ].some((prop: any) => key === prop)
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
                      expected: "ObjectDescription",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  $ao0(input, _path + "", true)) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ObjectDescription",
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
