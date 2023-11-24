import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TupleRestAtomic } from "../../structures/TupleRestAtomic";

export const test_createRandom_TupleRestAtomic = _test_random(
  "TupleRestAtomic",
)<TupleRestAtomic>(TupleRestAtomic)({
  random: typia.createRandom<TupleRestAtomic>((TupleRestAtomic as any).RANDOM),
  assert: typia.createAssert<TupleRestAtomic>(),
});
