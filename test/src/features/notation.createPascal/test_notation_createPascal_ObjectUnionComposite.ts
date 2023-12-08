import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_notation_createValidatePascal_ObjectUnionComposite =
  _test_notation_validateGeneral("ObjectUnionComposite")<ObjectUnionComposite>(
    ObjectUnionComposite,
  )<typia.PascalCase<ObjectUnionComposite>>({
    convert: typia.notations.createValidatePascal<ObjectUnionComposite>(),
    assert: typia.createAssert<typia.PascalCase<ObjectUnionComposite>>(),
  });
