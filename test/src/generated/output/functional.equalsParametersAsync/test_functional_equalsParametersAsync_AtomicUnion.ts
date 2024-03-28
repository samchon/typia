import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../../internal/_test_functional_equalsParametersAsync";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_functional_equalsParametersAsync_AtomicUnion =
  _test_functional_equalsParametersAsync("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
      async (input: AtomicUnion): Promise<AtomicUnion | null> => {
        if (
          false ===
          ((
            input: any,
            _exceptionable: boolean = true,
          ): input is AtomicUnion => {
            return (
              Array.isArray(input) &&
              input.every(
                (elem: any, _index1: number) =>
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
