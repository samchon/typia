import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_is_UltimateUnion = _test_is("UltimateUnion")<UltimateUnion>(
  UltimateUnion,
)((input) => typia.is<UltimateUnion>(input));
