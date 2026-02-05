import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_notation_createValidateKebab_InstanceUnion = (): void =>
  _test_notation_validateGeneral("InstanceUnion")<InstanceUnion>(InstanceUnion)<
    typia.KebabCase<InstanceUnion>
  >({
    convert: typia.notations.createValidateKebab<InstanceUnion>(),
    assert: typia.createAssert<typia.KebabCase<InstanceUnion>>(),
  });
