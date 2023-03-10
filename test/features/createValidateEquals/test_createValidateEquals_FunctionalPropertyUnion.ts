import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalPropertyUnion } from "../../structures/FunctionalPropertyUnion";

export const test_createValidateEquals_FunctionalPropertyUnion =
    _test_validateEquals(
        "FunctionalPropertyUnion",
        FunctionalPropertyUnion.generate,
        typia.createValidateEquals<FunctionalPropertyUnion>(),
    );
