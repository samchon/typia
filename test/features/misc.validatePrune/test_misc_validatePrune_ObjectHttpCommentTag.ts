import typia from "../../../src";
import { _test_misc_validatePrune } from "../../internal/_test_misc_validatePrune";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_misc_validatePrune_ObjectHttpCommentTag =
    _test_misc_validatePrune("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
        ObjectHttpCommentTag,
    )((input) => typia.misc.validatePrune<ObjectHttpCommentTag>(input));
