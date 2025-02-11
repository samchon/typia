import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_functional_isReturn_UltimateUnion = _test_functional_isReturn(
  "UltimateUnion",
)(UltimateUnion)((p: (input: UltimateUnion) => UltimateUnion) =>
  typia.functional.isReturn(p),
);
