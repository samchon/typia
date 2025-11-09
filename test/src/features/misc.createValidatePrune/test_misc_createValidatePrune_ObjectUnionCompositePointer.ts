import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_misc_createValidatePrune_ObjectUnionCompositePointer =
  (): void =>
    _test_misc_validatePrune(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
      typia.misc.createValidatePrune<ObjectUnionCompositePointer>(),
    );
