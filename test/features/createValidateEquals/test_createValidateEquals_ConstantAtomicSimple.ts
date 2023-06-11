import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_createValidateEquals_ConstantAtomicSimple =
    _test_validateEquals(
        "ConstantAtomicSimple",
        ConstantAtomicSimple.generate,
        typia.createValidateEquals<ConstantAtomicSimple>(),
    );
