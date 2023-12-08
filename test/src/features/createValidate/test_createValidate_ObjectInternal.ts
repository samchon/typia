import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_createValidate_ObjectInternal = _test_validate(
  "ObjectInternal",
)<ObjectInternal>(ObjectInternal)(typia.createValidate<ObjectInternal>());
