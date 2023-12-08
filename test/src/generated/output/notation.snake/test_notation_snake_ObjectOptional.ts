import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectOptional } from "../../../structures/ObjectOptional";

export const test_notation_validateSnake_ObjectOptional =
  _test_notation_validateGeneral("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )<typia.SnakeCase<ObjectOptional>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<ObjectOptional>> => {
        const validate = (input: any): typia.IValidation<ObjectOptional> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectOptional => {
            const $io0 = (input: any): boolean =>
              (undefined === input.id || "string" === typeof input.id) &&
              (undefined === input.name || "string" === typeof input.name) &&
              (undefined === input.email || "string" === typeof input.email) &&
              (undefined === input.sequence ||
                ("number" === typeof input.sequence &&
                  Number.isFinite(input.sequence)));
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
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
            ): input is ObjectOptional => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  undefined === input.id ||
                    "string" === typeof input.id ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: "(string | undefined)",
                      value: input.id,
                    }),
                  undefined === input.name ||
                    "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "(string | undefined)",
                      value: input.name,
                    }),
                  undefined === input.email ||
                    "string" === typeof input.email ||
                    $report(_exceptionable, {
                      path: _path + ".email",
                      expected: "(string | undefined)",
                      value: input.email,
                    }),
                  undefined === input.sequence ||
                    ("number" === typeof input.sequence &&
                      Number.isFinite(input.sequence)) ||
                    $report(_exceptionable, {
                      path: _path + ".sequence",
                      expected: "(number | undefined)",
                      value: input.sequence,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input &&
                  null !== input &&
                  false === Array.isArray(input)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectOptional",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectOptional",
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
          input: ObjectOptional,
        ): typia.SnakeCase<ObjectOptional> => {
          const $co0 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
            email: input.email as any,
            sequence: input.sequence as any,
          });
          return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.SnakeCase<ObjectOptional> => {
      const __is = (input: any): input is typia.SnakeCase<ObjectOptional> => {
        const $io0 = (input: any): boolean =>
          (undefined === input.id || "string" === typeof input.id) &&
          (undefined === input.name || "string" === typeof input.name) &&
          (undefined === input.email || "string" === typeof input.email) &&
          (undefined === input.sequence ||
            ("number" === typeof input.sequence &&
              Number.isFinite(input.sequence)));
        return (
          "object" === typeof input &&
          null !== input &&
          false === Array.isArray(input) &&
          $io0(input)
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ObjectOptional> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (undefined === input.id ||
              "string" === typeof input.id ||
              $guard(_exceptionable, {
                path: _path + ".id",
                expected: "(string | undefined)",
                value: input.id,
              })) &&
            (undefined === input.name ||
              "string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "(string | undefined)",
                value: input.name,
              })) &&
            (undefined === input.email ||
              "string" === typeof input.email ||
              $guard(_exceptionable, {
                path: _path + ".email",
                expected: "(string | undefined)",
                value: input.email,
              })) &&
            (undefined === input.sequence ||
              ("number" === typeof input.sequence &&
                Number.isFinite(input.sequence)) ||
              $guard(_exceptionable, {
                path: _path + ".sequence",
                expected: "(number | undefined)",
                value: input.sequence,
              }));
          return (
            ((("object" === typeof input &&
              null !== input &&
              false === Array.isArray(input)) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectOptional",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectOptional",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
