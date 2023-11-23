import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_notation_validateCamel_ObjectGenericUnion =
  _test_notation_validateGeneral("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )<typia.CamelCase<ObjectGenericUnion>>({
    convert: (input) =>
      typia.notations.validateCamel<ObjectGenericUnion>(input),
    assert: typia.createAssert<typia.CamelCase<ObjectGenericUnion>>(),
  });
