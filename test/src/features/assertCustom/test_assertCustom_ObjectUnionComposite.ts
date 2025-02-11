import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertCustom_ObjectUnionComposite = _test_assert(CustomGuardError)(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(
    ObjectUnionComposite
)((input) => typia.assert<ObjectUnionComposite>(input, (p) => new CustomGuardError(p)));
