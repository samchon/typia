import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_notation_validatePascal_AtomicAlias =
    _test_notation_validateGeneral("AtomicAlias")<AtomicAlias>(
        AtomicAlias
    )<typia.PascalCase<AtomicAlias>>({
        convert: typia.notations.createValidatePascal<AtomicAlias>(),
        assert: typia.createAssert<typia.PascalCase<AtomicAlias>>(),
    });
