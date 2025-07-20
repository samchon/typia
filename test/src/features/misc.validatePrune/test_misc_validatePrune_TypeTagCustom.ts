import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_misc_validatePrune_TypeTagCustom = (): void =>
  _test_misc_validatePrune("TypeTagCustom")<TypeTagCustom>(TypeTagCustom)(
    (input) => typia.misc.validatePrune<TypeTagCustom>(input),
  );
