import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectSimple } from "../../structures/ObjectSimple";

export const test_random_ObjectSimple = _test_random(
  "ObjectSimple",
)<ObjectSimple>(ObjectSimple)({
  random: () => typia.random<ObjectSimple>((ObjectSimple as any).RANDOM),
  assert: typia.createAssert<ObjectSimple>(),
});
