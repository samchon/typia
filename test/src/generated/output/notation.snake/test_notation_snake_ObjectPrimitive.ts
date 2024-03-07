import typia from "typia";
import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
export const test_notation_validateSnake_ObjectPrimitive =
  _test_notation_validateGeneral("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )<typia.SnakeCase<ObjectPrimitive>>({
    convert: (input) =>
      ((input: any): typia.IValidation<typia.SnakeCase<ObjectPrimitive>> => {
        const validate = (input: any): typia.IValidation<ObjectPrimitive> => {
          const errors = [] as any[];
          const __is = (input: any): input is ObjectPrimitive => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.id &&
              ("txt" === input.extension ||
                "md" === input.extension ||
                "html" === input.extension) &&
              "string" === typeof input.title &&
              "string" === typeof input.body &&
              Array.isArray(input.files) &&
              input.files.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              ) &&
              "boolean" === typeof input.secret &&
              "string" === typeof input.created_at;
            const $io1 = (input: any): boolean =>
              "string" === typeof input.id &&
              "string" === typeof input.name &&
              "string" === typeof input.extension &&
              "string" === typeof input.url &&
              "string" === typeof input.created_at;
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input)) {
            const $report = (typia.notations.validateSnake as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ObjectPrimitive => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.id ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: "string",
                      value: input.id,
                    }),
                  "txt" === input.extension ||
                    "md" === input.extension ||
                    "html" === input.extension ||
                    $report(_exceptionable, {
                      path: _path + ".extension",
                      expected: '("html" | "md" | "txt")',
                      value: input.extension,
                    }),
                  "string" === typeof input.title ||
                    $report(_exceptionable, {
                      path: _path + ".title",
                      expected: "string",
                      value: input.title,
                    }),
                  "string" === typeof input.body ||
                    $report(_exceptionable, {
                      path: _path + ".body",
                      expected: "string",
                      value: input.body,
                    }),
                  ((Array.isArray(input.files) ||
                    $report(_exceptionable, {
                      path: _path + ".files",
                      expected: "Array<ObjectPrimitive.IFile>",
                      value: input.files,
                    })) &&
                    input.files
                      .map(
                        (elem: any, _index1: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".files[" + _index1 + "]",
                              expected: "ObjectPrimitive.IFile",
                              value: elem,
                            })) &&
                            $vo1(
                              elem,
                              _path + ".files[" + _index1 + "]",
                              true && _exceptionable,
                            )) ||
                          $report(_exceptionable, {
                            path: _path + ".files[" + _index1 + "]",
                            expected: "ObjectPrimitive.IFile",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".files",
                      expected: "Array<ObjectPrimitive.IFile>",
                      value: input.files,
                    }),
                  "boolean" === typeof input.secret ||
                    $report(_exceptionable, {
                      path: _path + ".secret",
                      expected: "boolean",
                      value: input.secret,
                    }),
                  "string" === typeof input.created_at ||
                    $report(_exceptionable, {
                      path: _path + ".created_at",
                      expected: "string",
                      value: input.created_at,
                    }),
                ].every((flag: boolean) => flag);
              const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  "string" === typeof input.id ||
                    $report(_exceptionable, {
                      path: _path + ".id",
                      expected: "string",
                      value: input.id,
                    }),
                  "string" === typeof input.name ||
                    $report(_exceptionable, {
                      path: _path + ".name",
                      expected: "string",
                      value: input.name,
                    }),
                  "string" === typeof input.extension ||
                    $report(_exceptionable, {
                      path: _path + ".extension",
                      expected: "string",
                      value: input.extension,
                    }),
                  "string" === typeof input.url ||
                    $report(_exceptionable, {
                      path: _path + ".url",
                      expected: "string",
                      value: input.url,
                    }),
                  "string" === typeof input.created_at ||
                    $report(_exceptionable, {
                      path: _path + ".created_at",
                      expected: "string",
                      value: input.created_at,
                    }),
                ].every((flag: boolean) => flag);
              return (
                ((("object" === typeof input && null !== input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ObjectPrimitive.IArticle",
                    value: input,
                  })) &&
                  $vo0(input, _path + "", true)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ObjectPrimitive.IArticle",
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
          input: ObjectPrimitive,
        ): typia.SnakeCase<ObjectPrimitive> => {
          const $io1 = (input: any): boolean =>
            "string" === typeof input.id &&
            "string" === typeof input.name &&
            "string" === typeof input.extension &&
            "string" === typeof input.url &&
            "string" === typeof input.created_at;
          const $cp0 = (input: any) =>
            input.map((elem: any) =>
              "object" === typeof elem && null !== elem
                ? $co1(elem)
                : (elem as any),
            );
          const $co0 = (input: any): any => ({
            id: input.id as any,
            extension: input.extension as any,
            title: input.title as any,
            body: input.body as any,
            files: Array.isArray(input.files)
              ? $cp0(input.files)
              : (input.files as any),
            secret: input.secret as any,
            created_at: input.created_at as any,
          });
          const $co1 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
            extension: input.extension as any,
            url: input.url as any,
            created_at: input.created_at as any,
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
    ): typia.SnakeCase<ObjectPrimitive> => {
      const __is = (input: any): input is typia.SnakeCase<ObjectPrimitive> => {
        const $io0 = (input: any): boolean =>
          "string" === typeof input.id &&
          ("txt" === input.extension ||
            "md" === input.extension ||
            "html" === input.extension) &&
          "string" === typeof input.title &&
          "string" === typeof input.body &&
          Array.isArray(input.files) &&
          input.files.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $io1(elem),
          ) &&
          "boolean" === typeof input.secret &&
          "string" === typeof input.created_at;
        const $io1 = (input: any): boolean =>
          "string" === typeof input.id &&
          "string" === typeof input.name &&
          "string" === typeof input.extension &&
          "string" === typeof input.url &&
          "string" === typeof input.created_at;
        return "object" === typeof input && null !== input && $io0(input);
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is typia.SnakeCase<ObjectPrimitive> => {
          const $guard = (typia.createAssert as any).guard;
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
            ("txt" === input.extension ||
              "md" === input.extension ||
              "html" === input.extension ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".extension",
                  expected: '("html" | "md" | "txt")',
                  value: input.extension,
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
            ("string" === typeof input.body ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".body",
                  expected: "string",
                  value: input.body,
                },
                errorFactory,
              )) &&
            (((Array.isArray(input.files) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".files",
                  expected: "Array<ObjectPrimitive.IFile>",
                  value: input.files,
                },
                errorFactory,
              )) &&
              input.files.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(
                      _exceptionable,
                      {
                        path: _path + ".files[" + _index1 + "]",
                        expected: "ObjectPrimitive.IFile",
                        value: elem,
                      },
                      errorFactory,
                    )) &&
                    $ao1(
                      elem,
                      _path + ".files[" + _index1 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".files[" + _index1 + "]",
                      expected: "ObjectPrimitive.IFile",
                      value: elem,
                    },
                    errorFactory,
                  ),
              )) ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".files",
                  expected: "Array<ObjectPrimitive.IFile>",
                  value: input.files,
                },
                errorFactory,
              )) &&
            ("boolean" === typeof input.secret ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".secret",
                  expected: "boolean",
                  value: input.secret,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.created_at ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".created_at",
                  expected: "string",
                  value: input.created_at,
                },
                errorFactory,
              ));
          const $ao1 = (
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
            ("string" === typeof input.extension ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".extension",
                  expected: "string",
                  value: input.extension,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.url ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".url",
                  expected: "string",
                  value: input.url,
                },
                errorFactory,
              )) &&
            ("string" === typeof input.created_at ||
              $guard(
                _exceptionable,
                {
                  path: _path + ".created_at",
                  expected: "string",
                  value: input.created_at,
                },
                errorFactory,
              ));
          return (
            ((("object" === typeof input && null !== input) ||
              $guard(
                true,
                {
                  path: _path + "",
                  expected: "ObjectPrimitive.IArticle",
                  value: input,
                },
                errorFactory,
              )) &&
              $ao0(input, _path + "", true)) ||
            $guard(
              true,
              {
                path: _path + "",
                expected: "ObjectPrimitive.IArticle",
                value: input,
              },
              errorFactory,
            )
          );
        })(input, "$input", true);
      return input;
    },
  });
