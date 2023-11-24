import typia from "typia";

import { _test_notation_validateGeneral } from "../../../internal/_test_notation_validateGeneral";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_notation_validateSnake_ArrayRecursiveUnionExplicit =
  _test_notation_validateGeneral(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)<
    typia.SnakeCase<ArrayRecursiveUnionExplicit>
  >({
    convert: (input) =>
      ((
        input: any,
      ): typia.IValidation<typia.SnakeCase<ArrayRecursiveUnionExplicit>> => {
        const validate = (
          input: any,
        ): typia.IValidation<ArrayRecursiveUnionExplicit> => {
          const errors = [] as any[];
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
          if (false === __is(input)) {
            const $report = (typia.notations.validateSnake as any).report(
              errors,
            );
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayRecursiveUnionExplicit => {
              const $vo0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.id && Number.isFinite(input.id)) ||
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
                      expected: "Array<ArrayRecursiveUnionExplicit.IBucket>",
                      value: input.children,
                    })) &&
                    input.children
                      .map(
                        (elem: any, _index2: number) =>
                          ((("object" === typeof elem && null !== elem) ||
                            $report(_exceptionable, {
                              path: _path + ".children[" + _index2 + "]",
                              expected:
                                "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
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
                              "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                            value: elem,
                          }),
                      )
                      .every((flag: boolean) => flag)) ||
                    $report(_exceptionable, {
                      path: _path + ".children",
                      expected: "Array<ArrayRecursiveUnionExplicit.IBucket>",
                      value: input.children,
                    }),
                  "directory" === input.type ||
                    $report(_exceptionable, {
                      path: _path + ".type",
                      expected: '"directory"',
                      value: input.type,
                    }),
                ].every((flag: boolean) => flag);
              const $vo1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.id && Number.isFinite(input.id)) ||
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
                  "file" === input.type ||
                    $report(_exceptionable, {
                      path: _path + ".type",
                      expected: '"file"',
                      value: input.type,
                    }),
                  "jpg" === input.extension ||
                    $report(_exceptionable, {
                      path: _path + ".extension",
                      expected: '"jpg"',
                      value: input.extension,
                    }),
                ].every((flag: boolean) => flag);
              const $vo2 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.id && Number.isFinite(input.id)) ||
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
                  "file" === input.type ||
                    $report(_exceptionable, {
                      path: _path + ".type",
                      expected: '"file"',
                      value: input.type,
                    }),
                  "txt" === input.extension ||
                    $report(_exceptionable, {
                      path: _path + ".extension",
                      expected: '"txt"',
                      value: input.extension,
                    }),
                ].every((flag: boolean) => flag);
              const $vo3 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.id && Number.isFinite(input.id)) ||
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
                  "file" === input.type ||
                    $report(_exceptionable, {
                      path: _path + ".type",
                      expected: '"file"',
                      value: input.type,
                    }),
                  "zip" === input.extension ||
                    $report(_exceptionable, {
                      path: _path + ".extension",
                      expected: '"zip"',
                      value: input.extension,
                    }),
                ].every((flag: boolean) => flag);
              const $vo4 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                [
                  ("number" === typeof input.id && Number.isFinite(input.id)) ||
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
                        "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
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
                        "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                      value: input.target,
                    }),
                  "file" === input.type ||
                    $report(_exceptionable, {
                      path: _path + ".type",
                      expected: '"file"',
                      value: input.type,
                    }),
                  "lnk" === input.extension ||
                    $report(_exceptionable, {
                      path: _path + ".extension",
                      expected: '"lnk"',
                      value: input.extension,
                    }),
                ].every((flag: boolean) => flag);
              const $vu0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): any =>
                (() => {
                  if ("directory" === input.type)
                    return $vo0(input, _path, true && _exceptionable);
                  else if ("jpg" === input.extension)
                    return $vo1(input, _path, true && _exceptionable);
                  else if ("txt" === input.extension)
                    return $vo2(input, _path, true && _exceptionable);
                  else if ("zip" === input.extension)
                    return $vo3(input, _path, true && _exceptionable);
                  else if ("lnk" === input.extension)
                    return $vo4(input, _path, true && _exceptionable);
                  else
                    return $report(_exceptionable, {
                      path: _path,
                      expected:
                        "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile | ArrayRecursiveUnionExplicit.IShortcut)",
                      value: input,
                    });
                })();
              return (
                ((Array.isArray(input) ||
                  $report(true, {
                    path: _path + "",
                    expected: "ArrayRecursiveUnionExplicit",
                    value: input,
                  })) &&
                  input
                    .map(
                      (elem: any, _index1: number) =>
                        ((("object" === typeof elem && null !== elem) ||
                          $report(true, {
                            path: _path + "[" + _index1 + "]",
                            expected:
                              "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                            value: elem,
                          })) &&
                          $vu0(elem, _path + "[" + _index1 + "]", true)) ||
                        $report(true, {
                          path: _path + "[" + _index1 + "]",
                          expected:
                            "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                          value: elem,
                        }),
                    )
                    .every((flag: boolean) => flag)) ||
                $report(true, {
                  path: _path + "",
                  expected: "ArrayRecursiveUnionExplicit",
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
          input: ArrayRecursiveUnionExplicit,
        ): typia.SnakeCase<ArrayRecursiveUnionExplicit> => {
          const $io0 = (input: any): boolean =>
            "number" === typeof input.id &&
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
            "string" === typeof input.name &&
            "string" === typeof input.path &&
            "number" === typeof input.width &&
            "number" === typeof input.height &&
            "string" === typeof input.url &&
            "number" === typeof input.size &&
            "file" === input.type &&
            "jpg" === input.extension;
          const $io2 = (input: any): boolean =>
            "number" === typeof input.id &&
            "string" === typeof input.name &&
            "string" === typeof input.path &&
            "number" === typeof input.size &&
            "string" === typeof input.content &&
            "file" === input.type &&
            "txt" === input.extension;
          const $io3 = (input: any): boolean =>
            "number" === typeof input.id &&
            "string" === typeof input.name &&
            "string" === typeof input.path &&
            "number" === typeof input.size &&
            "number" === typeof input.count &&
            "file" === input.type &&
            "zip" === input.extension;
          const $io4 = (input: any): boolean =>
            "number" === typeof input.id &&
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
          const $throws = (typia.notations.validateSnake as any).throws;
          const $cp0 = (input: any) =>
            input.map((elem: any) =>
              "object" === typeof elem && null !== elem
                ? $cu0(elem)
                : (elem as any),
            );
          const $cp1 = (input: any) =>
            input.map((elem: any) =>
              "object" === typeof elem && null !== elem
                ? $cu0(elem)
                : (elem as any),
            );
          const $co0 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
            path: input.path as any,
            children: Array.isArray(input.children)
              ? $cp1(input.children)
              : (input.children as any),
            type: input.type as any,
          });
          const $co1 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
            path: input.path as any,
            width: input.width as any,
            height: input.height as any,
            url: input.url as any,
            size: input.size as any,
            type: input.type as any,
            extension: input.extension as any,
          });
          const $co2 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
            path: input.path as any,
            size: input.size as any,
            content: input.content as any,
            type: input.type as any,
            extension: input.extension as any,
          });
          const $co3 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
            path: input.path as any,
            size: input.size as any,
            count: input.count as any,
            type: input.type as any,
            extension: input.extension as any,
          });
          const $co4 = (input: any): any => ({
            id: input.id as any,
            name: input.name as any,
            path: input.path as any,
            target:
              "object" === typeof input.target && null !== input.target
                ? $cu0(input.target)
                : (input.target as any),
            type: input.type as any,
            extension: input.extension as any,
          });
          const $cu0 = (input: any): any =>
            (() => {
              if ("directory" === input.type) return $co0(input);
              else if ("jpg" === input.extension) return $co1(input);
              else if ("txt" === input.extension) return $co2(input);
              else if ("zip" === input.extension) return $co3(input);
              else if ("lnk" === input.extension) return $co4(input);
              else
                $throws({
                  expected:
                    "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile | ArrayRecursiveUnionExplicit.IShortcut)",
                  value: input,
                });
            })();
          return Array.isArray(input) ? $cp0(input) : (input as any);
        };
        const output = validate(input) as any;
        if (output.success) output.data = general(input);
        return output;
      })(input),
    assert: (input: any): typia.SnakeCase<ArrayRecursiveUnionExplicit> => {
      const __is = (
        input: any,
      ): input is typia.SnakeCase<ArrayRecursiveUnionExplicit> => {
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
        ): input is typia.SnakeCase<ArrayRecursiveUnionExplicit> => {
          const $guard = (typia.createAssert as any).guard;
          const $ao0 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.id && Number.isFinite(input.id)) ||
              $guard(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id,
              })) &&
            ("string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              })) &&
            ("string" === typeof input.path ||
              $guard(_exceptionable, {
                path: _path + ".path",
                expected: "string",
                value: input.path,
              })) &&
            (((Array.isArray(input.children) ||
              $guard(_exceptionable, {
                path: _path + ".children",
                expected: "Array<ArrayRecursiveUnionExplicit.IBucket>",
                value: input.children,
              })) &&
              input.children.every(
                (elem: any, _index2: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(_exceptionable, {
                      path: _path + ".children[" + _index2 + "]",
                      expected:
                        "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                      value: elem,
                    })) &&
                    $au0(
                      elem,
                      _path + ".children[" + _index2 + "]",
                      true && _exceptionable,
                    )) ||
                  $guard(_exceptionable, {
                    path: _path + ".children[" + _index2 + "]",
                    expected:
                      "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                    value: elem,
                  }),
              )) ||
              $guard(_exceptionable, {
                path: _path + ".children",
                expected: "Array<ArrayRecursiveUnionExplicit.IBucket>",
                value: input.children,
              })) &&
            ("directory" === input.type ||
              $guard(_exceptionable, {
                path: _path + ".type",
                expected: '"directory"',
                value: input.type,
              }));
          const $ao1 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.id && Number.isFinite(input.id)) ||
              $guard(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id,
              })) &&
            ("string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              })) &&
            ("string" === typeof input.path ||
              $guard(_exceptionable, {
                path: _path + ".path",
                expected: "string",
                value: input.path,
              })) &&
            (("number" === typeof input.width &&
              Number.isFinite(input.width)) ||
              $guard(_exceptionable, {
                path: _path + ".width",
                expected: "number",
                value: input.width,
              })) &&
            (("number" === typeof input.height &&
              Number.isFinite(input.height)) ||
              $guard(_exceptionable, {
                path: _path + ".height",
                expected: "number",
                value: input.height,
              })) &&
            ("string" === typeof input.url ||
              $guard(_exceptionable, {
                path: _path + ".url",
                expected: "string",
                value: input.url,
              })) &&
            (("number" === typeof input.size && Number.isFinite(input.size)) ||
              $guard(_exceptionable, {
                path: _path + ".size",
                expected: "number",
                value: input.size,
              })) &&
            ("file" === input.type ||
              $guard(_exceptionable, {
                path: _path + ".type",
                expected: '"file"',
                value: input.type,
              })) &&
            ("jpg" === input.extension ||
              $guard(_exceptionable, {
                path: _path + ".extension",
                expected: '"jpg"',
                value: input.extension,
              }));
          const $ao2 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.id && Number.isFinite(input.id)) ||
              $guard(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id,
              })) &&
            ("string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              })) &&
            ("string" === typeof input.path ||
              $guard(_exceptionable, {
                path: _path + ".path",
                expected: "string",
                value: input.path,
              })) &&
            (("number" === typeof input.size && Number.isFinite(input.size)) ||
              $guard(_exceptionable, {
                path: _path + ".size",
                expected: "number",
                value: input.size,
              })) &&
            ("string" === typeof input.content ||
              $guard(_exceptionable, {
                path: _path + ".content",
                expected: "string",
                value: input.content,
              })) &&
            ("file" === input.type ||
              $guard(_exceptionable, {
                path: _path + ".type",
                expected: '"file"',
                value: input.type,
              })) &&
            ("txt" === input.extension ||
              $guard(_exceptionable, {
                path: _path + ".extension",
                expected: '"txt"',
                value: input.extension,
              }));
          const $ao3 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.id && Number.isFinite(input.id)) ||
              $guard(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id,
              })) &&
            ("string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              })) &&
            ("string" === typeof input.path ||
              $guard(_exceptionable, {
                path: _path + ".path",
                expected: "string",
                value: input.path,
              })) &&
            (("number" === typeof input.size && Number.isFinite(input.size)) ||
              $guard(_exceptionable, {
                path: _path + ".size",
                expected: "number",
                value: input.size,
              })) &&
            (("number" === typeof input.count &&
              Number.isFinite(input.count)) ||
              $guard(_exceptionable, {
                path: _path + ".count",
                expected: "number",
                value: input.count,
              })) &&
            ("file" === input.type ||
              $guard(_exceptionable, {
                path: _path + ".type",
                expected: '"file"',
                value: input.type,
              })) &&
            ("zip" === input.extension ||
              $guard(_exceptionable, {
                path: _path + ".extension",
                expected: '"zip"',
                value: input.extension,
              }));
          const $ao4 = (
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): boolean =>
            (("number" === typeof input.id && Number.isFinite(input.id)) ||
              $guard(_exceptionable, {
                path: _path + ".id",
                expected: "number",
                value: input.id,
              })) &&
            ("string" === typeof input.name ||
              $guard(_exceptionable, {
                path: _path + ".name",
                expected: "string",
                value: input.name,
              })) &&
            ("string" === typeof input.path ||
              $guard(_exceptionable, {
                path: _path + ".path",
                expected: "string",
                value: input.path,
              })) &&
            (((("object" === typeof input.target && null !== input.target) ||
              $guard(_exceptionable, {
                path: _path + ".target",
                expected:
                  "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                value: input.target,
              })) &&
              $au0(input.target, _path + ".target", true && _exceptionable)) ||
              $guard(_exceptionable, {
                path: _path + ".target",
                expected:
                  "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                value: input.target,
              })) &&
            ("file" === input.type ||
              $guard(_exceptionable, {
                path: _path + ".type",
                expected: '"file"',
                value: input.type,
              })) &&
            ("lnk" === input.extension ||
              $guard(_exceptionable, {
                path: _path + ".extension",
                expected: '"lnk"',
                value: input.extension,
              }));
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
                return $guard(_exceptionable, {
                  path: _path,
                  expected:
                    "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile | ArrayRecursiveUnionExplicit.IShortcut)",
                  value: input,
                });
            })();
          return (
            ((Array.isArray(input) ||
              $guard(true, {
                path: _path + "",
                expected: "ArrayRecursiveUnionExplicit",
                value: input,
              })) &&
              input.every(
                (elem: any, _index1: number) =>
                  ((("object" === typeof elem && null !== elem) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                      value: elem,
                    })) &&
                    $au0(elem, _path + "[" + _index1 + "]", true)) ||
                  $guard(true, {
                    path: _path + "[" + _index1 + "]",
                    expected:
                      "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.IShortcut | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile)",
                    value: elem,
                  }),
              )) ||
            $guard(true, {
              path: _path + "",
              expected: "ArrayRecursiveUnionExplicit",
              value: input,
            })
          );
        })(input, "$input", true);
      return input;
    },
  });
