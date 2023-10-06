import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_notation_createValidatePascal_ToJsonAtomicSimple =
    _test_notation_validateGeneral("ToJsonAtomicSimple")<ToJsonAtomicSimple>(
        ToJsonAtomicSimple
    )<typia.PascalCase<ToJsonAtomicSimple>>({
        convert: (input) => typia.notations.validatePascal<ToJsonAtomicSimple>(input),
        assert: typia.createAssert<typia.PascalCase<ToJsonAtomicSimple>>(),
    });
