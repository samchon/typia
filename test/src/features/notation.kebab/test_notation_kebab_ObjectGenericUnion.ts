import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ObjectGenericUnion } from "../../structures/ObjectGenericUnion";

export const test_notation_validateKebab_ObjectGenericUnion = (): void =>
  _test_notation_validateGeneral("ObjectGenericUnion")<ObjectGenericUnion>(
    ObjectGenericUnion,
  )<typia.KebabCase<ObjectGenericUnion>>({
    convert: (input) =>
      typia.notations.validateKebab<ObjectGenericUnion>(input),
    assert: typia.createAssert<typia.KebabCase<ObjectGenericUnion>>(),
  });
