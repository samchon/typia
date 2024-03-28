import typia from "typia";

import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_functional_isParametersAsync_AtomicUnion =
  _test_functional_isParametersAsync("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
      async (input: AtomicUnion): Promise<AtomicUnion | null> => {
        if (
          false ===
          ((input: any): input is AtomicUnion => {
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any) =>
                  null === elem ||
                  "string" === typeof elem ||
                  ("number" === typeof elem && Number.isFinite(elem)) ||
                  "boolean" === typeof elem,
              )
            );
          })(input)
        )
          return null;
        return p(input);
      },
  );
