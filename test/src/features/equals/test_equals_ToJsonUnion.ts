import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_equals_ToJsonUnion = (): void =>
  _test_equals("ToJsonUnion")<ToJsonUnion>(ToJsonUnion)((input) =>
    typia.equals<ToJsonUnion>(input),
  );
