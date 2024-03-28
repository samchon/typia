import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { ObjectDynamic } from "../../../structures/ObjectDynamic";

export const test_functional_isFunctionAsync_ObjectDynamic =
  _test_functional_isFunctionAsync("ObjectDynamic")(ObjectDynamic)(
    (p: (input: ObjectDynamic) => Promise<ObjectDynamic>) =>
      async (input: ObjectDynamic): Promise<ObjectDynamic | null> => {
        if (
          false ===
          ((input: any): input is ObjectDynamic => {
            const $io0 = (input: any): boolean =>
              Object.keys(input).every((key: any) => {
                const value = input[key];
                if (undefined === value) return true;
                return (
                  "string" === typeof value ||
                  ("number" === typeof value && Number.isFinite(value)) ||
                  "boolean" === typeof value
                );
              });
            return (
              "object" === typeof input &&
              null !== input &&
              false === Array.isArray(input) &&
              $io0(input)
            );
          })(input)
        )
          return null;
        const result = await p(input);
        return ((input: any): input is ObjectDynamic => {
          const $io0 = (input: any): boolean =>
            Object.keys(input).every((key: any) => {
              const value = input[key];
              if (undefined === value) return true;
              return (
                "string" === typeof value ||
                ("number" === typeof value && Number.isFinite(value)) ||
                "boolean" === typeof value
              );
            });
          return (
            "object" === typeof input &&
            null !== input &&
            false === Array.isArray(input) &&
            $io0(input)
          );
        })(result)
          ? result
          : null;
      },
  );
