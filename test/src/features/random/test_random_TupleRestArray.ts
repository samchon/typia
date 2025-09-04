import typia from "typia";

import { _test_random } from "../../internal/_test_random";
import { TupleRestArray } from "../../structures/TupleRestArray";

export const test_random_TupleRestArray = (): void =>
  _test_random("TupleRestArray")<TupleRestArray>(TupleRestArray)({
    random: () => typia.random<TupleRestArray>((TupleRestArray as any).RANDOM),
    assert: typia.createAssert<TupleRestArray>(),
  });
