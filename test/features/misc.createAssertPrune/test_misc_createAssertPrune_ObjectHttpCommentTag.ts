import typia from "../../../src";
import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_misc_createAssertPrune_ObjectHttpCommentTag =
  _test_misc_assertPrune("ObjectHttpCommentTag")<ObjectHttpCommentTag>(
    ObjectHttpCommentTag,
  )(typia.misc.createAssertPrune<ObjectHttpCommentTag>());
