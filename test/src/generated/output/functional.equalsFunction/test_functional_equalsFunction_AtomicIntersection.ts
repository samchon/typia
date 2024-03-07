import typia from "typia";
import { _test_functional_equalsFunction } from "../../../internal/_test_functional_equalsFunction";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";
export const test_functional_equalsFunction_AtomicIntersection =
  _test_functional_equalsFunction("AtomicIntersection")(AtomicIntersection)(
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
        const result = p(input);
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
