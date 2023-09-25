import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_createEquals_FunctionalProperty = _test_equals(
    "FunctionalProperty",
)<FunctionalProperty>(FunctionalProperty)(
    typia.createEquals<FunctionalProperty>(),
);
