import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { FunctionalProperty } from "../../structures/FunctionalProperty";

export const test_createAssertGuard_FunctionalProperty = _test_assertGuard(
    "FunctionalProperty",
)<FunctionalProperty>(FunctionalProperty)(
    typia.createAssertGuard<FunctionalProperty>(),
);
