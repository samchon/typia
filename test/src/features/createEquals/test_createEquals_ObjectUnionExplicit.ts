import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionExplicit } from "../../structures/ObjectUnionExplicit";

export const test_createEquals_ObjectUnionExplicit = (): void => _test_equals(
    "ObjectUnionExplicit",
)<ObjectUnionExplicit>(
    ObjectUnionExplicit
)(typia.createEquals<ObjectUnionExplicit>());
