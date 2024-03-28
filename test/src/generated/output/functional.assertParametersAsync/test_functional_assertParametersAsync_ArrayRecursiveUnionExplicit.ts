import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../../internal/_test_functional_assertParametersAsync";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_assertParametersAsync_ArrayRecursiveUnionExplicit =
  _test_functional_assertParametersAsync(TypeGuardError)(
    "ArrayRecursiveUnionExplicit",
  )(ArrayRecursiveUnionExplicit)(
    (
      p: (
        input: ArrayRecursiveUnionExplicit,
      ) => Promise<ArrayRecursiveUnionExplicit>,
    ) =>
      async (
        input: ArrayRecursiveUnionExplicit,
      ): Promise<ArrayRecursiveUnionExplicit> => {
        const errorFactoryWrapper: (
          p: import("typia").TypeGuardError.IProps,
        ) => Error = (typia.functional.assertParameters as any).errorFactory;
        ((
          input: any,
          errorFactory: (p: import("typia").TypeGuardError.IProps) => Error = (
            p: any,
          ) =>
            errorFactoryWrapper({
              ...p,
              path: p.path
                ? p.path.replace("$input", "$input.parameters[0]")
                : undefined,
            }),
        ): ArrayRecursiveUnionExplicit => {
          const __is = (input: any): input is ArrayRecursiveUnionExplicit => {
            const $io0 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.name &&
              "string" === typeof input.path &&
              Array.isArray(input.children) &&
              input.children.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $iu0(elem),
              ) &&
              "directory" === input.type;
            const $io1 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.name &&
              "string" === typeof input.path &&
              "number" === typeof input.width &&
              Number.isFinite(input.width) &&
              "number" === typeof input.height &&
              Number.isFinite(input.height) &&
              "string" === typeof input.url &&
              "number" === typeof input.size &&
              Number.isFinite(input.size) &&
              "file" === input.type &&
              "jpg" === input.extension;
            const $io2 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.name &&
              "string" === typeof input.path &&
              "number" === typeof input.size &&
              Number.isFinite(input.size) &&
              "string" === typeof input.content &&
              "file" === input.type &&
              "txt" === input.extension;
            const $io3 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.name &&
              "string" === typeof input.path &&
              "number" === typeof input.size &&
              Number.isFinite(input.size) &&
              "number" === typeof input.count &&
              Number.isFinite(input.count) &&
              "file" === input.type &&
              "zip" === input.extension;
            const $io4 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.name &&
              "string" === typeof input.path &&
              "object" === typeof input.target &&
              null !== input.target &&
              $iu0(input.target) &&
              "file" === input.type &&
              "lnk" === input.extension;
            const $iu0 = (input: any): any =>
              (() => {
                if ("directory" === input.type) return $io0(input);
                else if ("jpg" === input.extension) return $io1(input);
                else if ("txt" === input.extension) return $io2(input);
                else if ("zip" === input.extension) return $io3(input);
                else if ("lnk" === input.extension) return $io4(input);
                else return false;
              })();
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $iu0(elem),
              )
            );
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayRecursiveUnionExplicit => {
              const $guard = (typia.functional.assertParameters as any).guard;
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "number",
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
                ("string" === typeof input.path ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".path",
                      expected: "string",
                      value: input.path,
                    },
                    errorFactory,
                  )) &&
                (((Array.isArray(input.children) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".children",
                      expected: "Array<ArrayRecursiveUnionExplicit.IBucket>",
                      value: input.children,
                    },
                    errorFactory,
                  )) &&
                  input.children.every(
                    (elem: any, _index2: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          _exceptionable,
                          {
                            path: _path + ".children[" + _index2 + "]",
                            expected:
                              "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $au0(
                          elem,
                          _path + ".children[" + _index2 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(
                        _exceptionable,
                        {
                          path: _path + ".children[" + _index2 + "]",
                          expected:
                            "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".children",
                      expected: "Array<ArrayRecursiveUnionExplicit.IBucket>",
                      value: input.children,
                    },
                    errorFactory,
                  )) &&
                ("directory" === input.type ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".type",
                      expected: '"directory"',
                      value: input.type,
                    },
                    errorFactory,
                  ));
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "number",
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
                ("string" === typeof input.path ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".path",
                      expected: "string",
                      value: input.path,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.width &&
                  Number.isFinite(input.width)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".width",
                      expected: "number",
                      value: input.width,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.height &&
                  Number.isFinite(input.height)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".height",
                      expected: "number",
                      value: input.height,
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
                (("number" === typeof input.size &&
                  Number.isFinite(input.size)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".size",
                      expected: "number",
                      value: input.size,
                    },
                    errorFactory,
                  )) &&
                ("file" === input.type ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".type",
                      expected: '"file"',
                      value: input.type,
                    },
                    errorFactory,
                  )) &&
                ("jpg" === input.extension ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".extension",
                      expected: '"jpg"',
                      value: input.extension,
                    },
                    errorFactory,
                  ));
              const $ao2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "number",
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
                ("string" === typeof input.path ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".path",
                      expected: "string",
                      value: input.path,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.size &&
                  Number.isFinite(input.size)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".size",
                      expected: "number",
                      value: input.size,
                    },
                    errorFactory,
                  )) &&
                ("string" === typeof input.content ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".content",
                      expected: "string",
                      value: input.content,
                    },
                    errorFactory,
                  )) &&
                ("file" === input.type ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".type",
                      expected: '"file"',
                      value: input.type,
                    },
                    errorFactory,
                  )) &&
                ("txt" === input.extension ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".extension",
                      expected: '"txt"',
                      value: input.extension,
                    },
                    errorFactory,
                  ));
              const $ao3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "number",
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
                ("string" === typeof input.path ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".path",
                      expected: "string",
                      value: input.path,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.size &&
                  Number.isFinite(input.size)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".size",
                      expected: "number",
                      value: input.size,
                    },
                    errorFactory,
                  )) &&
                (("number" === typeof input.count &&
                  Number.isFinite(input.count)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".count",
                      expected: "number",
                      value: input.count,
                    },
                    errorFactory,
                  )) &&
                ("file" === input.type ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".type",
                      expected: '"file"',
                      value: input.type,
                    },
                    errorFactory,
                  )) &&
                ("zip" === input.extension ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".extension",
                      expected: '"zip"',
                      value: input.extension,
                    },
                    errorFactory,
                  ));
              const $ao4 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                (("number" === typeof input.id && Number.isFinite(input.id)) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".id",
                      expected: "number",
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
                ("string" === typeof input.path ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".path",
                      expected: "string",
                      value: input.path,
                    },
                    errorFactory,
                  )) &&
                (((("object" === typeof input.target &&
                  null !== input.target) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".target",
                      expected:
                        "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                      value: input.target,
                    },
                    errorFactory,
                  )) &&
                  $au0(
                    input.target,
                    _path + ".target",
                    true && _exceptionable,
                  )) ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".target",
                      expected:
                        "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                      value: input.target,
                    },
                    errorFactory,
                  )) &&
                ("file" === input.type ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".type",
                      expected: '"file"',
                      value: input.type,
                    },
                    errorFactory,
                  )) &&
                ("lnk" === input.extension ||
                  $guard(
                    _exceptionable,
                    {
                      path: _path + ".extension",
                      expected: '"lnk"',
                      value: input.extension,
                    },
                    errorFactory,
                  ));
              const $au0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): any =>
                (() => {
                  if ("directory" === input.type)
                    return $ao0(input, _path, true && _exceptionable);
                  else if ("jpg" === input.extension)
                    return $ao1(input, _path, true && _exceptionable);
                  else if ("txt" === input.extension)
                    return $ao2(input, _path, true && _exceptionable);
                  else if ("zip" === input.extension)
                    return $ao3(input, _path, true && _exceptionable);
                  else if ("lnk" === input.extension)
                    return $ao4(input, _path, true && _exceptionable);
                  else
                    return $guard(
                      _exceptionable,
                      {
                        path: _path,
                        expected:
                          "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile | ArrayRecursiveUnionExplicit.IShortcut)",
                        value: input,
                      },
                      errorFactory,
                    );
                })();
              return (
                ((Array.isArray(input) ||
                  $guard(
                    true,
                    {
                      path: _path + "",
                      expected: "ArrayRecursiveUnionExplicit",
                      value: input,
                    },
                    errorFactory,
                  )) &&
                  input.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(
                          true,
                          {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                            value: elem,
                          },
                          errorFactory,
                        )) &&
                        $au0(elem, _path + "[" + _index1 + "]", true)) ||
                      $guard(
                        true,
                        {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                          value: elem,
                        },
                        errorFactory,
                      ),
                  )) ||
                $guard(
                  true,
                  {
                    path: _path + "",
                    expected: "ArrayRecursiveUnionExplicit",
                    value: input,
                  },
                  errorFactory,
                )
              );
            })(input, "$input", true);
          return input;
        })(input);
        return p(input);
      },
  );
