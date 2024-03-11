import typia from "typia";
import { _test_validate } from "../../../internal/_test_validate";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
export const test_validate_ObjectPrimitive = _test_validate(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)((input) =>
  ((input: any): typia.IValidation<ObjectPrimitive> => {
    const errors = [] as any[];
    const __is = (input: any): input is ObjectPrimitive => {
      const $io0 = (input: any): boolean =>
        "string" === typeof input.id &&
        ("html" === input.extension ||
          "md" === input.extension ||
          "txt" === input.extension) &&
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
      const $report = (typia.validate as any).report(errors);
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
            "html" === input.extension ||
              "md" === input.extension ||
              "txt" === input.extension ||
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
  })(input),
);
