import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_createRandom_ObjectJsonTag = (): void =>
  _test_random("ObjectJsonTag")<ObjectJsonTag>(ObjectJsonTag)({
    random: typia.createRandom<ObjectJsonTag>((ObjectJsonTag as any).RANDOM),
    assert: typia.createAssert<ObjectJsonTag>(),
  });
