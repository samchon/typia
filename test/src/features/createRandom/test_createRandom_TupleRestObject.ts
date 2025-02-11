import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TupleRestObject } from "../../structures/TupleRestObject";

export const test_createRandom_TupleRestObject = _test_random(
  "TupleRestObject",
)<TupleRestObject>(TupleRestObject)({
  random: typia.createRandom<TupleRestObject>((TupleRestObject as any).RANDOM),
  assert: typia.createAssert<TupleRestObject>(),
});
