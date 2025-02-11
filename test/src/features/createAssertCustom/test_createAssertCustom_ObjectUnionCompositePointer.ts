import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertCustom_ObjectUnionCompositePointer = _test_assert(CustomGuardError)(
    "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(
    ObjectUnionCompositePointer
)(typia.createAssert<ObjectUnionCompositePointer>((p) => new CustomGuardError(p)));
