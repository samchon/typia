import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";

export const test_validateEquals_FunctionalArrayUnion = _test_validateEquals(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    (input) => typia.validateEquals<FunctionalArrayUnion>(input),
);
