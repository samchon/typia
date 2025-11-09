import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_assertEqualsCustom_ObjectUnionComposite = (): void => _test_assertEquals(CustomGuardError)(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(
    ObjectUnionComposite
)((input) => typia.assertEquals<ObjectUnionComposite>(input, (p) => new CustomGuardError(p)));
