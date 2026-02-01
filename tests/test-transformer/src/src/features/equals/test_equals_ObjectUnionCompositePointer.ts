import typia from "typia";

import { _test_equals } from "../../internal/_test_equals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_equals_ObjectUnionCompositePointer = (): void => _test_equals(
    "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(
    ObjectUnionCompositePointer
)((input) => typia.equals<ObjectUnionCompositePointer>(input));
