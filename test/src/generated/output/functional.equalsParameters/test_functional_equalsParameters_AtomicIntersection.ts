import typia from "typia";
import { _test_functional_equalsParameters } from "../../../internal/_test_functional_equalsParameters";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";
export const test_functional_equalsParameters_AtomicIntersection =
  _test_functional_equalsParameters("AtomicIntersection")(AtomicIntersection)(
    (p: (input: AtomicIntersection) => AtomicIntersection) =>
      (input: AtomicIntersection): AtomicIntersection | null => {
        if (
          false ===
          ((
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
          })(input)
        )
          return null;
        return p(input);
      },
  );
