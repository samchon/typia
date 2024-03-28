import typia from "typia";

import { _test_functional_equalsParameters } from "../../../internal/_test_functional_equalsParameters";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_functional_equalsParameters_AtomicSimple =
  _test_functional_equalsParameters("AtomicSimple")(AtomicSimple)(
    (p: (input: AtomicSimple) => AtomicSimple) =>
      (input: AtomicSimple): AtomicSimple | null => {
        if (
          false ===
          ((
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
          })(input)
        )
          return null;
        return p(input);
      },
  );
