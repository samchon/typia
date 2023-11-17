import typia from "../../../src";
import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_createAssertGuard_ArrayRepeatedOptional = _test_assertGuard(
    "ArrayRepeatedOptional",
)<ArrayRepeatedOptional>(ArrayRepeatedOptional)(
    typia.createAssertGuard<ArrayRepeatedOptional>(),
);
