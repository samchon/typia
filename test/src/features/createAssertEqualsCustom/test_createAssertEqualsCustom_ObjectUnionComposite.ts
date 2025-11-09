import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_createAssertEqualsCustom_ObjectUnionComposite = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(
    ObjectUnionComposite
)(typia.createAssertEquals<ObjectUnionComposite>((p) => new CustomGuardError(p)));
