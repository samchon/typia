import typia from "typia";

import { _test_validate } from "../../internal/_test_validate";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_createValidate_ObjectUnionExplicitPointer = (): void =>
  _test_validate("ObjectUnionExplicitPointer")<ObjectUnionExplicitPointer>(
    ObjectUnionExplicitPointer,
  )(typia.createValidate<ObjectUnionExplicitPointer>());
