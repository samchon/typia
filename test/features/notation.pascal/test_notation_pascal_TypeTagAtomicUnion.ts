import typia from "../../../src";

import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_notation_validatePascal_TypeTagAtomicUnion =
    _test_notation_validateGeneral("TypeTagAtomicUnion")<TypeTagAtomicUnion>(
        TypeTagAtomicUnion
    )<typia.PascalCase<TypeTagAtomicUnion>>({
        convert: typia.notations.createValidatePascal<TypeTagAtomicUnion>(),
        assert: typia.createAssert<typia.PascalCase<TypeTagAtomicUnion>>(),
    });
