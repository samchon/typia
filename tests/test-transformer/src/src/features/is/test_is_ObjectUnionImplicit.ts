import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_is_ObjectUnionImplicit = (): void => _test_is(
    "ObjectUnionImplicit",
)<ObjectUnionImplicit>(
    ObjectUnionImplicit
)((input) => typia.is<ObjectUnionImplicit>(input));
