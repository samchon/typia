import typia from "typia";

import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_misc_clone_ObjectUnionImplicit = (): void => _test_misc_clone(
    "ObjectUnionImplicit",
)<ObjectUnionImplicit>(
    ObjectUnionImplicit
)((input) => typia.misc.clone<ObjectUnionImplicit>(input));
