import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_notation_createValidatePascal_InstanceUnion = (): void =>
    _test_notation_validateGeneral("InstanceUnion")<InstanceUnion>(
        InstanceUnion
  )<typia.PascalCase<InstanceUnion>>({
    convert: typia.notations.createValidatePascal<InstanceUnion>(),
    assert: typia.createAssert<typia.PascalCase<InstanceUnion>>(),
  });
