import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectPartial } from "../../structures/ObjectPartial";

export const test_validateEquals_ObjectPartial = (): void =>
  _test_validateEquals("ObjectPartial")<ObjectPartial>(ObjectPartial)((input) =>
    typia.validateEquals<ObjectPartial>(input),
  );
