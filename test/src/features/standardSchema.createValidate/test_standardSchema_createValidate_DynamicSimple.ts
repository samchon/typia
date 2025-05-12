import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_standardSchema_createValidate_DynamicSimple =
  _test_standardSchema_validate("DynamicSimple")<DynamicSimple>(DynamicSimple)(
    typia.createValidate<DynamicSimple>(),
  );
