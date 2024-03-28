import typia from "typia";

import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_functional_isReturnAsync_AtomicUnion =
  _test_functional_isReturnAsync("AtomicUnion")(AtomicUnion)(
    (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
      async (input: AtomicUnion): Promise<AtomicUnion | null> => {
        const result = await p(input);
        return ((input: any): input is AtomicUnion => {
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
        })(result)
          ? result
          : null;
      },
  );
