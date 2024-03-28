import typia from "typia";

import { _test_functional_isParameters } from "../../../internal/_test_functional_isParameters";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_functional_isParameters_ObjectPrimitive =
  _test_functional_isParameters("ObjectPrimitive")(ObjectPrimitive)(
    (p: (input: ObjectPrimitive) => ObjectPrimitive) =>
      (input: ObjectPrimitive): ObjectPrimitive | null => {
        if (
          false ===
          ((input: any): input is ObjectPrimitive.IArticle => {
            const $io0 = (input: any): boolean =>
              "string" === typeof input.id &&
              ("html" === input.extension ||
                "md" === input.extension ||
                "txt" === input.extension) &&
              "string" === typeof input.title &&
              "string" === typeof input.body &&
              Array.isArray(input.files) &&
              input.files.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io1(elem),
              ) &&
              "boolean" === typeof input.secret &&
              "string" === typeof input.created_at;
            const $io1 = (input: any): boolean =>
              "string" === typeof input.id &&
              "string" === typeof input.name &&
              "string" === typeof input.extension &&
              "string" === typeof input.url &&
              "string" === typeof input.created_at;
            return "object" === typeof input && null !== input && $io0(input);
          })(input)
        )
          return null;
        return p(input);
      },
  );
