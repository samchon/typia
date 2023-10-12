import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_notation_createValidateCamel_ConstantAtomicWrapper =
    _test_notation_validateGeneral(
        "ConstantAtomicWrapper",
    )<ConstantAtomicWrapper>(ConstantAtomicWrapper)<
        typia.CamelCase<ConstantAtomicWrapper>
    >({
        convert: typia.notations.createValidateCamel<ConstantAtomicWrapper>(),
        assert: typia.createAssert<typia.CamelCase<ConstantAtomicWrapper>>(),
    });
