import typia from "typia";

import { _test_json_isStringify } from "../../../internal/_test_json_isStringify";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_json_createIsStringify_ArrayRecursiveUnionExplicitPointer =
  _test_json_isStringify(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    (input: ArrayRecursiveUnionExplicitPointer): string | null => {
      const is = (input: any): input is ArrayRecursiveUnionExplicitPointer => {
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
      const stringify = (input: ArrayRecursiveUnionExplicitPointer): string => {
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
        // @ts-ignore;
        declare const require: (lib: string) => any;
        const $number = require("typia/lib/functional/$number").$number;
        const $string = require("typia/lib/functional/$string").$string;
        const $throws = require("typia/lib/functional/$throws").$throws(
          "typia.json.createIsStringify",
        );
        const $so0 = (input: any): any =>
          `{"value":${`[${input.value
            .map((elem: any) => $so1(elem))
            .join(",")}]`}}`;
        const $so1 = (input: any): any => `{"value":${$su0(input.value)}}`;
        const $so2 = (input: any): any =>
          `{"id":${$number(input.id)},"name":${$string(
            input.name,
          )},"path":${$string(input.path)},"children":${`[${input.children
            .map((elem: any) => $so1(elem))
            .join(",")}]`},"type":${(() => {
            if ("string" === typeof input.type) return $string(input.type);
            if ("string" === typeof input.type) return '"' + input.type + '"';
            $throws({
              expected: '"directory"',
              value: input.type,
            });
          })()}}`;
        const $so3 = (input: any): any =>
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
        const $so4 = (input: any): any =>
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
        const $so5 = (input: any): any =>
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
        const $so6 = (input: any): any =>
          `{"id":${$number(input.id)},"name":${$string(
            input.name,
          )},"path":${$string(input.path)},"target":${$so1(
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
            if ("directory" === input.type) return $so2(input);
            else if ("jpg" === input.extension) return $so3(input);
            else if ("txt" === input.extension) return $so4(input);
            else if ("zip" === input.extension) return $so5(input);
            else if ("lnk" === input.extension) return $so6(input);
            else
              $throws({
                expected:
                  "(ArrayRecursiveUnionExplicitPointer.IDirectory | ArrayRecursiveUnionExplicitPointer.IImageFile | ArrayRecursiveUnionExplicitPointer.ITextFile | ArrayRecursiveUnionExplicitPointer.IZipFile | ArrayRecursiveUnionExplicitPointer.IShortcut)",
                value: input,
              });
          })();
        return $so0(input);
      };
      return is(input) ? stringify(input) : null;
    },
  );
