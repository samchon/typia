import typia from "typia";

import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_misc_createValidatePrune_ObjectHttpCommentTag = (): void => _test_misc_validatePrune(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(
    ObjectHttpCommentTag
)(typia.misc.createValidatePrune<ObjectHttpCommentTag>());
