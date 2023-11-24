import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectJsonTag } from "../../structures/ObjectJsonTag";

export const test_createValidate_ObjectJsonTag = _test_validate(
  "ObjectJsonTag",
)<ObjectJsonTag>(ObjectJsonTag)(typia.createValidate<ObjectJsonTag>());
