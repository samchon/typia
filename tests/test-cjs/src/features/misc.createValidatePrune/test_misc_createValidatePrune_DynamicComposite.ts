import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_misc_createValidatePrune_DynamicComposite = (): void =>
  _test_misc_validatePrune("DynamicComposite")<DynamicComposite>(
    DynamicComposite,
  )(typia.misc.createValidatePrune<DynamicComposite>());
