import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_assertEqualsCustom_ObjectHttpTypeTag = _test_assertEquals(
  CustomGuardError,
)("ObjectHttpTypeTag")<ObjectHttpTypeTag>(ObjectHttpTypeTag)((input) =>
  typia.assertEquals<ObjectHttpTypeTag>(input, (p) => new CustomGuardError(p)),
);
