import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_validate_DynamicSimple = (): void =>
  _test_validate("DynamicSimple")<DynamicSimple>(DynamicSimple)((input) =>
    typia.validate<DynamicSimple>(input),
  );
