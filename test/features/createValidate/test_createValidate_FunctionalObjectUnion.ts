import typia from "../../../src";
import { FunctionalObjectUnion } from "../../structures/FunctionalObjectUnion";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_FunctionalObjectUnion = _test_validate(
    "FunctionalObjectUnion",
    FunctionalObjectUnion.generate,
    typia.createValidate<FunctionalObjectUnion>(),
    FunctionalObjectUnion.SPOILERS,
);