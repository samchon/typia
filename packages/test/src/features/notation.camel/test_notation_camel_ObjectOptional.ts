import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectOptional } from "../../structures/ObjectOptional";

export const test_notation_validateCamel_ObjectOptional =
  _test_notation_validateGeneral("ObjectOptional")<ObjectOptional>(
    ObjectOptional,
  )<typia.CamelCase<ObjectOptional>>({
    convert: (input) => typia.notations.validateCamel<ObjectOptional>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectOptional>>(),
  });
