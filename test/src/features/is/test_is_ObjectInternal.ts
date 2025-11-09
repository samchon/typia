import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_is_ObjectInternal = (): void =>
  _test_is("ObjectInternal")<ObjectInternal>(ObjectInternal)((input) =>
    typia.is<ObjectInternal>(input),
  );
