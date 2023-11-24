import typia from "typia";

import { _test_misc_isPrune } from "../../../internal/_test_misc_isPrune";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";

export const test_misc_createIsPrune_ArrayRecursiveUnionExplicitPointer =
  _test_misc_isPrune(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    (input: any): input is ArrayRecursiveUnionExplicitPointer => {
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
        const $throws = (typia.misc.createIsPrune as any).throws;
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
      if (!is(input)) return false;
      prune(input);
      return true;
    },
  );
