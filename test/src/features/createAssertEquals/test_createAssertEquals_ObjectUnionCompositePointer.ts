import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { TypeGuardError } from "typia";

export const test_createAssertEquals_ObjectUnionCompositePointer = (): void => _test_assertEquals(TypeGuardError)(
    "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(
    ObjectUnionCompositePointer
)(typia.createAssertEquals<ObjectUnionCompositePointer>());
