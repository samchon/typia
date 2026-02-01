import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { ObjectGenericArray } from "../../structures/ObjectGenericArray";

export const test_createRandom_ObjectGenericArray = (): void => _test_random("ObjectGenericArray")<ObjectGenericArray>(
    ObjectGenericArray
)({
  random: typia.createRandom<ObjectGenericArray>((ObjectGenericArray as any).RANDOM),
  assert: typia.createAssert<ObjectGenericArray>(),
});
