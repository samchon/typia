import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_createEquals_ObjectHttpConstant = _test_equals(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)(
  typia.createEquals<ObjectHttpConstant>(),
);
