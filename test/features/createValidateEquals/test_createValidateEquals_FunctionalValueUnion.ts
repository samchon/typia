import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_FunctionalValueUnion =
    _test_validateEquals(
        "FunctionalValueUnion",
        FunctionalValueUnion.generate,
        TSON.createValidateEquals<FunctionalValueUnion>(),
    );
