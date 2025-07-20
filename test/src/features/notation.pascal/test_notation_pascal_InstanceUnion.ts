import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_notation_validatePascal_InstanceUnion = (): void =>
  _test_notation_validateGeneral("InstanceUnion")<InstanceUnion>(InstanceUnion)<
    typia.PascalCase<InstanceUnion>
  >({
    convert: (input) => typia.notations.validatePascal<InstanceUnion>(input),
    assert: typia.createAssert<typia.PascalCase<InstanceUnion>>(),
  });
