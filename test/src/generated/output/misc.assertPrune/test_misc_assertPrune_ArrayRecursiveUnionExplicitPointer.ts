import typia from "typia";

import { _test_misc_assertPrune } from "../../../internal/_test_misc_assertPrune";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_assertPrune_ArrayRecursiveUnionExplicitPointer =
  _test_misc_assertPrune(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    (input) =>
      ((input: any): ArrayRecursiveUnionExplicitPointer => {
        const assert = (input: any): ArrayRecursiveUnionExplicitPointer => {
          const __is = (
            input: any,
          ): input is ArrayRecursiveUnionExplicitPointer => {
            const $io0 = (input: any): boolean =>
              Array.isArray(input.value) &&
              input.value.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              );
            const $io1 = (input: any): boolean =>
              "object" === typeof input.value &&
              null !== input.value &&
              $iu0(input.value);
            const $io2 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.name &&
              "string" === typeof input.path &&
              Array.isArray(input.children) &&
              input.children.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              ) &&
              "directory" === input.type;
            const $io3 = (input: any): boolean =>
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
            const $io4 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.name &&
              "string" === typeof input.path &&
              "number" === typeof input.size &&
              Number.isFinite(input.size) &&
              "string" === typeof input.content &&
              "file" === input.type &&
              "txt" === input.extension;
            const $io5 = (input: any): boolean =>
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
            const $io6 = (input: any): boolean =>
              "number" === typeof input.id &&
              Number.isFinite(input.id) &&
              "string" === typeof input.name &&
              "string" === typeof input.path &&
              "object" === typeof input.target &&
              null !== input.target &&
              $io1(input.target) &&
              "file" === input.type &&
              "lnk" === input.extension;
            const $iu0 = (input: any): any =>
              (() => {
                if ("directory" === input.type) return $io2(input);
                else if ("jpg" === input.extension) return $io3(input);
                else if ("txt" === input.extension) return $io4(input);
                else if ("zip" === input.extension) return $io5(input);
                else if ("lnk" === input.extension) return $io6(input);
                else return false;
              })();
            return "object" === typeof input && null !== input && $io0(input);
          };
          if (false === __is(input))
            ((
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): input is ArrayRecursiveUnionExplicitPointer => {
              const $guard = require("typia/lib/functional/$guard").$guard(
                "typia.misc.assertPrune",
              );
              const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ((Array.isArray(input.value) ||
                  $guard(_exceptionable, {
                    path: _path + ".value",
                    expected:
                      "Array<ArrayRecursiveUnionExplicitPointer.IBucket>",
                    value: input.value,
                  })) &&
                  input.value.every(
                    (elem: any, _index1: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(_exceptionable, {
                          path: _path + ".value[" + _index1 + "]",
                          expected:
                            "ArrayRecursiveUnionExplicitPointer.IBucket",
                          value: elem,
                        })) &&
                        $ao1(
                          elem,
                          _path + ".value[" + _index1 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(_exceptionable, {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "ArrayRecursiveUnionExplicitPointer.IBucket",
                        value: elem,
                      }),
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "Array<ArrayRecursiveUnionExplicitPointer.IBucket>",
                  value: input.value,
                });
              const $ao1 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
              ): boolean =>
                ((("object" === typeof input.value && null !== input.value) ||
                  $guard(_exceptionable, {
                    path: _path + ".value",
                    expected:
                      "(ArrayRecursiveUnionExplicitPointer.IDirectory | ArrayRecursiveUnionExplicitPointer.IImageFile | ArrayRecursiveUnionExplicitPointer.IShortcut | ArrayRecursiveUnionExplicitPointer.ITextFile | ArrayRecursiveUnionExplicitPointer.IZipFile)",
                    value: input.value,
                  })) &&
                  $au0(
                    input.value,
                    _path + ".value",
                    true && _exceptionable,
                  )) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected:
                    "(ArrayRecursiveUnionExplicitPointer.IDirectory | ArrayRecursiveUnionExplicitPointer.IImageFile | ArrayRecursiveUnionExplicitPointer.IShortcut | ArrayRecursiveUnionExplicitPointer.ITextFile | ArrayRecursiveUnionExplicitPointer.IZipFile)",
                  value: input.value,
                });
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
                (((Array.isArray(input.children) ||
                  $guard(_exceptionable, {
                    path: _path + ".children",
                    expected:
                      "Array<ArrayRecursiveUnionExplicitPointer.IBucket>.o1",
                    value: input.children,
                  })) &&
                  input.children.every(
                    (elem: any, _index2: number) =>
                      ((("object" === typeof elem && null !== elem) ||
                        $guard(_exceptionable, {
                          path: _path + ".children[" + _index2 + "]",
                          expected:
                            "ArrayRecursiveUnionExplicitPointer.IBucket",
                          value: elem,
                        })) &&
                        $ao1(
                          elem,
                          _path + ".children[" + _index2 + "]",
                          true && _exceptionable,
                        )) ||
                      $guard(_exceptionable, {
                        path: _path + ".children[" + _index2 + "]",
                        expected: "ArrayRecursiveUnionExplicitPointer.IBucket",
                        value: elem,
                      }),
                  )) ||
                  $guard(_exceptionable, {
                    path: _path + ".children",
                    expected:
                      "Array<ArrayRecursiveUnionExplicitPointer.IBucket>.o1",
                    value: input.children,
                  })) &&
                ("directory" === input.type ||
                  $guard(_exceptionable, {
                    path: _path + ".type",
                    expected: '"directory"',
                    value: input.type,
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
              const $ao6 = (
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
                (((("object" === typeof input.target &&
                  null !== input.target) ||
                  $guard(_exceptionable, {
                    path: _path + ".target",
                    expected: "ArrayRecursiveUnionExplicitPointer.IBucket",
                    value: input.target,
                  })) &&
                  $ao1(
                    input.target,
                    _path + ".target",
                    true && _exceptionable,
                  )) ||
                  $guard(_exceptionable, {
                    path: _path + ".target",
                    expected: "ArrayRecursiveUnionExplicitPointer.IBucket",
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
                    return $ao2(input, _path, true && _exceptionable);
                  else if ("jpg" === input.extension)
                    return $ao3(input, _path, true && _exceptionable);
                  else if ("txt" === input.extension)
                    return $ao4(input, _path, true && _exceptionable);
                  else if ("zip" === input.extension)
                    return $ao5(input, _path, true && _exceptionable);
                  else if ("lnk" === input.extension)
                    return $ao6(input, _path, true && _exceptionable);
                  else
                    return $guard(_exceptionable, {
                      path: _path,
                      expected:
                        "(ArrayRecursiveUnionExplicitPointer.IDirectory | ArrayRecursiveUnionExplicitPointer.IImageFile | ArrayRecursiveUnionExplicitPointer.ITextFile | ArrayRecursiveUnionExplicitPointer.IZipFile | ArrayRecursiveUnionExplicitPointer.IShortcut)",
                      value: input,
                    });
                })();
              return (
                ((("object" === typeof input && null !== input) ||
                  $guard(true, {
                    path: _path + "",
                    expected: "ArrayRecursiveUnionExplicitPointer",
                    value: input,
                  })) &&
                  $ao0(input, _path + "", true)) ||
                $guard(true, {
                  path: _path + "",
                  expected: "ArrayRecursiveUnionExplicitPointer",
                  value: input,
                })
              );
            })(input, "$input", true);
          return input;
        };
        const prune = (input: ArrayRecursiveUnionExplicitPointer): void => {
          const $io1 = (input: any): boolean =>
            "object" === typeof input.value &&
            null !== input.value &&
            $iu0(input.value);
          const $io2 = (input: any): boolean =>
            "number" === typeof input.id &&
            "string" === typeof input.name &&
            "string" === typeof input.path &&
            Array.isArray(input.children) &&
            input.children.every(
              (elem: any) =>
                "object" === typeof elem && null !== elem && $io1(elem),
            ) &&
            "directory" === input.type;
          const $io3 = (input: any): boolean =>
            "number" === typeof input.id &&
            "string" === typeof input.name &&
            "string" === typeof input.path &&
            "number" === typeof input.width &&
            "number" === typeof input.height &&
            "string" === typeof input.url &&
            "number" === typeof input.size &&
            "file" === input.type &&
            "jpg" === input.extension;
          const $io4 = (input: any): boolean =>
            "number" === typeof input.id &&
            "string" === typeof input.name &&
            "string" === typeof input.path &&
            "number" === typeof input.size &&
            "string" === typeof input.content &&
            "file" === input.type &&
            "txt" === input.extension;
          const $io5 = (input: any): boolean =>
            "number" === typeof input.id &&
            "string" === typeof input.name &&
            "string" === typeof input.path &&
            "number" === typeof input.size &&
            "number" === typeof input.count &&
            "file" === input.type &&
            "zip" === input.extension;
          const $io6 = (input: any): boolean =>
            "number" === typeof input.id &&
            "string" === typeof input.name &&
            "string" === typeof input.path &&
            "object" === typeof input.target &&
            null !== input.target &&
            $io1(input.target) &&
            "file" === input.type &&
            "lnk" === input.extension;
          const $iu0 = (input: any): any =>
            (() => {
              if ("directory" === input.type) return $io2(input);
              else if ("jpg" === input.extension) return $io3(input);
              else if ("txt" === input.extension) return $io4(input);
              else if ("zip" === input.extension) return $io5(input);
              else if ("lnk" === input.extension) return $io6(input);
              else return false;
            })();
          const $throws = require("typia/lib/functional/$throws").$throws;
          const $pp0 = (input: any) =>
            input.forEach((elem: any) => {
              if ("object" === typeof elem && null !== elem) $po1(elem);
            });
          const $pp1 = (input: any) =>
            input.forEach((elem: any) => {
              if ("object" === typeof elem && null !== elem) $po1(elem);
            });
          const $po0 = (input: any): any => {
            if (Array.isArray(input.value)) $pp0(input.value);
            for (const key of Object.keys(input)) {
              if ("value" === key) continue;
              delete input[key];
            }
          };
          const $po1 = (input: any): any => {
            if ("object" === typeof input.value && null !== input.value)
              $pu0(input.value);
            for (const key of Object.keys(input)) {
              if ("value" === key) continue;
              delete input[key];
            }
          };
          const $po2 = (input: any): any => {
            if (Array.isArray(input.children)) $pp1(input.children);
            for (const key of Object.keys(input)) {
              if (
                "id" === key ||
                "name" === key ||
                "path" === key ||
                "children" === key ||
                "type" === key
              )
                continue;
              delete input[key];
            }
          };
          const $po3 = (input: any): any => {
            for (const key of Object.keys(input)) {
              if (
                "id" === key ||
                "name" === key ||
                "path" === key ||
                "width" === key ||
                "height" === key ||
                "url" === key ||
                "size" === key ||
                "type" === key ||
                "extension" === key
              )
                continue;
              delete input[key];
            }
          };
          const $po4 = (input: any): any => {
            for (const key of Object.keys(input)) {
              if (
                "id" === key ||
                "name" === key ||
                "path" === key ||
                "size" === key ||
                "content" === key ||
                "type" === key ||
                "extension" === key
              )
                continue;
              delete input[key];
            }
          };
          const $po5 = (input: any): any => {
            for (const key of Object.keys(input)) {
              if (
                "id" === key ||
                "name" === key ||
                "path" === key ||
                "size" === key ||
                "count" === key ||
                "type" === key ||
                "extension" === key
              )
                continue;
              delete input[key];
            }
          };
          const $po6 = (input: any): any => {
            if ("object" === typeof input.target && null !== input.target)
              $po1(input.target);
            for (const key of Object.keys(input)) {
              if (
                "id" === key ||
                "name" === key ||
                "path" === key ||
                "target" === key ||
                "type" === key ||
                "extension" === key
              )
                continue;
              delete input[key];
            }
          };
          const $pu0 = (input: any): any =>
            (() => {
              if ("directory" === input.type) return $po2(input);
              else if ("jpg" === input.extension) return $po3(input);
              else if ("txt" === input.extension) return $po4(input);
              else if ("zip" === input.extension) return $po5(input);
              else if ("lnk" === input.extension) return $po6(input);
              else
                $throws({
                  expected:
                    "(ArrayRecursiveUnionExplicitPointer.IDirectory | ArrayRecursiveUnionExplicitPointer.IImageFile | ArrayRecursiveUnionExplicitPointer.ITextFile | ArrayRecursiveUnionExplicitPointer.IZipFile | ArrayRecursiveUnionExplicitPointer.IShortcut)",
                  value: input,
                });
            })();
          if ("object" === typeof input && null !== input) $po0(input);
        };
        assert(input);
        prune(input);
        return input;
      })(input),
  );
