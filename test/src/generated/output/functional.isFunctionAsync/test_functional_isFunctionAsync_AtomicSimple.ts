import typia from "typia";
import { _test_functional_isFunctionAsync } from "../../../internal/_test_functional_isFunctionAsync";
import { AtomicSimple } from "../../../structures/AtomicSimple";
export const test_functional_isFunctionAsync_AtomicSimple =
  _test_functional_isFunctionAsync("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
      async (input: AtomicSimple): Promise<AtomicSimple | null> => {
        if (
          false ===
          ((input: any): input is AtomicSimple => {
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
        const result = await p(input);
        return ((input: any): input is AtomicSimple => {
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
