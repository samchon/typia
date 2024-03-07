import typia from "typia";
import { _test_functional_isParametersAsync } from "../../../internal/_test_functional_isParametersAsync";
import { AtomicSimple } from "../../../structures/AtomicSimple";
export const test_functional_isParametersAsync_AtomicSimple =
  _test_functional_isParametersAsync("AtomicSimple")(AtomicSimple)(
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
        return p(input);
      },
  );
