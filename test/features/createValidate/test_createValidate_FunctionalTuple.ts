import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_FunctionalTuple = _test_validate(
    "FunctionalTuple",
    FunctionalTuple.generate,
    TSON.createValidate<FunctionalTuple>(),
    FunctionalTuple.SPOILERS,
);