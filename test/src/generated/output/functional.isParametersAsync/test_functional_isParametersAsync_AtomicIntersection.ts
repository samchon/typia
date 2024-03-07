import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";
export const test_functional_isParametersAsync_AtomicIntersection =
  _test_functional_isParametersAsync("AtomicIntersection")(AtomicIntersection)(
    (p: (input: AtomicIntersection) => Promise<AtomicIntersection>) =>
      async (input: AtomicIntersection): Promise<AtomicIntersection | null> => {
        if (
          false ===
          ((input: any): input is AtomicIntersection => {
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
