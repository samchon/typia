import typia from "../../../src";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { CommentTagLength } from "../../structures/CommentTagLength";

export const test_createAssertEquals_CommentTagLength = _test_assertEquals(
  "CommentTagLength",
)<CommentTagLength>(CommentTagLength)(
  typia.createAssertEquals<CommentTagLength>(),
);
