import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_standardSchema_createValidate_UltimateUnion =
  _test_standardSchema_validate("UltimateUnion")<UltimateUnion>(UltimateUnion)(
    typia.createValidate<UltimateUnion>(),
  );
