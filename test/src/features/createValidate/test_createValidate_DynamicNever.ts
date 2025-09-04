import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_createValidate_DynamicNever = (): void =>
  _test_validate("DynamicNever")<DynamicNever>(DynamicNever)(
    typia.createValidate<DynamicNever>(),
  );
