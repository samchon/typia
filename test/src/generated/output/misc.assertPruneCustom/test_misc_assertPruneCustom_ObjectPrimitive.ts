import typia from "typia";
import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
import { CustomGuardError } from "../../../internal/CustomGuardError";
export const test_misc_assertPruneCustom_ObjectPrimitive =
  _test_misc_assertPrune(CustomGuardError)("ObjectPrimitive")<ObjectPrimitive>(
    ObjectPrimitive,
  )((input) =>
    ((
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): ObjectPrimitive => {
      const assert = (
        input: any,
        errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
      ): ObjectPrimitive => {
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
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ObjectPrimitive => {
            const $guard = (typia.misc.assertPrune as any).guard;
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
              ("html" === input.extension ||
                "md" === input.extension ||
                "txt" === input.extension ||
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
      };
      const prune = (input: ObjectPrimitive): void => {
        const $io1 = (input: any): boolean =>
          "string" === typeof input.id &&
          "string" === typeof input.name &&
          "string" === typeof input.extension &&
          "string" === typeof input.url &&
          "string" === typeof input.created_at;
        const $pp0 = (input: any) =>
          input.forEach((elem: any) => {
            if ("object" === typeof elem && null !== elem) $po1(elem);
          });
        const $po0 = (input: any): any => {
          if (Array.isArray(input.files)) $pp0(input.files);
          for (const key of Object.keys(input)) {
            if (
              "id" === key ||
              "extension" === key ||
              "title" === key ||
              "body" === key ||
              "files" === key ||
              "secret" === key ||
              "created_at" === key
            )
              continue;
            delete input[key];
          }
        };
        const $po1 = (input: any): any => {
          for (const key of Object.keys(input)) {
            if (
              "id" === key ||
              "name" === key ||
              "extension" === key ||
              "url" === key ||
              "created_at" === key
            )
              continue;
            delete input[key];
          }
        };
        if ("object" === typeof input && null !== input) $po0(input);
      };
      assert(input, errorFactory);
      prune(input);
      return input;
    })(input, (p) => new CustomGuardError(p)),
  );
