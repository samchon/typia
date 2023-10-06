import typia from "../../../src";
import { _test_validateEquals } from "../../internal/_test_validateEquals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_validateEquals_FunctionalProperty = _test_validateEquals(
    "FunctionalProperty",
)<FunctionalProperty>(FunctionalProperty)((input) =>
    typia.validateEquals<FunctionalProperty>(input),
);
