import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_createValidate_ArrayAtomicAlias = _test_validate(
  "ArrayAtomicAlias",
)<ArrayAtomicAlias>(ArrayAtomicAlias)(typia.createValidate<ArrayAtomicAlias>());
