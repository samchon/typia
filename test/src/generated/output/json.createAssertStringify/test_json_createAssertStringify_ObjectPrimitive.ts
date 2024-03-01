import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_json_createAssertStringify_ObjectPrimitive =
  _test_json_assertStringify(TypeGuardError)(
    "ObjectPrimitive",
  )<ObjectPrimitive>(ObjectPrimitive)(
    (
      input: any,
      errorFactory?: import("typia").TypeGuardError.IProps,
    ): string => {
      const assert = (
        input: any,
        errorFactory?: import("typia").TypeGuardError.IProps,
      ): ObjectPrimitive => {
        const $guard = (typia.json.createAssertStringify as any).guard(
          errorFactory,
        );
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
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectPrimitive => {
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("string" === typeof input.id ||
                $guard(_exceptionable, {
                  path: _path + ".id",
                  expected: "string",
                  value: input.id,
                })) &&
              ("txt" === input.extension ||
                "md" === input.extension ||
                "html" === input.extension ||
                $guard(_exceptionable, {
                  path: _path + ".extension",
                  expected: '("html" | "md" | "txt")',
                  value: input.extension,
                })) &&
              ("string" === typeof input.title ||
                $guard(_exceptionable, {
                  path: _path + ".title",
                  expected: "string",
                  value: input.title,
                })) &&
              ("string" === typeof input.body ||
                $guard(_exceptionable, {
                  path: _path + ".body",
                  expected: "string",
                  value: input.body,
                })) &&
              (((Array.isArray(input.files) ||
                $guard(_exceptionable, {
                  path: _path + ".files",
                  expected: "Array<ObjectPrimitive.IFile>",
                  value: input.files,
                })) &&
                input.files.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".files[" + _index1 + "]",
                        expected: "ObjectPrimitive.IFile",
                        value: elem,
                      })) &&
                      $ao1(
                        elem,
                        _path + ".files[" + _index1 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".files[" + _index1 + "]",
                      expected: "ObjectPrimitive.IFile",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".files",
                  expected: "Array<ObjectPrimitive.IFile>",
                  value: input.files,
                })) &&
              ("boolean" === typeof input.secret ||
                $guard(_exceptionable, {
                  path: _path + ".secret",
                  expected: "boolean",
                  value: input.secret,
                })) &&
              ("string" === typeof input.created_at ||
                $guard(_exceptionable, {
                  path: _path + ".created_at",
                  expected: "string",
                  value: input.created_at,
                }));
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("string" === typeof input.id ||
                $guard(_exceptionable, {
                  path: _path + ".id",
                  expected: "string",
                  value: input.id,
                })) &&
              ("string" === typeof input.name ||
                $guard(_exceptionable, {
                  path: _path + ".name",
                  expected: "string",
                  value: input.name,
                })) &&
              ("string" === typeof input.extension ||
                $guard(_exceptionable, {
                  path: _path + ".extension",
                  expected: "string",
                  value: input.extension,
                })) &&
              ("string" === typeof input.url ||
                $guard(_exceptionable, {
                  path: _path + ".url",
                  expected: "string",
                  value: input.url,
                })) &&
              ("string" === typeof input.created_at ||
                $guard(_exceptionable, {
                  path: _path + ".created_at",
                  expected: "string",
                  value: input.created_at,
                }));
            return (
              ((("object" === typeof input && null !== input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ObjectPrimitive.IArticle",
                  value: input,
                })) &&
                $ao0(input, _path + "", true)) ||
              $guard(true, {
                path: _path + "",
                expected: "ObjectPrimitive.IArticle",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const stringify = (input: ObjectPrimitive): string => {
        const $io1 = (input: any): boolean =>
          "string" === typeof input.id &&
          "string" === typeof input.name &&
          "string" === typeof input.extension &&
          "string" === typeof input.url &&
          "string" === typeof input.created_at;
        const $string = (typia.json.createAssertStringify as any).string;
        const $throws = (typia.json.createAssertStringify as any).throws;
        const $so0 = (input: any): any =>
          `{"id":${$string(input.id)},"extension":${(() => {
            if ("string" === typeof input.extension)
              return $string(input.extension);
            if ("string" === typeof input.extension)
              return '"' + input.extension + '"';
            $throws({
              expected: '("html" | "md" | "txt")',
              value: input.extension,
            });
          })()},"title":${$string(input.title)},"body":${$string(
            input.body,
          )},"files":${`[${input.files
            .map(
              (elem: any) =>
                `{"id":${$string((elem as any).id)},"name":${$string(
                  (elem as any).name,
                )},"extension":${$string(
                  (elem as any).extension,
                )},"url":${$string((elem as any).url)},"created_at":${$string(
                  (elem as any).created_at,
                )}}`,
            )
            .join(",")}]`},"secret":${input.secret},"created_at":${$string(
            input.created_at,
          )}}`;
        return $so0(input);
      };
      return stringify(assert(input, errorFactory));
    },
  );
