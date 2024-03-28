import typia from "typia";

import { _test_functional_isReturn } from "../../../internal/_test_functional_isReturn";
import { AtomicAlias } from "../../../structures/AtomicAlias";

export const test_functional_isReturn_AtomicAlias = _test_functional_isReturn(
  "AtomicAlias",
)(AtomicAlias)(
  (p: (input: AtomicAlias) => AtomicAlias) =>
    (input: AtomicAlias): AtomicAlias | null => {
      const result = p(input);
      return ((input: any): input is AtomicAlias => {
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
