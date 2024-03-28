import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_functional_isParametersAsync_AtomicAlias =
  _test_functional_isParametersAsync("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
      async (input: AtomicAlias): Promise<AtomicAlias | null> => {
        if (
          false ===
          ((input: any): input is AtomicAlias => {
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
        return p(input);
      },
  );
