import typia from "typia";

import { _test_assertGuardEquals } from "../../internal/_test_assertGuardEquals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { TypeGuardError } from "typia";

export const test_assertGuardEquals_ObjectUnionCompositePointer = (): void => _test_assertGuardEquals(TypeGuardError)(
    "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(
    ObjectUnionCompositePointer
)((input) => typia.assertGuardEquals<ObjectUnionCompositePointer>(input));
