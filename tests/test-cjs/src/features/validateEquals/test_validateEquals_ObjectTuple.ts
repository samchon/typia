import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectTuple } from "../../structures/ObjectTuple";

export const test_validateEquals_ObjectTuple = (): void =>
  _test_validateEquals("ObjectTuple")<ObjectTuple>(ObjectTuple)((input) =>
    typia.validateEquals<ObjectTuple>(input),
  );
