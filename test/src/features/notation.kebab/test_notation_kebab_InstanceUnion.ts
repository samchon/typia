import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_notation_validateKebab_InstanceUnion = (): void =>
  _test_notation_validateGeneral("InstanceUnion")<InstanceUnion>(InstanceUnion)<
    typia.KebabCase<InstanceUnion>
  >({
    convert: (input) => typia.notations.validateKebab<InstanceUnion>(input),
    assert: typia.createAssert<typia.KebabCase<InstanceUnion>>(),
  });
