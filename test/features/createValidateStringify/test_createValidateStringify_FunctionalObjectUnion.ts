import typia from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_FunctionalObjectUnion = _test_validateStringify(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    typia.createValidateStringify<FunctionalObjectUnion>(),
    FunctionalObjectUnion.SPOILERS,
);