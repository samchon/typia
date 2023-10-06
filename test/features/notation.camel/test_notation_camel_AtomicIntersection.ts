import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_notation_validateCamel_AtomicIntersection =
    _test_notation_validateGeneral("AtomicIntersection")<AtomicIntersection>(
        AtomicIntersection
    )<typia.CamelCase<AtomicIntersection>>({
        convert: typia.notations.createValidateCamel<AtomicIntersection>(),
        assert: typia.createAssert<typia.CamelCase<AtomicIntersection>>(),
    });
