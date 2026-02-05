import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_notation_createValidateKebab_ObjectUnionComposite =
  (): void =>
    _test_notation_validateGeneral(
      "ObjectUnionComposite",
    )<ObjectUnionComposite>(ObjectUnionComposite)<
      typia.KebabCase<ObjectUnionComposite>
    >({
      convert: typia.notations.createValidateKebab<ObjectUnionComposite>(),
      assert: typia.createAssert<typia.KebabCase<ObjectUnionComposite>>(),
    });
