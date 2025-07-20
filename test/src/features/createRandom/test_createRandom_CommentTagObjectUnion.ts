import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { CommentTagObjectUnion } from "../../structures/CommentTagObjectUnion";

export const test_createRandom_CommentTagObjectUnion = (): void =>
  _test_random("CommentTagObjectUnion")<CommentTagObjectUnion>(
    CommentTagObjectUnion,
  )({
    random: typia.createRandom<CommentTagObjectUnion>(
      (CommentTagObjectUnion as any).RANDOM,
    ),
    assert: typia.createAssert<CommentTagObjectUnion>(),
  });
