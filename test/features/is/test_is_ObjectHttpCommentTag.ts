import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_is_ObjectHttpCommentTag = _test_is(
  "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
  typia.is<ObjectHttpCommentTag>(input),
);
