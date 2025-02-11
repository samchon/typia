import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionImplicit } from "../../structures/ObjectUnionImplicit";

export const test_createEquals_ObjectUnionImplicit = _test_equals(
    "ObjectUnionImplicit",
)<ObjectUnionImplicit>(
    ObjectUnionImplicit
)(typia.createEquals<ObjectUnionImplicit>());
