import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_random_ObjectJsonTag = _test_random(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)({
  random: () => typia.random<ObjectJsonTag>((ObjectJsonTag as any).RANDOM),
  assert: typia.createAssert<ObjectJsonTag>(),
});
