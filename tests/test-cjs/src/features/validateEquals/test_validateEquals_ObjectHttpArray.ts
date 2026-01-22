import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectHttpArray } from "../../structures/ObjectHttpArray";

export const test_validateEquals_ObjectHttpArray = (): void =>
  _test_validateEquals("ObjectHttpArray")<ObjectHttpArray>(ObjectHttpArray)(
    (input) => typia.validateEquals<ObjectHttpArray>(input),
  );
