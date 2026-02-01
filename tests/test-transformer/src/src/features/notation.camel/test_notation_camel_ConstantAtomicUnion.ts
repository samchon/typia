import typia from "typia";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_notation_validateCamel_ConstantAtomicUnion = (): void =>
    _test_notation_validateGeneral("ConstantAtomicUnion")<ConstantAtomicUnion>(
        ConstantAtomicUnion
  )<typia.CamelCase<ConstantAtomicUnion>>({
    convert: (input) => typia.notations.validateCamel<ConstantAtomicUnion>(input),
    assert: typia.createAssert<typia.CamelCase<ConstantAtomicUnion>>(),
  });
