import TSON from "../../../src";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_ToJsonAtomicSimple =
    _test_validateEquals(
        "ToJsonAtomicSimple",
        ToJsonAtomicSimple.generate,
        TSON.createValidateEquals<ToJsonAtomicSimple>(),
    );
