import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_assert_ObjectHttpTypeTag = (): void =>
  _test_assert(TypeGuardError)("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )((input) => typia.assert<ObjectHttpTypeTag>(input));
