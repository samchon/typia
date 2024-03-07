import typia from "typia";
import { _test_equals } from "../../../internal/_test_equals";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";
export const test_createEquals_ObjectPrimitive = _test_equals(
  "ObjectPrimitive",
)<ObjectPrimitive>(ObjectPrimitive)(
  (input: any, _exceptionable: boolean = true): input is ObjectPrimitive => {
    const $io0 = (input: any, _exceptionable: boolean = true): boolean =>
      "string" === typeof input.id &&
      ("txt" === input.extension ||
        "md" === input.extension ||
        "html" === input.extension) &&
      "string" === typeof input.title &&
      "string" === typeof input.body &&
      Array.isArray(input.files) &&
      input.files.every(
        (elem: any, _index1: number) =>
          "object" === typeof elem &&
          null !== elem &&
          $io1(elem, true && _exceptionable),
      ) &&
      "boolean" === typeof input.secret &&
      "string" === typeof input.created_at &&
      (7 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            [
              "id",
              "extension",
              "title",
              "body",
              "files",
              "secret",
              "created_at",
            ].some((prop: any) => key === prop)
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    const $io1 = (input: any, _exceptionable: boolean = true): boolean =>
      "string" === typeof input.id &&
      "string" === typeof input.name &&
      "string" === typeof input.extension &&
      "string" === typeof input.url &&
      "string" === typeof input.created_at &&
      (5 === Object.keys(input).length ||
        Object.keys(input).every((key: any) => {
          if (
            ["id", "name", "extension", "url", "created_at"].some(
              (prop: any) => key === prop,
            )
          )
            return true;
          const value = input[key];
          if (undefined === value) return true;
          return false;
        }));
    return "object" === typeof input && null !== input && $io0(input, true);
  },
);
