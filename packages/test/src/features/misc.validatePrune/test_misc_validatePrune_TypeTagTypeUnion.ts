import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagTypeUnion } from "../../structures/TypeTagTypeUnion";

export const test_misc_validatePrune_TypeTagTypeUnion =
  _test_misc_validatePrune("TypeTagTypeUnion")<TypeTagTypeUnion>(
    TypeTagTypeUnion,
  )((input) => typia.misc.validatePrune<TypeTagTypeUnion>(input));
