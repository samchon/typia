import typia from "typia";
import { _test_functional_equalsFunction } from "../../../internal/_test_functional_equalsFunction";
import { ArrayRecursiveUnionExplicit } from "../../../structures/ArrayRecursiveUnionExplicit";
export const test_functional_equalsFunction_ArrayRecursiveUnionExplicit =
  _test_functional_equalsFunction("ArrayRecursiveUnionExplicit")(
    ArrayRecursiveUnionExplicit,
  )(
    (p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit) =>
      (
        input: ArrayRecursiveUnionExplicit,
      ): ArrayRecursiveUnionExplicit | null => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is ArrayRecursiveUnionExplicit => {
            const $io0 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
            const $io1 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
            const $io2 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
            const $io3 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
            const $io4 = (
              input: any,
              _exceptionable: boolean = true,
            ): boolean =>
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
          })(input)
        )
          return null;
        const result = p(input);
        return ((
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
        })(result)
          ? result
          : null;
      },
  );
