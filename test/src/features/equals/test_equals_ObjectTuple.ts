import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_equals_ObjectTuple = (): void =>
  _test_equals("ObjectTuple")<ObjectTuple>(ObjectTuple)((input) =>
    typia.equals<ObjectTuple>(input),
  );
