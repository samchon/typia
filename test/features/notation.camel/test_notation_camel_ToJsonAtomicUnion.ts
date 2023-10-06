import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_notation_validateCamel_ToJsonAtomicUnion =
    _test_notation_validateGeneral("ToJsonAtomicUnion")<ToJsonAtomicUnion>(
        ToJsonAtomicUnion,
    )<typia.CamelCase<ToJsonAtomicUnion>>({
        convert: (input) =>
            typia.notations.validateCamel<ToJsonAtomicUnion>(input),
        assert: typia.createAssert<typia.CamelCase<ToJsonAtomicUnion>>(),
    });
