import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_is_ObjectTuple = (): void =>
  _test_is("ObjectTuple")<ObjectTuple>(ObjectTuple)((input) =>
    typia.is<ObjectTuple>(input),
  );
