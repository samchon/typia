import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_notation_createValidatePascal_ObjectHttpTypeTag =
  _test_notation_validateGeneral("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )<typia.PascalCase<ObjectHttpTypeTag>>({
    convert: typia.notations.createValidatePascal<ObjectHttpTypeTag>(),
    assert: typia.createAssert<typia.PascalCase<ObjectHttpTypeTag>>(),
  });
