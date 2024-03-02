import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertEquals } from "../../../internal/_test_assertEquals";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_createAssertEquals_ArrayRecursiveUnionExplicit =
  _test_assertEquals(TypeGuardError)(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
    (
      input: any,
      errorFactory?: (p: import("typia").TypeGuardError.IProps) => Error,
    ): ArrayRecursiveUnionExplicit => {
      const __is = (
        input: any,
        _exceptionable: boolean = true,
      ): input is ArrayRecursiveUnionExplicit => {
        const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
          "number" === typeof input.id &&
          Number.isFinite(input.id) &&
          "string" === typeof input.name &&
          "string" === typeof input.path &&
          Array.isArray(input.children) &&
          input.children.every(
            (elem: any, _index2: number) =>
              "object" === typeof elem &&
              null !== elem &&
              $iu0(elem, true && _exceptionable),
          ) &&
          "directory" === input.type &&
          (5 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                ["id", "name", "path", "children", "type"].some(
                  (prop: any) => key === prop,
                )
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
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
          "jpg" === input.extension &&
          (9 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                [
                  "id",
                  "name",
                  "path",
                  "width",
                  "height",
                  "url",
                  "size",
                  "type",
                  "extension",
                ].some((prop: any) => key === prop)
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io2 = (input: any, _exceptionable: boolean = true): boolean =>
          "number" === typeof input.id &&
          Number.isFinite(input.id) &&
          "string" === typeof input.name &&
          "string" === typeof input.path &&
          "number" === typeof input.size &&
          Number.isFinite(input.size) &&
          "string" === typeof input.content &&
          "file" === input.type &&
          "txt" === input.extension &&
          (7 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                [
                  "id",
                  "name",
                  "path",
                  "size",
                  "content",
                  "type",
                  "extension",
                ].some((prop: any) => key === prop)
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io3 = (input: any, _exceptionable: boolean = true): boolean =>
          "number" === typeof input.id &&
          Number.isFinite(input.id) &&
          "string" === typeof input.name &&
          "string" === typeof input.path &&
          "number" === typeof input.size &&
          Number.isFinite(input.size) &&
          "number" === typeof input.count &&
          Number.isFinite(input.count) &&
          "file" === input.type &&
          "zip" === input.extension &&
          (7 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                [
                  "id",
                  "name",
                  "path",
                  "size",
                  "count",
                  "type",
                  "extension",
                ].some((prop: any) => key === prop)
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $io4 = (input: any, _exceptionable: boolean = true): boolean =>
          "number" === typeof input.id &&
          Number.isFinite(input.id) &&
          "string" === typeof input.name &&
          "string" === typeof input.path &&
          "object" === typeof input.target &&
          null !== input.target &&
          $iu0(input.target, true && _exceptionable) &&
          "file" === input.type &&
          "lnk" === input.extension &&
          (6 === Object.keys(input).length ||
            Object.keys(input).every((key: any) => {
              if (
                ["id", "name", "path", "target", "type", "extension"].some(
                  (prop: any) => key === prop,
                )
              )
                return true;
              const value = input[key];
              if (undefined === value) return true;
              return false;
            }));
        const $iu0 = (input: any, _exceptionable: boolean = true): any =>
          (() => {
            if ("directory" === input.type)
              return $io0(input, true && _exceptionable);
            else if ("jpg" === input.extension)
              return $io1(input, true && _exceptionable);
            else if ("txt" === input.extension)
              return $io2(input, true && _exceptionable);
            else if ("zip" === input.extension)
              return $io3(input, true && _exceptionable);
            else if ("lnk" === input.extension)
              return $io4(input, true && _exceptionable);
            else return false;
          })();
        return (
          Array.isArray(input) &&
          input.every(
            (elem: any, _index1: number) =>
              "object" === typeof elem && null !== elem && $iu0(elem, true),
          )
        );
      };
      if (false === __is(input))
        ((
          input: any,
          _path: string,
          _exceptionable: boolean = true,
        ): input is ArrayRecursiveUnionExplicit => {
          const $guard = (typia.createAssertEquals as any).guard;
          const $join = (typia.createAssertEquals as any).join;
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
              )) &&
            (5 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  ["id", "name", "path", "children", "type"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
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
            (("number" === typeof input.size && Number.isFinite(input.size)) ||
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
              )) &&
            (9 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  [
                    "id",
                    "name",
                    "path",
                    "width",
                    "height",
                    "url",
                    "size",
                    "type",
                    "extension",
                  ].some((prop: any) => key === prop)
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
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
            (("number" === typeof input.size && Number.isFinite(input.size)) ||
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
              )) &&
            (7 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  [
                    "id",
                    "name",
                    "path",
                    "size",
                    "content",
                    "type",
                    "extension",
                  ].some((prop: any) => key === prop)
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
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
            (("number" === typeof input.size && Number.isFinite(input.size)) ||
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
              )) &&
            (7 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  [
                    "id",
                    "name",
                    "path",
                    "size",
                    "count",
                    "type",
                    "extension",
                  ].some((prop: any) => key === prop)
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
              }));
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
            (((("object" === typeof input.target && null !== input.target) ||
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
              $au0(input.target, _path + ".target", true && _exceptionable)) ||
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
              )) &&
            (6 === Object.keys(input).length ||
              false === _exceptionable ||
              Object.keys(input).every((key: any) => {
                if (
                  ["id", "name", "path", "target", "type", "extension"].some(
                    (prop: any) => key === prop,
                  )
                )
                  return true;
                const value = input[key];
                if (undefined === value) return true;
                return $guard(
                  _exceptionable,
                  {
                    path: _path + $join(key),
                    expected: "undefined",
                    value: value,
                  },
                  errorFactory,
                );
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
    },
  );
