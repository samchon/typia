import typia from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_validateStringify_FunctionalTupleUnion =
    _test_validateStringify(
        "FunctionalTupleUnion",
        FunctionalTupleUnion.generate,
        (input) => typia.validateStringify(input),
        FunctionalTupleUnion.SPOILERS,
    );
