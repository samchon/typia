import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ToJsonArray } from "../../structures/ToJsonArray";

export const test_is_ToJsonArray = (): void =>
  _test_is("ToJsonArray")<ToJsonArray>(ToJsonArray)((input) =>
    typia.is<ToJsonArray>(input),
  );
