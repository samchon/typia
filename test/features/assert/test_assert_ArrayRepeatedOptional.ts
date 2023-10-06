import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { ArrayRepeatedOptional } from "../../structures/ArrayRepeatedOptional";

export const test_assert_ArrayRepeatedOptional = _test_assert(
    "ArrayRepeatedOptional",
)<ArrayRepeatedOptional>(ArrayRepeatedOptional)((input) =>
    typia.assert<ArrayRepeatedOptional>(input),
);
