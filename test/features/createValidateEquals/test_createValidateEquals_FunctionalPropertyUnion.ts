import typia from "../../../src";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_createValidateEquals_FunctionalPropertyUnion =
    _test_validateEquals(
        "FunctionalPropertyUnion",
        FunctionalPropertyUnion.generate,
        typia.createValidateEquals<FunctionalPropertyUnion>(),
    );
