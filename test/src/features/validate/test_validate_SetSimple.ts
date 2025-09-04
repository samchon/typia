import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { SetSimple } from "../../structures/SetSimple";

export const test_validate_SetSimple = (): void =>
  _test_validate("SetSimple")<SetSimple>(SetSimple)((input) =>
    typia.validate<SetSimple>(input),
  );
