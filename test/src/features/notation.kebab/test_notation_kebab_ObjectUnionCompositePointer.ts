import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionCompositePointer } from "../../structures/ObjectUnionCompositePointer";

export const test_notation_validateKebab_ObjectUnionCompositePointer =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectUnionCompositePointer",
    )<ObjectUnionCompositePointer>(ObjectUnionCompositePointer)<
      typia.KebabCase<ObjectUnionCompositePointer>
    >({
      convert: (input) =>
        typia.notations.validateKebab<ObjectUnionCompositePointer>(input),
      assert:
        typia.createAssert<typia.KebabCase<ObjectUnionCompositePointer>>(),
    });
