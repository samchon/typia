import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

import { TypeGuardError } from "typia";

export const test_assertEquals_ObjectUnionComposite = _test_assertEquals(TypeGuardError)(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(
    ObjectUnionComposite
)((input) => typia.assertEquals<ObjectUnionComposite>(input));
