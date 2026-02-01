import typia from "typia";

import { _test_is } from "../../internal/_test_is";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_is_ObjectUnionCompositePointer = (): void => _test_is(
    "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(
    ObjectUnionCompositePointer
)((input) => typia.is<ObjectUnionCompositePointer>(input));
