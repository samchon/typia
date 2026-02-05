import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpTypeTag } from "../../structures/ObjectHttpTypeTag";

export const test_notation_validateKebab_ObjectHttpTypeTag = (): void =>
  _test_notation_validateGeneral("ObjectHttpTypeTag")<ObjectHttpTypeTag>(
    ObjectHttpTypeTag,
  )<typia.KebabCase<ObjectHttpTypeTag>>({
    convert: (input) => typia.notations.validateKebab<ObjectHttpTypeTag>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectHttpTypeTag>>(),
  });
