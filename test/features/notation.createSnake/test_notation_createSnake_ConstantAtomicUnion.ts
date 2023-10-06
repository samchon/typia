import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_notation_createValidateSnake_ConstantAtomicUnion =
    _test_notation_validateGeneral("ConstantAtomicUnion")<ConstantAtomicUnion>(
        ConstantAtomicUnion,
    )<typia.SnakeCase<ConstantAtomicUnion>>({
        convert: typia.notations.createValidateSnake<ConstantAtomicUnion>(),
        assert: typia.createAssert<typia.SnakeCase<ConstantAtomicUnion>>(),
    });
