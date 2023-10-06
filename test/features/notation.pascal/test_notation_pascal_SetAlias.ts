import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { SetAlias } from "../../structures/SetAlias";

export const test_notation_validatePascal_SetAlias =
    _test_notation_validateGeneral("SetAlias")<SetAlias>(
        SetAlias
    )<typia.PascalCase<SetAlias>>({
        convert: typia.notations.createValidatePascal<SetAlias>(),
        assert: typia.createAssert<typia.PascalCase<SetAlias>>(),
    });
