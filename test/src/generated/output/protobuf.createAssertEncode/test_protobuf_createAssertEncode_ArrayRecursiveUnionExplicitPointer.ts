import typia from "typia";

import { _test_protobuf_assertEncode } from "../../../internal/_test_protobuf_assertEncode";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_protobuf_createAssertEncode_ArrayRecursiveUnionExplicitPointer =
  _test_protobuf_assertEncode(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)({
    encode: (input: any): Uint8Array => {
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
              "typia.protobuf.createAssertEncode",
            );
            const $ao0 = (
              input: any,
              _path: string,
              _exceptionable: boolean = true,
            ): boolean =>
              ((Array.isArray(input.value) ||
                $guard(_exceptionable, {
                  path: _path + ".value",
                  expected: "Array<ArrayRecursiveUnionExplicitPointer.IBucket>",
                  value: input.value,
                })) &&
                input.value.every(
                  (elem: any, _index1: number) =>
                    ((("object" === typeof elem && null !== elem) ||
                      $guard(_exceptionable, {
                        path: _path + ".value[" + _index1 + "]",
                        expected: "ArrayRecursiveUnionExplicitPointer.IBucket",
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
                $au0(input.value, _path + ".value", true && _exceptionable)) ||
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
                        expected: "ArrayRecursiveUnionExplicitPointer.IBucket",
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
              (((("object" === typeof input.target && null !== input.target) ||
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
      const encode = (
        input: ArrayRecursiveUnionExplicitPointer,
      ): Uint8Array => {
        const $throws = require("typia/lib/functional/$throws").$throws(
          "typia.protobuf.createAssertEncode",
        );
        const $ProtobufSizer =
          require("typia/lib/functional/$ProtobufSizer").$ProtobufSizer;
        const $ProtobufWriter =
          require("typia/lib/functional/$ProtobufWriter").$ProtobufWriter;
        const encoder = (writer: any): any => {
          const $peo0 = (input: any): any => {
            // property "value";
            if (0 !== input.value.length) {
              for (const elem of input.value) {
                // 1 -> ArrayRecursiveUnionExplicitPointer.IBucket;
                writer.uint32(10);
                writer.fork();
                $peo1(elem);
                writer.ldelim();
              }
            }
          };
          const $peo1 = (input: any): any => {
            // property "value";
            if ("directory" === input.value.type)
              (() => {
                // 1 -> ArrayRecursiveUnionExplicitPointer.IDirectory;
                writer.uint32(10);
                writer.fork();
                $peo2(input.value);
                writer.ldelim();
              })();
            else if ("jpg" === input.value.extension)
              (() => {
                // 2 -> ArrayRecursiveUnionExplicitPointer.IImageFile;
                writer.uint32(18);
                writer.fork();
                $peo3(input.value);
                writer.ldelim();
              })();
            else if ("txt" === input.value.extension)
              (() => {
                // 3 -> ArrayRecursiveUnionExplicitPointer.ITextFile;
                writer.uint32(26);
                writer.fork();
                $peo4(input.value);
                writer.ldelim();
              })();
            else if ("zip" === input.value.extension)
              (() => {
                // 4 -> ArrayRecursiveUnionExplicitPointer.IZipFile;
                writer.uint32(34);
                writer.fork();
                $peo5(input.value);
                writer.ldelim();
              })();
            else if ("lnk" === input.value.extension)
              (() => {
                // 5 -> ArrayRecursiveUnionExplicitPointer.IShortcut;
                writer.uint32(42);
                writer.fork();
                $peo6(input.value);
                writer.ldelim();
              })();
            else
              $throws({
                expected:
                  "(ArrayRecursiveUnionExplicitPointer.IDirectory | ArrayRecursiveUnionExplicitPointer.IImageFile | ArrayRecursiveUnionExplicitPointer.ITextFile | ArrayRecursiveUnionExplicitPointer.IZipFile | ArrayRecursiveUnionExplicitPointer.IShortcut)",
                value: input.value,
              });
          };
          const $peo2 = (input: any): any => {
            // property "id";
            writer.uint32(9);
            writer.double(input.id);
            // property "name";
            writer.uint32(18);
            writer.string(input.name);
            // property "path";
            writer.uint32(26);
            writer.string(input.path);
            // property "children";
            if (0 !== input.children.length) {
              for (const elem of input.children) {
                // 4 -> ArrayRecursiveUnionExplicitPointer.IBucket;
                writer.uint32(34);
                writer.fork();
                $peo1(elem);
                writer.ldelim();
              }
            }
            // property "type";
            writer.uint32(42);
            writer.string(input.type);
          };
          const $peo3 = (input: any): any => {
            // property "id";
            writer.uint32(9);
            writer.double(input.id);
            // property "name";
            writer.uint32(18);
            writer.string(input.name);
            // property "path";
            writer.uint32(26);
            writer.string(input.path);
            // property "width";
            writer.uint32(33);
            writer.double(input.width);
            // property "height";
            writer.uint32(41);
            writer.double(input.height);
            // property "url";
            writer.uint32(50);
            writer.string(input.url);
            // property "size";
            writer.uint32(57);
            writer.double(input.size);
            // property "type";
            writer.uint32(66);
            writer.string(input.type);
            // property "extension";
            writer.uint32(74);
            writer.string(input.extension);
          };
          const $peo4 = (input: any): any => {
            // property "id";
            writer.uint32(9);
            writer.double(input.id);
            // property "name";
            writer.uint32(18);
            writer.string(input.name);
            // property "path";
            writer.uint32(26);
            writer.string(input.path);
            // property "size";
            writer.uint32(33);
            writer.double(input.size);
            // property "content";
            writer.uint32(42);
            writer.string(input.content);
            // property "type";
            writer.uint32(50);
            writer.string(input.type);
            // property "extension";
            writer.uint32(58);
            writer.string(input.extension);
          };
          const $peo5 = (input: any): any => {
            // property "id";
            writer.uint32(9);
            writer.double(input.id);
            // property "name";
            writer.uint32(18);
            writer.string(input.name);
            // property "path";
            writer.uint32(26);
            writer.string(input.path);
            // property "size";
            writer.uint32(33);
            writer.double(input.size);
            // property "count";
            writer.uint32(41);
            writer.double(input.count);
            // property "type";
            writer.uint32(50);
            writer.string(input.type);
            // property "extension";
            writer.uint32(58);
            writer.string(input.extension);
          };
          const $peo6 = (input: any): any => {
            // property "id";
            writer.uint32(9);
            writer.double(input.id);
            // property "name";
            writer.uint32(18);
            writer.string(input.name);
            // property "path";
            writer.uint32(26);
            writer.string(input.path);
            // property "target";
            // 4 -> ArrayRecursiveUnionExplicitPointer.IBucket;
            writer.uint32(34);
            writer.fork();
            $peo1(input.target);
            writer.ldelim();
            // property "type";
            writer.uint32(42);
            writer.string(input.type);
            // property "extension";
            writer.uint32(50);
            writer.string(input.extension);
          };
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
          //ArrayRecursiveUnionExplicitPointer;
          $peo0(input);
          return writer;
        };
        const sizer = encoder(new $ProtobufSizer());
        const writer = encoder(new $ProtobufWriter(sizer));
        return writer.buffer();
      };
      return encode(assert(input));
    },
    decode: (
      input: Uint8Array,
    ): typia.Resolved<ArrayRecursiveUnionExplicitPointer> => {
      const $ProtobufReader =
        require("typia/lib/functional/$ProtobufReader").$ProtobufReader;
      const $pdo0 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          value: [] as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // type: Array<ArrayRecursiveUnionExplicitPointer.IBucket>;
              output.value.push($pdo1(reader, reader.uint32()));
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo1 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          value: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // ArrayRecursiveUnionExplicitPointer.IDirectory;
              output.value = $pdo2(reader, reader.uint32());
              break;
            case 2:
              // ArrayRecursiveUnionExplicitPointer.IImageFile;
              output.value = $pdo3(reader, reader.uint32());
              break;
            case 3:
              // ArrayRecursiveUnionExplicitPointer.ITextFile;
              output.value = $pdo4(reader, reader.uint32());
              break;
            case 4:
              // ArrayRecursiveUnionExplicitPointer.IZipFile;
              output.value = $pdo5(reader, reader.uint32());
              break;
            case 5:
              // ArrayRecursiveUnionExplicitPointer.IShortcut;
              output.value = $pdo6(reader, reader.uint32());
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo2 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: undefined as any,
          name: "" as any,
          path: "" as any,
          children: [] as any,
          type: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // double;
              output.id = reader.double();
              break;
            case 2:
              // string;
              output.name = reader.string();
              break;
            case 3:
              // string;
              output.path = reader.string();
              break;
            case 4:
              // type: Array<ArrayRecursiveUnionExplicitPointer.IBucket>;
              output.children.push($pdo1(reader, reader.uint32()));
              break;
            case 5:
              // string;
              output.type = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo3 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: undefined as any,
          name: "" as any,
          path: "" as any,
          width: undefined as any,
          height: undefined as any,
          url: "" as any,
          size: undefined as any,
          type: undefined as any,
          extension: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // double;
              output.id = reader.double();
              break;
            case 2:
              // string;
              output.name = reader.string();
              break;
            case 3:
              // string;
              output.path = reader.string();
              break;
            case 4:
              // double;
              output.width = reader.double();
              break;
            case 5:
              // double;
              output.height = reader.double();
              break;
            case 6:
              // string;
              output.url = reader.string();
              break;
            case 7:
              // double;
              output.size = reader.double();
              break;
            case 8:
              // string;
              output.type = reader.string();
              break;
            case 9:
              // string;
              output.extension = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo4 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: undefined as any,
          name: "" as any,
          path: "" as any,
          size: undefined as any,
          content: "" as any,
          type: undefined as any,
          extension: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // double;
              output.id = reader.double();
              break;
            case 2:
              // string;
              output.name = reader.string();
              break;
            case 3:
              // string;
              output.path = reader.string();
              break;
            case 4:
              // double;
              output.size = reader.double();
              break;
            case 5:
              // string;
              output.content = reader.string();
              break;
            case 6:
              // string;
              output.type = reader.string();
              break;
            case 7:
              // string;
              output.extension = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo5 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: undefined as any,
          name: "" as any,
          path: "" as any,
          size: undefined as any,
          count: undefined as any,
          type: undefined as any,
          extension: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // double;
              output.id = reader.double();
              break;
            case 2:
              // string;
              output.name = reader.string();
              break;
            case 3:
              // string;
              output.path = reader.string();
              break;
            case 4:
              // double;
              output.size = reader.double();
              break;
            case 5:
              // double;
              output.count = reader.double();
              break;
            case 6:
              // string;
              output.type = reader.string();
              break;
            case 7:
              // string;
              output.extension = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const $pdo6 = (reader: any, length: number = -1): any => {
        length = length < 0 ? reader.size() : reader.index() + length;
        const output = {
          id: undefined as any,
          name: "" as any,
          path: "" as any,
          target: undefined as any,
          type: undefined as any,
          extension: undefined as any,
        } as any;
        while (reader.index() < length) {
          const tag = reader.uint32();
          switch (tag >>> 3) {
            case 1:
              // double;
              output.id = reader.double();
              break;
            case 2:
              // string;
              output.name = reader.string();
              break;
            case 3:
              // string;
              output.path = reader.string();
              break;
            case 4:
              // ArrayRecursiveUnionExplicitPointer.IBucket;
              output.target = $pdo1(reader, reader.uint32());
              break;
            case 5:
              // string;
              output.type = reader.string();
              break;
            case 6:
              // string;
              output.extension = reader.string();
              break;
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return output;
      };
      const reader = new $ProtobufReader(input);
      return $pdo0(reader);
    },
    message:
      'syntax = "proto3";\n\nmessage ArrayRecursiveUnionExplicitPointer {\n    repeated ArrayRecursiveUnionExplicitPointer.IBucket value = 1;\n    message IBucket {\n        oneof value {\n            ArrayRecursiveUnionExplicitPointer.IDirectory v1 = 1;\n            ArrayRecursiveUnionExplicitPointer.IImageFile v2 = 2;\n            ArrayRecursiveUnionExplicitPointer.ITextFile v3 = 3;\n            ArrayRecursiveUnionExplicitPointer.IZipFile v4 = 4;\n            ArrayRecursiveUnionExplicitPointer.IShortcut v5 = 5;\n        }\n    }\n\n    message IDirectory {\n        required double id = 1;\n        required string name = 2;\n        required string path = 3;\n        repeated ArrayRecursiveUnionExplicitPointer.IBucket children = 4;\n        required string type = 5;\n    }\n\n    message IImageFile {\n        required double id = 1;\n        required string name = 2;\n        required string path = 3;\n        required double width = 4;\n        required double height = 5;\n        required string url = 6;\n        required double size = 7;\n        required string type = 8;\n        required string extension = 9;\n    }\n\n    message ITextFile {\n        required double id = 1;\n        required string name = 2;\n        required string path = 3;\n        required double size = 4;\n        required string content = 5;\n        required string type = 6;\n        required string extension = 7;\n    }\n\n    message IZipFile {\n        required double id = 1;\n        required string name = 2;\n        required string path = 3;\n        required double size = 4;\n        required double count = 5;\n        required string type = 6;\n        required string extension = 7;\n    }\n\n    message IShortcut {\n        required double id = 1;\n        required string name = 2;\n        required string path = 3;\n        required ArrayRecursiveUnionExplicitPointer.IBucket target = 4;\n        required string type = 5;\n        required string extension = 6;\n    }\n}',
  });
