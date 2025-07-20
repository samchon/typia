import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_equals_ToJsonTuple = (): void =>
  _test_equals("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)((input) =>
    typia.equals<ToJsonTuple>(input),
  );
