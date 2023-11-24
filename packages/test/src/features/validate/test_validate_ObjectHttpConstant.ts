import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectHttpConstant } from "../../structures/ObjectHttpConstant";

export const test_validate_ObjectHttpConstant = _test_validate(
  "ObjectHttpConstant",
)<ObjectHttpConstant>(ObjectHttpConstant)((input) =>
  typia.validate<ObjectHttpConstant>(input),
);
