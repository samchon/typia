import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_createValidateEquals_FunctionalArrayUnion =
    _test_validateEquals(
        "FunctionalArrayUnion",
        FunctionalArrayUnion.generate,
        typia.createValidateEquals<FunctionalArrayUnion>(),
    );
