import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_notation_validatePascal_ConstantAtomicWrapper =
    _test_notation_validateGeneral(
        "ConstantAtomicWrapper",
    )<ConstantAtomicWrapper>(ConstantAtomicWrapper)<
        typia.PascalCase<ConstantAtomicWrapper>
    >({
        convert: (input) =>
            typia.notations.validatePascal<ConstantAtomicWrapper>(input),
        assert: typia.createAssert<typia.PascalCase<ConstantAtomicWrapper>>(),
    });
