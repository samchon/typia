import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_notation_createValidateKebab_ObjectGenericUnion = (): void =>
  _test_notation_validateGeneral("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )<typia.KebabCase<ObjectGenericUnion>>({
    convert: typia.notations.createValidateKebab<ObjectGenericUnion>(),
    assert: typia.createAssert<typia.KebabCase<ObjectGenericUnion>>(),
  });
