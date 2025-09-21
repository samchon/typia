import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_notation_createValidateKebab_ObjectUnionCompositePointer =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)<
      typia.KebabCase<ObjectUnionCompositePointer>
    >({
      convert:
        typia.notations.createValidateKebab<ObjectUnionCompositePointer>(),
      assert:
        typia.createAssert<typia.KebabCase<ObjectUnionCompositePointer>>(),
    });
