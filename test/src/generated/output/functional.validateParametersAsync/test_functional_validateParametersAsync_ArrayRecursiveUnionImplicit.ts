import typia from "typia";

import { _test_functional_validateParametersAsync } from "../../../internal/_test_functional_validateParametersAsync";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_validateParametersAsync_ArrayRecursiveUnionImplicit =
  _test_functional_validateParametersAsync("ArrayRecursiveUnionImplicit")(
    ArrayRecursiveUnionImplicit,
  )(
    (
      p: (
        input: ArrayRecursiveUnionImplicit,
      ) => Promise<ArrayRecursiveUnionImplicit>,
    ) =>
      async (
        input: ArrayRecursiveUnionImplicit,
      ): Promise<import("typia").IValidation<ArrayRecursiveUnionImplicit>> => {
        const paramResults = [
          ((input: any): typia.IValidation<ArrayRecursiveUnionImplicit> => {
            const errors = [] as any[];
            const __is = (input: any): input is ArrayRecursiveUnionImplicit => {
              const $io0 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                Array.isArray(input.children) &&
                input.children.every(
                  (elem: any) =>
                    "object" === typeof elem && null !== elem && $iu0(elem),
                );
              const $io1 = (input: any): boolean =>
                ("read" === input.access || "write" === input.access) &&
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                Array.isArray(input.children) &&
                input.children.every(
                  (elem: any) =>
                    "object" === typeof elem && null !== elem && $iu0(elem),
                );
              const $io2 = (input: any): boolean =>
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
                Number.isFinite(input.size);
              const $io3 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "number" === typeof input.size &&
                Number.isFinite(input.size) &&
                "string" === typeof input.content;
              const $io4 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "number" === typeof input.size &&
                Number.isFinite(input.size) &&
                "number" === typeof input.count &&
                Number.isFinite(input.count);
              const $io5 = (input: any): boolean =>
                "number" === typeof input.id &&
                Number.isFinite(input.id) &&
                "string" === typeof input.name &&
                "string" === typeof input.path &&
                "object" === typeof input.target &&
                null !== input.target &&
                $iu0(input.target);
              const $iu0 = (input: any): any =>
                (() => {
                  if (undefined !== input.access) return $io1(input);
                  else if (undefined !== input.width) return $io2(input);
                  else if (undefined !== input.content) return $io3(input);
                  else if (undefined !== input.count) return $io4(input);
                  else if (undefined !== input.target) return $io5(input);
                  else return $io0(input);
                })();
              return (
                Array.isArray(input) &&
                input.every(
                  (elem: any) =>
                    "object" === typeof elem && null !== elem && $iu0(elem),
                )
              );
            };
            if (false === __is(input)) {
              const $report = (
                typia.functional.validateParameters as any
              ).report(errors);
              ((
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): input is ArrayRecursiveUnionImplicit => {
                const $vo0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ("number" === typeof input.id &&
                      Number.isFinite(input.id)) ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                      }),
                    "string" === typeof input.name ||
                      $report(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                      }),
                    "string" === typeof input.path ||
                      $report(_exceptionable, {
                        path: _path + ".path",
                        expected: "string",
                        value: input.path,
                      }),
                    ((Array.isArray(input.children) ||
                      $report(_exceptionable, {
                        path: _path + ".children",
                        expected: "Array<ArrayRecursiveUnionImplicit.IBucket>",
                        value: input.children,
                      })) &&
                      input.children
                        .map(
                          (elem: any, _index2: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                              $report(_exceptionable, {
                                path: _path + ".children[" + _index2 + "]",
                                expected:
                                  "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                                value: elem,
                              })) &&
                              $vu0(
                                elem,
                                _path + ".children[" + _index2 + "]",
                                true && _exceptionable,
                              )) ||
                            $report(_exceptionable, {
                              path: _path + ".children[" + _index2 + "]",
                              expected:
                                "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".children",
                        expected: "Array<ArrayRecursiveUnionImplicit.IBucket>",
                        value: input.children,
                      }),
                  ].every((flag: boolean) => flag);
                const $vo1 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    "read" === input.access ||
                      "write" === input.access ||
                      $report(_exceptionable, {
                        path: _path + ".access",
                        expected: '("read" | "write")',
                        value: input.access,
                      }),
                    ("number" === typeof input.id &&
                      Number.isFinite(input.id)) ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                      }),
                    "string" === typeof input.name ||
                      $report(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                      }),
                    "string" === typeof input.path ||
                      $report(_exceptionable, {
                        path: _path + ".path",
                        expected: "string",
                        value: input.path,
                      }),
                    ((Array.isArray(input.children) ||
                      $report(_exceptionable, {
                        path: _path + ".children",
                        expected: "Array<ArrayRecursiveUnionImplicit.IBucket>",
                        value: input.children,
                      })) &&
                      input.children
                        .map(
                          (elem: any, _index3: number) =>
                            ((("object" === typeof elem && null !== elem) ||
                              $report(_exceptionable, {
                                path: _path + ".children[" + _index3 + "]",
                                expected:
                                  "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                                value: elem,
                              })) &&
                              $vu0(
                                elem,
                                _path + ".children[" + _index3 + "]",
                                true && _exceptionable,
                              )) ||
                            $report(_exceptionable, {
                              path: _path + ".children[" + _index3 + "]",
                              expected:
                                "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                              value: elem,
                            }),
                        )
                        .every((flag: boolean) => flag)) ||
                      $report(_exceptionable, {
                        path: _path + ".children",
                        expected: "Array<ArrayRecursiveUnionImplicit.IBucket>",
                        value: input.children,
                      }),
                  ].every((flag: boolean) => flag);
                const $vo2 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ("number" === typeof input.id &&
                      Number.isFinite(input.id)) ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                      }),
                    "string" === typeof input.name ||
                      $report(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                      }),
                    "string" === typeof input.path ||
                      $report(_exceptionable, {
                        path: _path + ".path",
                        expected: "string",
                        value: input.path,
                      }),
                    ("number" === typeof input.width &&
                      Number.isFinite(input.width)) ||
                      $report(_exceptionable, {
                        path: _path + ".width",
                        expected: "number",
                        value: input.width,
                      }),
                    ("number" === typeof input.height &&
                      Number.isFinite(input.height)) ||
                      $report(_exceptionable, {
                        path: _path + ".height",
                        expected: "number",
                        value: input.height,
                      }),
                    "string" === typeof input.url ||
                      $report(_exceptionable, {
                        path: _path + ".url",
                        expected: "string",
                        value: input.url,
                      }),
                    ("number" === typeof input.size &&
                      Number.isFinite(input.size)) ||
                      $report(_exceptionable, {
                        path: _path + ".size",
                        expected: "number",
                        value: input.size,
                      }),
                  ].every((flag: boolean) => flag);
                const $vo3 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ("number" === typeof input.id &&
                      Number.isFinite(input.id)) ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                      }),
                    "string" === typeof input.name ||
                      $report(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                      }),
                    "string" === typeof input.path ||
                      $report(_exceptionable, {
                        path: _path + ".path",
                        expected: "string",
                        value: input.path,
                      }),
                    ("number" === typeof input.size &&
                      Number.isFinite(input.size)) ||
                      $report(_exceptionable, {
                        path: _path + ".size",
                        expected: "number",
                        value: input.size,
                      }),
                    "string" === typeof input.content ||
                      $report(_exceptionable, {
                        path: _path + ".content",
                        expected: "string",
                        value: input.content,
                      }),
                  ].every((flag: boolean) => flag);
                const $vo4 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ("number" === typeof input.id &&
                      Number.isFinite(input.id)) ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                      }),
                    "string" === typeof input.name ||
                      $report(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                      }),
                    "string" === typeof input.path ||
                      $report(_exceptionable, {
                        path: _path + ".path",
                        expected: "string",
                        value: input.path,
                      }),
                    ("number" === typeof input.size &&
                      Number.isFinite(input.size)) ||
                      $report(_exceptionable, {
                        path: _path + ".size",
                        expected: "number",
                        value: input.size,
                      }),
                    ("number" === typeof input.count &&
                      Number.isFinite(input.count)) ||
                      $report(_exceptionable, {
                        path: _path + ".count",
                        expected: "number",
                        value: input.count,
                      }),
                  ].every((flag: boolean) => flag);
                const $vo5 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): boolean =>
                  [
                    ("number" === typeof input.id &&
                      Number.isFinite(input.id)) ||
                      $report(_exceptionable, {
                        path: _path + ".id",
                        expected: "number",
                        value: input.id,
                      }),
                    "string" === typeof input.name ||
                      $report(_exceptionable, {
                        path: _path + ".name",
                        expected: "string",
                        value: input.name,
                      }),
                    "string" === typeof input.path ||
                      $report(_exceptionable, {
                        path: _path + ".path",
                        expected: "string",
                        value: input.path,
                      }),
                    ((("object" === typeof input.target &&
                      null !== input.target) ||
                      $report(_exceptionable, {
                        path: _path + ".target",
                        expected:
                          "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                        value: input.target,
                      })) &&
                      $vu0(
                        input.target,
                        _path + ".target",
                        true && _exceptionable,
                      )) ||
                      $report(_exceptionable, {
                        path: _path + ".target",
                        expected:
                          "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                        value: input.target,
                      }),
                  ].every((flag: boolean) => flag);
                const $vu0 = (
                  input: any,
                  _path: string,
                  _exceptionable: boolean = true,
                ): any =>
                  (() => {
                    if (undefined !== input.access)
                      return $vo1(input, _path, true && _exceptionable);
                    else if (undefined !== input.width)
                      return $vo2(input, _path, true && _exceptionable);
                    else if (undefined !== input.content)
                      return $vo3(input, _path, true && _exceptionable);
                    else if (undefined !== input.count)
                      return $vo4(input, _path, true && _exceptionable);
                    else if (undefined !== input.target)
                      return $vo5(input, _path, true && _exceptionable);
                    else return $vo0(input, _path, true && _exceptionable);
                  })();
                return (
                  ((Array.isArray(input) ||
                    $report(true, {
                      path: _path + "",
                      expected: "ArrayRecursiveUnionImplicit",
                      value: input,
                    })) &&
                    input
                      .map(
                        (elem: any, _index1: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(true, {
                              path: _path + "[" + _index1 + "]",
                              expected:
                                "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                              value: elem,
                            })) &&
                            $vu0(elem, _path + "[" + _index1 + "]", true)) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ArrayRecursiveUnionImplicit",
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
          })(input) as import("typia").IValidation.IFailure,
        ].filter((r: any) => false === r.success);
        if (paramResults.length > 0)
          return {
            success: false,
            errors: paramResults
              .map((r: any, i: any) =>
                r.errors.map((error: any) => ({
                  ...error,
                  path: error.path.replace("$input", `$input.parameters[${i}]`),
                })),
              )
              .flat(),
          };
        return {
          success: true,
          data: await p(input),
          errors: [],
        };
      },
  );
