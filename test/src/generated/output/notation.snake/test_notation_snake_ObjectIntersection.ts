import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectIntersection } from "../../../structures/ObjectIntersection";

export const test_notation_validateSnake_ObjectIntersection =
  _test_notation_validateGeneral("ObjectIntersection")<ObjectIntersection>(
    ObjectIntersection,
  )<typia.SnakeCase<ObjectIntersection>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<ObjectIntersection>> => {
        const validate = (
          input: any,
        ): typia.IValidation<ObjectIntersection> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectIntersection => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).email &&
              "string" === typeof (input as any).name &&
              "boolean" === typeof (input as any).vulnerable
            );
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validateSnake as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectIntersection => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.email ||
                    $report(_exceptionable, {
                      path: _path + ".email",
                      expected: "string",
                      value: input.email,
                    }),
                  "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    }),
                  "boolean" === typeof input.vulnerable ||
                    $report(_exceptionable, {
                      path: _path + ".vulnerable",
                      expected: "boolean",
                      value: input.vulnerable,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectIntersection",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectIntersection",
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
          input: ObjectIntersection,
        ): typia.SnakeCase<ObjectIntersection> => {
          const $co0 = (input: any): any => ({
            email: input.email as any,
            name: input.name as any,
            vulnerable: input.vulnerable as any,
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
    ): typia.SnakeCase<ObjectIntersection> => {
      const __is = (
        input: any,
      ): input is typia.SnakeCase<ObjectIntersection> => {
        return (
          "object" === typeof input &&
          null !== input &&
          "string" === typeof (input as any).email &&
          "string" === typeof (input as any).name &&
          "boolean" === typeof (input as any).vulnerable
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ObjectIntersection> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
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
            ("boolean" === typeof input.vulnerable ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".vulnerable",
                  expected: "boolean",
                  value: input.vulnerable,
                },
                errorFactory,
              ));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectIntersection",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectIntersection",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
