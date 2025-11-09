import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";

export const test_notation_validatePascal_ObjectGenericAlias = (): void =>
    _test_notation_validateGeneral("ObjectGenericAlias")<ObjectGenericAlias>(
        ObjectGenericAlias
  )<typia.PascalCase<ObjectGenericAlias>>({
    convert: (input) => typia.notations.validatePascal<ObjectGenericAlias>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectGenericAlias>>(),
  });
