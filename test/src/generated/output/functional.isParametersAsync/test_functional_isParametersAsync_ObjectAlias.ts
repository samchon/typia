import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ObjectAlias } from "../../../structures/ObjectAlias";

export const test_functional_isParametersAsync_ObjectAlias =
  _test_functional_isParametersAsync("ObjectAlias")(ObjectAlias)(
    (p: (input: ObjectAlias) => Promise<ObjectAlias>) =>
      async (input: ObjectAlias): Promise<ObjectAlias | null> => {
        if (
          false ===
          ((input: any): input is ObjectAlias => {
            const $io0 = (input: any): boolean =>
              (null === input.id || "string" === typeof input.id) &&
              "string" === typeof input.email &&
              "string" === typeof input.name &&
              (null === input.sex ||
                1 === input.sex ||
                2 === input.sex ||
                "female" === input.sex ||
                "male" === input.sex) &&
              (null === input.age ||
                ("number" === typeof input.age &&
                  Number.isFinite(input.age))) &&
              (null === input.dead || "boolean" === typeof input.dead);
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  "object" === typeof elem && null !== elem && $io0(elem),
              )
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
