import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { CommentTagPattern } from "../../structures/CommentTagPattern";

export const test_createRandom_CommentTagPattern = _test_random(
  "CommentTagPattern",
)<CommentTagPattern>(CommentTagPattern)({
  random: typia.createRandom<CommentTagPattern>(
    (CommentTagPattern as any).RANDOM,
  ),
  assert: typia.createAssert<CommentTagPattern>(),
});
