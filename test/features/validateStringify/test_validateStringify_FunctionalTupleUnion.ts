import TSON from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_FunctionalTupleUnion =
    _test_validateStringify(
        "FunctionalTupleUnion",
        FunctionalTupleUnion.generate,
        (input) => TSON.validateStringify(input),
        FunctionalTupleUnion.SPOILERS,
    );
