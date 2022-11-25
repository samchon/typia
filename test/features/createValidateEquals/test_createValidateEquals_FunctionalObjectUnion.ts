import TSON from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_FunctionalObjectUnion =
    _test_validateEquals(
        "FunctionalObjectUnion",
        FunctionalObjectUnion.generate,
        TSON.createValidateEquals<FunctionalObjectUnion>(),
    );
