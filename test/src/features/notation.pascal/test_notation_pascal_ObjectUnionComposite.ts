import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_notation_validatePascal_ObjectUnionComposite =
  _test_notation_validateGeneral("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )<typia.PascalCase<ObjectUnionComposite>>({
    convert: (input) =>
      typia.notations.validatePascal<ObjectUnionComposite>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectUnionComposite>>(),
  });
