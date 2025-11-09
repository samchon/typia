import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_equals_FunctionalProperty = (): void =>
  _test_equals("FunctionalProperty")<FunctionalProperty>(FunctionalProperty)(
    (input) => typia.equals<FunctionalProperty>(input),
  );
