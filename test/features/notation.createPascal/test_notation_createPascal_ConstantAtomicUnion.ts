import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_notation_createValidatePascal_ConstantAtomicUnion =
    _test_notation_validateGeneral("ConstantAtomicUnion")<ConstantAtomicUnion>(
        ConstantAtomicUnion,
    )<typia.PascalCase<ConstantAtomicUnion>>({
        convert: typia.notations.createValidatePascal<ConstantAtomicUnion>(),
        assert: typia.createAssert<typia.PascalCase<ConstantAtomicUnion>>(),
    });
