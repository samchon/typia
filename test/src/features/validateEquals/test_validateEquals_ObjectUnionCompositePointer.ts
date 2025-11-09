import typia from "typia";

import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_validateEquals_ObjectUnionCompositePointer = (): void => _test_validateEquals(
    "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(
    ObjectUnionCompositePointer
)((input) => typia.validateEquals<ObjectUnionCompositePointer>(input));
