import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_createValidate_UltimateUnion = _test_validate(
  "UltimateUnion",
)<UltimateUnion>(UltimateUnion)(typia.createValidate<UltimateUnion>());
