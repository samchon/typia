import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_notation_validateCamel_ConstantAtomicUnion =
    _test_notation_validateGeneral("ConstantAtomicUnion")<ConstantAtomicUnion>(
        ConstantAtomicUnion
    )<typia.CamelCase<ConstantAtomicUnion>>({
        convert: typia.notations.createValidateCamel<ConstantAtomicUnion>(),
        assert: typia.createAssert<typia.CamelCase<ConstantAtomicUnion>>(),
    });
