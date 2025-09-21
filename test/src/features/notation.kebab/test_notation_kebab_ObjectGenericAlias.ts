import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_notation_validateKebab_ObjectGenericAlias = (): void =>
  _test_notation_validateGeneral("ObjectGenericAlias")<ObjectGenericAlias>(
    ObjectGenericAlias,
  )<typia.KebabCase<ObjectGenericAlias>>({
    convert: (input) =>
      typia.notations.validateKebab<ObjectGenericAlias>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectGenericAlias>>(),
  });
