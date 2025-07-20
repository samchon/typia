import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_random_ObjectUnionComposite = (): void =>
  _test_random("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )({
    random: () =>
      typia.random<ObjectUnionComposite>((ObjectUnionComposite as any).RANDOM),
    assert: typia.createAssert<ObjectUnionComposite>(),
  });
