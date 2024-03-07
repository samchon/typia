import typia from "typia";
import { _test_functional_assertReturnAsync } from "../../../internal/_test_functional_assertReturnAsync";
import { ObjectDescription } from "../../../structures/ObjectDescription";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_functional_assertReturnAsyncCustom_ObjectDescription =
  _test_functional_assertReturnAsync(CustomGuardError)("ObjectDescription")(
    ObjectDescription,
  )(
    (p: (input: ObjectDescription) => Promise<ObjectDescription>) =>
      async (input: ObjectDescription): Promise<ObjectDescription> => {
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
        ): ObjectDescription => {
          const __is = (input: any): input is ObjectDescription => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.id &&
              /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                input.id,
              ) &&
              "boolean" === typeof input.deprecated &&
              "string" === typeof input.title &&
              Array.isArray(input.descriptions) &&
              input.descriptions.every(
                (elem: any) => "string" === typeof elem,
              ) &&
              "number" === typeof input.newLine &&
              Number.isFinite(input.newLine);
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectDescription => {
              const $guard = (typia.functional.assertReturn as any).guard;
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
                  ));
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
        })(await p(input));
      },
  );
