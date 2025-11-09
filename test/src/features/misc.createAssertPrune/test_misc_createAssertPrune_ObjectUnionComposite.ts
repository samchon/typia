import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ObjectUnionComposite = (): void => _test_misc_assertPrune(TypeGuardError)(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(
    ObjectUnionComposite
)(typia.misc.createAssertPrune<ObjectUnionComposite>());
