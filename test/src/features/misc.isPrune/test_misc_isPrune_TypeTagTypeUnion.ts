import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_misc_isPrune_TypeTagTypeUnion = _test_misc_isPrune(
  "TypeTagTypeUnion",
)<TypeTagTypeUnion>(TypeTagTypeUnion)((input) =>
  typia.misc.isPrune<TypeTagTypeUnion>(input),
);
