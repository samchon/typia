import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_createValidate_ObjectUnionCompositePointer = _test_validate(
  "ObjectUnionCompositePointer",
)<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)(
  typia.createValidate<ObjectUnionCompositePointer>(),
);
