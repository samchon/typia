import TSON from "../../../src";
import { FunctionalValueUnion } from "../../structures/FunctionalValueUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_FunctionalValueUnion =
    _test_validateClone(
        "FunctionalValueUnion",
        FunctionalValueUnion.generate,
        TSON.createValidateClone<FunctionalValueUnion>(),
        FunctionalValueUnion.SPOILERS,
    );
