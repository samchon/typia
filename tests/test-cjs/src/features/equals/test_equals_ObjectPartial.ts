import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_equals_ObjectPartial = (): void =>
  _test_equals("ObjectPartial")<ObjectPartial>(ObjectPartial)((input) =>
    typia.equals<ObjectPartial>(input),
  );
