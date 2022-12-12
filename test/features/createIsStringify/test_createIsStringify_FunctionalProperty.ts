import typia from "../../../src";
import { FunctionalProperty } from "../../structures/FunctionalProperty";
import { _test_isStringify } from "../internal/_test_isStringify";

export const test_createIsStringify_FunctionalProperty = _test_isStringify(
    "FunctionalProperty",
    FunctionalProperty.generate,
    typia.createIsStringify<FunctionalProperty>(),
    FunctionalProperty.SPOILERS,
);
