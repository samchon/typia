import TSON from "../../../src";
import { FunctionalTuple } from "../../structures/FunctionalTuple";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_FunctionalTuple =
    _test_validateStringify(
        "FunctionalTuple",
        FunctionalTuple.generate,
        TSON.createValidateStringify<FunctionalTuple>(),
        FunctionalTuple.SPOILERS,
    );
