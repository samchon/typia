import typia from "../../../../src";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectJsonTag } from "../../../structures/ObjectJsonTag";

export const test_notation_validateSnake_ObjectJsonTag =
  _test_notation_validateGeneral("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)<
    typia.SnakeCase<ObjectJsonTag>
  >({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<ObjectJsonTag>> => {
        const validate = (input: any): typia.IValidation<ObjectJsonTag> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectJsonTag => {
            return (
              "object" === typeof input &&
              null !== input &&
              "string" === typeof (input as any).vulnerable &&
              "string" === typeof (input as any).description &&
              "string" === typeof (input as any).title &&
              "string" === typeof (input as any).complicate_title
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
            ): input is ObjectJsonTag => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.vulnerable ||
                    $report(_exceptionable, {
                      path: _path + ".vulnerable",
                      expected: "string",
                      value: input.vulnerable,
                    }),
                  "string" === typeof input.description ||
                    $report(_exceptionable, {
                      path: _path + ".description",
                      expected: "string",
                      value: input.description,
                    }),
                  "string" === typeof input.title ||
                    $report(_exceptionable, {
                      path: _path + ".title",
                      expected: "string",
                      value: input.title,
                    }),
                  "string" === typeof input.complicate_title ||
                    $report(_exceptionable, {
                      path: _path + ".complicate_title",
                      expected: "string",
                      value: input.complicate_title,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectJsonTag",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectJsonTag",
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
          input: ObjectJsonTag,
        ): typia.SnakeCase<ObjectJsonTag> => {
          const $co0 = (input: any): any => ({
            vulnerable: input.vulnerable as any,
            description: input.description as any,
            title: input.title as any,
            complicate_title: input.complicate_title as any,
          });
          return "object" === typeof input && null !== input
            ? $co0(input)
            : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.SnakeCase<ObjectJsonTag> => {
      const __is = (input: any): input is typia.SnakeCase<ObjectJsonTag> => {
        return (
          "object" === typeof input &&
          null !== input &&
          "string" === typeof (input as any).vulnerable &&
          "string" === typeof (input as any).description &&
          "string" === typeof (input as any).title &&
          "string" === typeof (input as any).complicate_title
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ObjectJsonTag> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            ("string" === typeof input.vulnerable ||
              $guard(_exceptionable, {
                path: _path + ".vulnerable",
                expected: "string",
                value: input.vulnerable,
              })) &&
            ("string" === typeof input.description ||
              $guard(_exceptionable, {
                path: _path + ".description",
                expected: "string",
                value: input.description,
              })) &&
            ("string" === typeof input.title ||
              $guard(_exceptionable, {
                path: _path + ".title",
                expected: "string",
                value: input.title,
              })) &&
            ("string" === typeof input.complicate_title ||
              $guard(_exceptionable, {
                path: _path + ".complicate_title",
                expected: "string",
                value: input.complicate_title,
              }));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectJsonTag",
                value: input,
              })) &&
              $ao0(input, _path + "", true)) ||
            $guard(true, {
              path: _path + "",
              expected: "ObjectJsonTag",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
