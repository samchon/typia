import typia from "../../../src";
import { FunctionalTupleUnion } from "../../structures/FunctionalTupleUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_FunctionalTupleUnion =
    _test_validateStringify(
        "FunctionalTupleUnion",
        FunctionalTupleUnion.generate,
        typia.createValidateStringify<FunctionalTupleUnion>(),
        FunctionalTupleUnion.SPOILERS,
    );
