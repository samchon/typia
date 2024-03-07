import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectDescription } from "../../../structures/ObjectDescription";
export const test_notation_validateCamel_ObjectDescription =
  _test_notation_validateGeneral("ObjectDescription")<ObjectDescription>(
    ObjectDescription,
  )<typia.CamelCase<ObjectDescription>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.CamelCase<ObjectDescription>> => {
        const validate = (input: any): typia.IValidation<ObjectDescription> => {
          const errors = [] as any[];
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
          if (false === __is(input)) {
            const $report = (typia.notations.validateCamel as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectDescription => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("string" === typeof input.id &&
                    (/^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
                      input.id,
                    ) ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: 'string & Format<"uuid">',
                        value: input.id,
                      }))) ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: '(string & Format<"uuid">)',
                      value: input.id,
                    }),
                  "boolean" === typeof input.deprecated ||
                    $report(_exceptionable, {
                      path: _path + ".deprecated",
                      expected: "boolean",
                      value: input.deprecated,
                    }),
                  "string" === typeof input.title ||
                    $report(_exceptionable, {
                      path: _path + ".title",
                      expected: "string",
                      value: input.title,
                    }),
                  ((Array.isArray(input.descriptions) ||
                    $report(_exceptionable, {
                      path: _path + ".descriptions",
                      expected: "Array<string>",
                      value: input.descriptions,
                    })) &&
                    input.descriptions
                      .map(
                        (elem: any, _index1: number) =>
                          "string" === typeof elem ||
                          $report(_exceptionable, {
                            path: _path + ".descriptions[" + _index1 + "]",
                            expected: "string",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".descriptions",
                      expected: "Array<string>",
                      value: input.descriptions,
                    }),
                  ("number" === typeof input.newLine &&
                    Number.isFinite(input.newLine)) ||
                    $report(_exceptionable, {
                      path: _path + ".newLine",
                      expected: "number",
                      value: input.newLine,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectDescription",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectDescription",
                  value: input,
                })
              );
            })(input, "$input", true);
          }
          const success = 0 === errors.length;
          return {
            success,
            errors,
            data: success ? input : undefined,
          } as any;
        };
        const general = (
          input: ObjectDescription,
        ): typia.CamelCase<ObjectDescription> => {
          const $cp0 = (input: any) => input.map((elem: any) => elem as any);
          const $co0 = (input: any): any => ({
            id: input.id as any,
            deprecated: input.deprecated as any,
            title: input.title as any,
            descriptions: Array.isArray(input.descriptions)
              ? $cp0(input.descriptions)
              : (input.descriptions as any),
            newLine: input.newLine as any,
          });
          return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): typia.CamelCase<ObjectDescription> => {
      const __is = (
        input: any,
      ): input is typia.CamelCase<ObjectDescription> => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.id &&
          /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i.test(
            input.id,
          ) &&
          "boolean" === typeof input.deprecated &&
          "string" === typeof input.title &&
          Array.isArray(input.descriptions) &&
          input.descriptions.every((elem: any) => "string" === typeof elem) &&
          "number" === typeof input.newLine &&
          Number.isFinite(input.newLine);
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.CamelCase<ObjectDescription> => {
          const $guard = (typia.createAssert as any).guard;
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
    },
  });
