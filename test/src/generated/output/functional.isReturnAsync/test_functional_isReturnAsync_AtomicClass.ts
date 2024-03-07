import typia from "typia";
import { _test_functional_isReturnAsync } from "../../../internal/_test_functional_isReturnAsync";
import { AtomicClass } from "../../../structures/AtomicClass";
export const test_functional_isReturnAsync_AtomicClass =
  _test_functional_isReturnAsync("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => Promise<AtomicClass>) =>
      async (input: AtomicClass): Promise<AtomicClass | null> => {
        const result = await p(input);
        return ((input: any): input is AtomicClass => {
          return (
            Array.isArray(input) &&
            input.length === 9 &&
            ("boolean" === typeof input[0] || input[0] instanceof Boolean) &&
            null !== input[1] &&
            undefined !== input[1] &&
            ("boolean" === typeof input[1] || input[1] instanceof Boolean) &&
            null !== input[2] &&
            undefined !== input[2] &&
            ("boolean" === typeof input[2] || input[2] instanceof Boolean) &&
            ("number" === typeof input[3] || input[3] instanceof Number) &&
            null !== input[4] &&
            undefined !== input[4] &&
            ("number" === typeof input[4] || input[4] instanceof Number) &&
            null !== input[5] &&
            undefined !== input[5] &&
            ("number" === typeof input[5] || input[5] instanceof Number) &&
            ("string" === typeof input[6] || input[6] instanceof String) &&
            null !== input[7] &&
            undefined !== input[7] &&
            ("string" === typeof input[7] || input[7] instanceof String) &&
            null !== input[8] &&
            undefined !== input[8] &&
            ("string" === typeof input[8] || input[8] instanceof String)
          );
        })(result)
          ? result
          : null;
      },
  );
