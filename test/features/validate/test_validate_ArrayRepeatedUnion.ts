import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_validate_ArrayRepeatedUnion = _test_validate(
  "ArrayRepeatedUnion",
)<ArrayRepeatedUnion>(ArrayRepeatedUnion)((input) =>
  typia.validate<ArrayRepeatedUnion>(input),
);
