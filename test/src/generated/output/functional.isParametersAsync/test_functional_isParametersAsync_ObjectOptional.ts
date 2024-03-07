import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { ObjectOptional } from "../../../structures/ObjectOptional";
export const test_functional_isParametersAsync_ObjectOptional =
  _test_functional_isParametersAsync("ObjectOptional")(ObjectOptional)(
    (p: (input: ObjectOptional) => Promise<ObjectOptional>) =>
      async (input: ObjectOptional): Promise<ObjectOptional | null> => {
        if (
          false ===
          ((input: any): input is ObjectOptional => {
            const $io0 = (input: any): boolean =>
              (undefined === input.id || "string" === typeof input.id) &&
              (undefined === input.name || "string" === typeof input.name) &&
              (undefined === input.email || "string" === typeof input.email) &&
              (undefined === input.sequence ||
                ("number" === typeof input.sequence &&
                  Number.isFinite(input.sequence)));
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
