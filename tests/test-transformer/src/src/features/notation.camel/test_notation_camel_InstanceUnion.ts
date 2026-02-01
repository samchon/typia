import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { InstanceUnion } from "../../structures/InstanceUnion";

export const test_notation_validateCamel_InstanceUnion = (): void =>
    _test_notation_validateGeneral("InstanceUnion")<InstanceUnion>(
        InstanceUnion
  )<typia.CamelCase<InstanceUnion>>({
    convert: (input) => typia.notations.validateCamel<InstanceUnion>(input),
    assert: typia.createAssert<typia.CamelCase<InstanceUnion>>(),
  });
