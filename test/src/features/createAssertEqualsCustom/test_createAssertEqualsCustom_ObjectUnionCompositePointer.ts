import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectUnionCompositePointer = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(
    ObjectUnionCompositePointer
)(typia.createAssertEquals<ObjectUnionCompositePointer>((p) => new CustomGuardError(p)));
