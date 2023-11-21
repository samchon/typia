import typia from "../../../src";
import { _test_random } from "../../internal/_test_random";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_createRandom_ObjectHttpAtomic = _test_random(
  "ObjectHttpAtomic",
)<ObjectHttpAtomic>(ObjectHttpAtomic)({
  random: typia.createRandom<ObjectHttpAtomic>(
    (ObjectHttpAtomic as any).RANDOM,
  ),
  assert: typia.createAssert<ObjectHttpAtomic>(),
});
