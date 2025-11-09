import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createAssertCustom_ObjectUnionComposite = (): void =>
  _test_assert(CustomGuardError)("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )(typia.createAssert<ObjectUnionComposite>((p) => new CustomGuardError(p)));
