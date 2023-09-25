import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpCommentTag } from "../../structures/ObjectHttpCommentTag";

export const test_assertEquals_ObjectHttpCommentTag = _test_assertEquals(
    "ObjectHttpCommentTag",
)<ObjectHttpCommentTag>(ObjectHttpCommentTag)((input) =>
    typia.assertEquals<ObjectHttpCommentTag>(input),
);
