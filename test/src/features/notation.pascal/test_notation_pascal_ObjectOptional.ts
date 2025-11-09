import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_notation_validatePascal_ObjectOptional = (): void =>
    _test_notation_validateGeneral("ObjectOptional")<ObjectOptional>(
        ObjectOptional
  )<typia.PascalCase<ObjectOptional>>({
    convert: (input) => typia.notations.validatePascal<ObjectOptional>(input),
    assert: typia.createAssert<typia.PascalCase<ObjectOptional>>(),
  });
