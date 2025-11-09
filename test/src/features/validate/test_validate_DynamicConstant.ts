import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_validate_DynamicConstant = (): void =>
  _test_validate("DynamicConstant")<DynamicConstant>(DynamicConstant)((input) =>
    typia.validate<DynamicConstant>(input),
  );
