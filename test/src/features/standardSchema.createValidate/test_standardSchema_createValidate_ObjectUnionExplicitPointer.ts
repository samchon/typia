import typia from "typia";

import { _test_standardSchema_validate } from "../../internal/_test_standardSchema_validate";
import { ObjectUnionExplicitPointer } from "../../structures/ObjectUnionExplicitPointer";

export const test_standardSchema_createValidate_ObjectUnionExplicitPointer =
  (): void =>
    _test_standardSchema_validate(
      "ObjectUnionExplicitPointer",
    )<ObjectUnionExplicitPointer>(ObjectUnionExplicitPointer)(
      typia.createValidate<ObjectUnionExplicitPointer>(),
    );
