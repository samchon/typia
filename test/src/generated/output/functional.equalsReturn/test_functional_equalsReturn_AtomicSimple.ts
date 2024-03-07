import typia from "typia";
import { _test_functional_equalsReturn } from "../../../internal/_test_functional_equalsReturn";
import { AtomicSimple } from "../../../structures/AtomicSimple";
export const test_functional_equalsReturn_AtomicSimple =
  _test_functional_equalsReturn("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => AtomicSimple) =>
      (input: AtomicSimple): AtomicSimple | null => {
        const result = p(input);
        return ((
          input: any,
          _exceptionable: boolean = true,
        ): input is AtomicSimple => {
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
