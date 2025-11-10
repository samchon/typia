import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectHttpAtomic } from "../../structures/ObjectHttpAtomic";

export const test_notation_validateKebab_ObjectHttpAtomic = (): void =>
  _test_notation_validateGeneral("ObjectHttpAtomic")<ObjectHttpAtomic>(
    ObjectHttpAtomic,
  )<typia.KebabCase<ObjectHttpAtomic>>({
    convert: (input) => typia.notations.validateKebab<ObjectHttpAtomic>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectHttpAtomic>>(),
  });
