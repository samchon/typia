import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_validateClone } from "../internal/_test_validateClone";

export const test_createValidateClone_FunctionalTupleUnion =
    _test_validateClone(
        "FunctionalTupleUnion",
        FunctionalTupleUnion.generate,
        TSON.createValidateClone<FunctionalTupleUnion>(),
        FunctionalTupleUnion.SPOILERS,
    );
