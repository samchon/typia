import typia from "typia";

import { _test_misc_assertClone } from "../../../internal/_test_misc_assertClone";
import { ArrayRecursiveUnionImplicit } from "../../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_createAssertClone_ArrayRecursiveUnionImplicit =
  _test_misc_assertClone(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
    (input: any): typia.Resolved<ArrayRecursiveUnionImplicit> => {
      const assert = (input: any): ArrayRecursiveUnionImplicit => {
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
        if (false === __is(input))
          ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
          ): input is ArrayRecursiveUnionImplicit => {
            const $guard = (typia.misc.createAssertClone as any).guard;
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
                  expected: "Array<ArrayRecursiveUnionImplicit.IBucket>",
                  value: input.children,
                })) &&
                input.children.every(
                  (elem: any, _index2: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".children[" + _index2 + "]",
                        expected:
                          "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
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
                        "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".children",
                  expected: "Array<ArrayRecursiveUnionImplicit.IBucket>",
                  value: input.children,
                }));
            const $ao1 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ("read" === input.access ||
                "write" === input.access ||
                $guard(_exceptionable, {
                  path: _path + ".access",
                  expected: '("read" | "write")',
                  value: input.access,
                })) &&
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
                  expected: "Array<ArrayRecursiveUnionImplicit.IBucket>",
                  value: input.children,
                })) &&
                input.children.every(
                  (elem: any, _index3: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".children[" + _index3 + "]",
                        expected:
                          "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                        value: elem,
                      })) &&
                      $au0(
                        elem,
                        _path + ".children[" + _index3 + "]",
                        true && _exceptionable,
                      )) ||
                    $guard(_exceptionable, {
                      path: _path + ".children[" + _index3 + "]",
                      expected:
                        "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                      value: elem,
                    }),
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".children",
                  expected: "Array<ArrayRecursiveUnionImplicit.IBucket>",
                  value: input.children,
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
              (("number" === typeof input.size &&
                Number.isFinite(input.size)) ||
                $guard(_exceptionable, {
                  path: _path + ".size",
                  expected: "number",
                  value: input.size,
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
              (("number" === typeof input.size &&
                Number.isFinite(input.size)) ||
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
              (("number" === typeof input.size &&
                Number.isFinite(input.size)) ||
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
                }));
            const $ao5 = (
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
                    "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                  value: input.target,
                })) &&
                $au0(
                  input.target,
                  _path + ".target",
                  true && _exceptionable,
                )) ||
                $guard(_exceptionable, {
                  path: _path + ".target",
                  expected:
                    "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                  value: input.target,
                }));
            const $au0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): any =>
              (() => {
                if (undefined !== input.access)
                  return $ao1(input, _path, true && _exceptionable);
                else if (undefined !== input.width)
                  return $ao2(input, _path, true && _exceptionable);
                else if (undefined !== input.content)
                  return $ao3(input, _path, true && _exceptionable);
                else if (undefined !== input.count)
                  return $ao4(input, _path, true && _exceptionable);
                else if (undefined !== input.target)
                  return $ao5(input, _path, true && _exceptionable);
                else return $ao0(input, _path, true && _exceptionable);
              })();
            return (
              ((Array.isArray(input) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ArrayRecursiveUnionImplicit",
                  value: input,
                })) &&
                input.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(true, {
                        path: _path + "[" + _index1 + "]",
                        expected:
                          "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                        value: elem,
                      })) &&
                      $au0(elem, _path + "[" + _index1 + "]", true)) ||
                    $guard(true, {
                      path: _path + "[" + _index1 + "]",
                      expected:
                        "(ArrayRecursiveUnionImplicit.IDirectory | ArrayRecursiveUnionImplicit.IImageFile | ArrayRecursiveUnionImplicit.ISharedDirectory | ArrayRecursiveUnionImplicit.IShortcut | ArrayRecursiveUnionImplicit.ITextFile | ArrayRecursiveUnionImplicit.IZipFile)",
                      value: elem,
                    }),
                )) ||
              $guard(true, {
                path: _path + "",
                expected: "ArrayRecursiveUnionImplicit",
                value: input,
              })
            );
          })(input, "$input", true);
        return input;
      };
      const clone = (
        input: ArrayRecursiveUnionImplicit,
      ): typia.Resolved<ArrayRecursiveUnionImplicit> => {
        const $io0 = (input: any): boolean =>
          "number" === typeof input.id &&
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
          "string" === typeof input.name &&
          "string" === typeof input.path &&
          Array.isArray(input.children) &&
          input.children.every(
            (elem: any) =>
              "object" === typeof elem && null !== elem && $iu0(elem),
          );
        const $io2 = (input: any): boolean =>
          "number" === typeof input.id &&
          "string" === typeof input.name &&
          "string" === typeof input.path &&
          "number" === typeof input.width &&
          "number" === typeof input.height &&
          "string" === typeof input.url &&
          "number" === typeof input.size;
        const $io3 = (input: any): boolean =>
          "number" === typeof input.id &&
          "string" === typeof input.name &&
          "string" === typeof input.path &&
          "number" === typeof input.size &&
          "string" === typeof input.content;
        const $io4 = (input: any): boolean =>
          "number" === typeof input.id &&
          "string" === typeof input.name &&
          "string" === typeof input.path &&
          "number" === typeof input.size &&
          "number" === typeof input.count;
        const $io5 = (input: any): boolean =>
          "number" === typeof input.id &&
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
        });
        const $co1 = (input: any): any => ({
          access: input.access as any,
          id: input.id as any,
          name: input.name as any,
          path: input.path as any,
          children: Array.isArray(input.children)
            ? $cp1(input.children)
            : (input.children as any),
        });
        const $co2 = (input: any): any => ({
          id: input.id as any,
          name: input.name as any,
          path: input.path as any,
          width: input.width as any,
          height: input.height as any,
          url: input.url as any,
          size: input.size as any,
        });
        const $co3 = (input: any): any => ({
          id: input.id as any,
          name: input.name as any,
          path: input.path as any,
          size: input.size as any,
          content: input.content as any,
        });
        const $co4 = (input: any): any => ({
          id: input.id as any,
          name: input.name as any,
          path: input.path as any,
          size: input.size as any,
          count: input.count as any,
        });
        const $co5 = (input: any): any => ({
          id: input.id as any,
          name: input.name as any,
          path: input.path as any,
          target:
            "object" === typeof input.target && null !== input.target
              ? $cu0(input.target)
              : (input.target as any),
        });
        const $cu0 = (input: any): any =>
          (() => {
            if (undefined !== input.access) return $co1(input);
            else if (undefined !== input.width) return $co2(input);
            else if (undefined !== input.content) return $co3(input);
            else if (undefined !== input.count) return $co4(input);
            else if (undefined !== input.target) return $co5(input);
            else return $co0(input);
          })();
        return Array.isArray(input) ? $cp0(input) : (input as any);
      };
      assert(input);
      const output = clone(input);
      return output;
    },
  );
