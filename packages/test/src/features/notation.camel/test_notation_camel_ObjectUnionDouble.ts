import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectUnionDouble } from "../../structures/ObjectUnionDouble";

export const test_notation_validateCamel_ObjectUnionDouble =
  _test_notation_validateGeneral("ObjectUnionDouble")<ObjectUnionDouble>(
    ObjectUnionDouble,
  )<typia.CamelCase<ObjectUnionDouble>>({
    convert: (input) => typia.notations.validateCamel<ObjectUnionDouble>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectUnionDouble>>(),
  });
