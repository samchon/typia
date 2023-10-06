import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_notation_createValidatePascal_AtomicIntersection =
    _test_notation_validateGeneral("AtomicIntersection")<AtomicIntersection>(
        AtomicIntersection
    )<typia.PascalCase<AtomicIntersection>>({
        convert: (input) => typia.notations.validatePascal<AtomicIntersection>(input),
        assert: typia.createAssert<typia.PascalCase<AtomicIntersection>>(),
    });
