import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_notation_createValidateKebab_ObjectHttpTypeTag = (): void =>
  _test_notation_validateGeneral("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )<typia.KebabCase<ObjectHttpTypeTag>>({
    convert: typia.notations.createValidateKebab<ObjectHttpTypeTag>(),
    assert: typia.createAssert<typia.KebabCase<ObjectHttpTypeTag>>(),
  });
