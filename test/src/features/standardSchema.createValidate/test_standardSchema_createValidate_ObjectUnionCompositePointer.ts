import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_standardSchema_createValidate_ObjectUnionCompositePointer = (): void => _test_standardSchema_validate(
    "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(
    ObjectUnionCompositePointer
)(typia.createValidate<ObjectUnionCompositePointer>());
