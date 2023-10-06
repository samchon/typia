import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_notation_validatePascal_ToJsonAtomicUnion =
    _test_notation_validateGeneral("ToJsonAtomicUnion")<ToJsonAtomicUnion>(
        ToJsonAtomicUnion
    )<typia.PascalCase<ToJsonAtomicUnion>>({
        convert: typia.notations.createValidatePascal<ToJsonAtomicUnion>(),
        assert: typia.createAssert<typia.PascalCase<ToJsonAtomicUnion>>(),
    });
