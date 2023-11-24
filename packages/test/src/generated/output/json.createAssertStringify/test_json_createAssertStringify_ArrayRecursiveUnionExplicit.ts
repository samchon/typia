import typia from "typia";

import { _test_json_assertStringify } from "../../../internal/_test_json_assertStringify";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";

export const test_json_createAssertStringify_ArrayRecursiveUnionExplicit =
  _test_json_assertStringify(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
    (input: any): string => {
      const assert = (input: any): ArrayRecursiveUnionExplicit => {
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
            const $guard = (typia.json.createAssertStringify as any).guard;
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
              (("number" === typeof input.size &&
                Number.isFinite(input.size)) ||
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
                $au0(
                  input.target,
                  _path + ".target",
                  true && _exceptionable,
                )) ||
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
      };
      const stringify = (input: ArrayRecursiveUnionExplicit): string => {
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
        const $number = (typia.json.createAssertStringify as any).number;
        const $string = (typia.json.createAssertStringify as any).string;
        const $throws = (typia.json.createAssertStringify as any).throws;
        const $so0 = (input: any): any =>
          `{"id":${$number(input.id)},"name":${$string(
            input.name,
          )},"path":${$string(input.path)},"children":${`[${input.children
            .map((elem: any) => $su0(elem))
            .join(",")}]`},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"directory"',
              value: input.type,
            });
          })()}}`;
        const $so1 = (input: any): any =>
          `{"id":${$number(input.id)},"name":${$string(
            input.name,
          )},"path":${$string(input.path)},"width":${$number(
            input.width,
          )},"height":${$number(input.height)},"url":${$string(
            input.url,
          )},"size":${$number(input.size)},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"file"',
              value: input.type,
            });
          })()},"extension":${(() => {
            if ("string" === typeof input.extension)
              return $string(input.extension);
            if ("string" === typeof input.extension)
              return '"' + input.extension + '"';
            $throws({
              expected: '"jpg"',
              value: input.extension,
            });
          })()}}`;
        const $so2 = (input: any): any =>
          `{"id":${$number(input.id)},"name":${$string(
            input.name,
          )},"path":${$string(input.path)},"size":${$number(
            input.size,
          )},"content":${$string(input.content)},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"file"',
              value: input.type,
            });
          })()},"extension":${(() => {
            if ("string" === typeof input.extension)
              return $string(input.extension);
            if ("string" === typeof input.extension)
              return '"' + input.extension + '"';
            $throws({
              expected: '"txt"',
              value: input.extension,
            });
          })()}}`;
        const $so3 = (input: any): any =>
          `{"id":${$number(input.id)},"name":${$string(
            input.name,
          )},"path":${$string(input.path)},"size":${$number(
            input.size,
          )},"count":${$number(input.count)},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"file"',
              value: input.type,
            });
          })()},"extension":${(() => {
            if ("string" === typeof input.extension)
              return $string(input.extension);
            if ("string" === typeof input.extension)
              return '"' + input.extension + '"';
            $throws({
              expected: '"zip"',
              value: input.extension,
            });
          })()}}`;
        const $so4 = (input: any): any =>
          `{"id":${$number(input.id)},"name":${$string(
            input.name,
          )},"path":${$string(input.path)},"target":${$su0(
            input.target,
          )},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"file"',
              value: input.type,
            });
          })()},"extension":${(() => {
            if ("string" === typeof input.extension)
              return $string(input.extension);
            if ("string" === typeof input.extension)
              return '"' + input.extension + '"';
            $throws({
              expected: '"lnk"',
              value: input.extension,
            });
          })()}}`;
        const $su0 = (input: any): any =>
          (() => {
            if ("directory" === input.type) return $so0(input);
            else if ("jpg" === input.extension) return $so1(input);
            else if ("txt" === input.extension) return $so2(input);
            else if ("zip" === input.extension) return $so3(input);
            else if ("lnk" === input.extension) return $so4(input);
            else
              $throws({
                expected:
                  "(ArrayRecursiveUnionExplicit.IDirectory | ArrayRecursiveUnionExplicit.IImageFile | ArrayRecursiveUnionExplicit.ITextFile | ArrayRecursiveUnionExplicit.IZipFile | ArrayRecursiveUnionExplicit.IShortcut)",
                value: input,
              });
          })();
        return `[${input.map((elem: any) => $su0(elem)).join(",")}]`;
      };
      return stringify(assert(input));
    },
  );
