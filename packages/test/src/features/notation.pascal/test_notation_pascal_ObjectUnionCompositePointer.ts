import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_notation_validatePascal_ObjectUnionCompositePointer =
  _test_notation_validateGeneral(
    "ObjectUnionCompositePointer",
  )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)<
    typia.PascalCase<ObjectUnionCompositePointer>
  >({
    convert: (input) =>
      typia.notations.validatePascal<ObjectUnionCompositePointer>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectUnionCompositePointer>>(),
  });
