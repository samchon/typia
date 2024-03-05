import typia from "typia";

import { _test_functional_equalsFunction } from "../../../internal/_test_functional_equalsFunction";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_functional_equalsFunction_AtomicAlias =
  _test_functional_equalsFunction("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => AtomicAlias) =>
      (input: AtomicAlias): AtomicAlias | null => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is AtomicAlias => {
            return (
              Array.isArray(input) &&
              input.length === 3 &&
              "boolean" === typeof input[0] &&
              "number" === typeof input[1] &&
              Number.isFinite(input[1]) &&
              "string" === typeof input[2]
            );
          })(input)
        )
          return null;
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is AtomicAlias => {
          return (
            Array.isArray(input) &&
            input.length === 3 &&
            "boolean" === typeof input[0] &&
            "number" === typeof input[1] &&
            Number.isFinite(input[1]) &&
            "string" === typeof input[2]
          );
        })(result)
          ? result
          : null;
      },
  );
