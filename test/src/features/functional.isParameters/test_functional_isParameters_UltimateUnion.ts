import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_isParameters_UltimateUnion = (): void =>
  _test_functional_isParameters("UltimateUnion")(UltimateUnion)(
    (p: (input: UltimateUnion) => UltimateUnion) =>
      typia.functional.isParameters(p),
  );
