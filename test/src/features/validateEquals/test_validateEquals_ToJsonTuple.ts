import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_validateEquals_ToJsonTuple = (): void =>
  _test_validateEquals("ToJsonTuple")<ToJsonTuple>(ToJsonTuple)((input) =>
    typia.validateEquals<ToJsonTuple>(input),
  );
