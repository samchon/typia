import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { SetSimple } from "../../structures/SetSimple";

export const test_createValidate_SetSimple = (): void =>
  _test_validate("SetSimple")<SetSimple>(SetSimple)(
    typia.createValidate<SetSimple>(),
  );
