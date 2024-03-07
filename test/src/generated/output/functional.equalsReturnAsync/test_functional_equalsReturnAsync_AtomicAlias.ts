import typia from "typia";
import { _test_functional_equalsReturnAsync } from "../../../internal/_test_functional_equalsReturnAsync";
import { AtomicAlias } from "../../../structures/AtomicAlias";
export const test_functional_equalsReturnAsync_AtomicAlias =
  _test_functional_equalsReturnAsync("AtomicAlias")(AtomicAlias)(
    (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
      async (input: AtomicAlias): Promise<AtomicAlias | null> => {
        const result = await p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is AtomicAlias => {
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
