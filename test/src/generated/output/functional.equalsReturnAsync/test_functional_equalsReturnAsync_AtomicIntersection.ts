import typia from "typia";

import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_functional_equalsReturnAsync_AtomicIntersection =
  _test_functional_equalsReturnAsync("AtomicIntersection")(AtomicIntersection)(
    (p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
      async (input: AtomicIntersection): Promise<AtomicIntersection | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is AtomicIntersection => {
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
