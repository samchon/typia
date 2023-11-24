import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectGeneric } from "../../structures/ObjectGeneric";

export const test_validate_ObjectGeneric = _test_validate(
  "ObjectGeneric",
)<ObjectGeneric>(ObjectGeneric)((input) =>
  typia.validate<ObjectGeneric>(input),
);
