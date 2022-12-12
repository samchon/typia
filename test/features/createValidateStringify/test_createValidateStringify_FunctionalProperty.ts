import typia from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_validateStringify } from "../internal/_test_validateStringify";

export const test_createValidateStringify_FunctionalProperty = _test_validateStringify(
    "FunctionalProperty",
    FunctionalProperty.generate,
    typia.createValidateStringify<FunctionalProperty>(),
    FunctionalProperty.SPOILERS,
);