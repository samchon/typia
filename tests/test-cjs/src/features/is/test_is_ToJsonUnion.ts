import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_is_ToJsonUnion = (): void =>
  _test_is("ToJsonUnion")<ToJsonUnion>(ToJsonUnion)((input) =>
    typia.is<ToJsonUnion>(input),
  );
