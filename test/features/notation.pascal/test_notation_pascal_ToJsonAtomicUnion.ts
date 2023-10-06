import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_notation_validatePascal_ToJsonAtomicUnion =
    _test_notation_validateGeneral("ToJsonAtomicUnion")<ToJsonAtomicUnion>(
        ToJsonAtomicUnion,
    )<typia.PascalCase<ToJsonAtomicUnion>>({
        convert: (input) =>
            typia.notations.validatePascal<ToJsonAtomicUnion>(input),
        assert: typia.createAssert<typia.PascalCase<ToJsonAtomicUnion>>(),
    });
