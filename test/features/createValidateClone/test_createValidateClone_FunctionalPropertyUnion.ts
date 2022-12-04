import TSON from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_FunctionalPropertyUnion =
    _test_validateClone(
        "FunctionalPropertyUnion",
        FunctionalPropertyUnion.generate,
        TSON.createValidateClone<FunctionalPropertyUnion>(),
        FunctionalPropertyUnion.SPOILERS,
    );
