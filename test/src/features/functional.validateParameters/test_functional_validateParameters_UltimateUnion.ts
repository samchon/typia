import typia from "typia";

import { _test_functional_validateParameters } from "../../internal/_test_functional_validateParameters";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_validateParameters_UltimateUnion = (): void =>
  _test_functional_validateParameters("UltimateUnion")(UltimateUnion)(
    (p: (input: UltimateUnion) => UltimateUnion) =>
      typia.functional.validateParameters(p),
  );
