import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_notation_validatePascal_ObjectHttpTypeTag = (): void =>
    _test_notation_validateGeneral("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
        ObjectHttpTypeTag
  )<typia.PascalCase<ObjectHttpTypeTag>>({
    convert: (input) => typia.notations.validatePascal<ObjectHttpTypeTag>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectHttpTypeTag>>(),
  });
