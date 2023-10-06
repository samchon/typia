import typia from "../../../src";
import { _test_notation_validateGeneral } from "../../internal/_test_notation_validateGeneral";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_notation_createValidateCamel_ConstantAtomicSimple =
    _test_notation_validateGeneral(
        "ConstantAtomicSimple",
    )<ConstantAtomicSimple>(ConstantAtomicSimple)<
        typia.CamelCase<ConstantAtomicSimple>
    >({
        convert: typia.notations.createValidateCamel<ConstantAtomicSimple>(),
        assert: typia.createAssert<typia.CamelCase<ConstantAtomicSimple>>(),
    });
