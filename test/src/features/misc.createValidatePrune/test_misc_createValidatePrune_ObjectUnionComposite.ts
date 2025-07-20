import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_misc_createValidatePrune_ObjectUnionComposite = (): void =>
  _test_misc_validatePrune("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )(typia.misc.createValidatePrune<ObjectUnionComposite>());
