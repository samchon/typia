import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_createEquals_FunctionalProperty = (): void =>
  _test_equals("FunctionalProperty")<FunctionalProperty>(FunctionalProperty)(
    typia.createEquals<FunctionalProperty>(),
  );
