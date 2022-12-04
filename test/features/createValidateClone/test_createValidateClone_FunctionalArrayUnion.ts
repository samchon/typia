import TSON from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_FunctionalArrayUnion =
    _test_validateClone(
        "FunctionalArrayUnion",
        FunctionalArrayUnion.generate,
        TSON.createValidateClone<FunctionalArrayUnion>(),
        FunctionalArrayUnion.SPOILERS,
    );
