import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_notation_validatePascal_ConstantAtomicSimple =
    _test_notation_validateGeneral(
        "ConstantAtomicSimple",
    )<ConstantAtomicSimple>(ConstantAtomicSimple)<
        typia.PascalCase<ConstantAtomicSimple>
    >({
        convert: (input) =>
            typia.notations.validatePascal<ConstantAtomicSimple>(input),
        assert: typia.createAssert<typia.PascalCase<ConstantAtomicSimple>>(),
    });
