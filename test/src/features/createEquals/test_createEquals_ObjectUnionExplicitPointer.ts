import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_createEquals_ObjectUnionExplicitPointer = _test_equals(
    "ObjectUnionExplicitPointer",
)<ObjectUnionExplicitPointer>(
    ObjectUnionExplicitPointer
)(typia.createEquals<ObjectUnionExplicitPointer>());
