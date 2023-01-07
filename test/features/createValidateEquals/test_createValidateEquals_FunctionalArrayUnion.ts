import typia from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_FunctionalArrayUnion = _test_validateEquals(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    typia.createValidateEquals<FunctionalArrayUnion>(),
);