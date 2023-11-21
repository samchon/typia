import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectHttpNullable } from "../../structures/ObjectHttpNullable";

export const test_random_ObjectHttpNullable = _test_random(
  "ObjectHttpNullable",
)<ObjectHttpNullable>(ObjectHttpNullable)({
  random: () =>
    typia.random<ObjectHttpNullable>((ObjectHttpNullable as any).RANDOM),
  assert: typia.createAssert<ObjectHttpNullable>(),
});
