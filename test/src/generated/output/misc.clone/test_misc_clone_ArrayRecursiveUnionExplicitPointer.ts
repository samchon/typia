import typia from "typia";
import { _test_misc_clone } from "../../../internal/_test_misc_clone";
import { ArrayRecursiveUnionExplicitPointer } from "../../../structures/ArrayRecursiveUnionExplicitPointer";
export const test_misc_clone_ArrayRecursiveUnionExplicitPointer =
  _test_misc_clone(
    "ArrayRecursiveUnionExplicitPointer",
  )<ArrayRecursiveUnionExplicitPointer>(ArrayRecursiveUnionExplicitPointer)(
    (input) =>
      ((
        input: ArrayRecursiveUnionExplicitPointer,
      ): import("typia").Resolved<ArrayRecursiveUnionExplicitPointer> => {
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
        const $throws = (typia.misc.clone as any).throws;
        const $cp0 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $co1(elem)
              : (elem as any),
          );
        const $cp1 = (input: any) =>
          input.map((elem: any) =>
            "object" === typeof elem && null !== elem
              ? $co1(elem)
              : (elem as any),
          );
        const $co0 = (input: any): any => ({
          value: Array.isArray(input.value)
            ? $cp0(input.value)
            : (input.value as any),
        });
        const $co1 = (input: any): any => ({
          value:
            "object" === typeof input.value && null !== input.value
              ? $cu0(input.value)
              : (input.value as any),
        });
        const $co2 = (input: any): any => ({
          id: input.id as any,
          name: input.name as any,
          path: input.path as any,
          children: Array.isArray(input.children)
            ? $cp1(input.children)
            : (input.children as any),
          type: input.type as any,
        });
        const $co3 = (input: any): any => ({
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
        const $co4 = (input: any): any => ({
          id: input.id as any,
          name: input.name as any,
          path: input.path as any,
          size: input.size as any,
          content: input.content as any,
          type: input.type as any,
          extension: input.extension as any,
        });
        const $co5 = (input: any): any => ({
          id: input.id as any,
          name: input.name as any,
          path: input.path as any,
          size: input.size as any,
          count: input.count as any,
          type: input.type as any,
          extension: input.extension as any,
        });
        const $co6 = (input: any): any => ({
          id: input.id as any,
          name: input.name as any,
          path: input.path as any,
          target:
            "object" === typeof input.target && null !== input.target
              ? $co1(input.target)
              : (input.target as any),
          type: input.type as any,
          extension: input.extension as any,
        });
        const $cu0 = (input: any): any =>
          (() => {
            if ("directory" === input.type) return $co2(input);
            else if ("jpg" === input.extension) return $co3(input);
            else if ("txt" === input.extension) return $co4(input);
            else if ("zip" === input.extension) return $co5(input);
            else if ("lnk" === input.extension) return $co6(input);
            else
              $throws({
                expected:
                  "(ArrayRecursiveUnionExplicitPointer.IDirectory | ArrayRecursiveUnionExplicitPointer.IImageFile | ArrayRecursiveUnionExplicitPointer.ITextFile | ArrayRecursiveUnionExplicitPointer.IZipFile | ArrayRecursiveUnionExplicitPointer.IShortcut)",
                value: input,
              });
          })();
        return "object" === typeof input && null !== input
          ? $co0(input)
          : (input as any);
      })(input),
  );
