import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagTuple } from "../../structures/TypeTagTuple";

export const test_misc_assertClone_TypeTagTuple = _test_misc_assertClone(
  "TypeTagTuple",
)<TypeTagTuple>(TypeTagTuple)((input) =>
  typia.misc.assertClone<TypeTagTuple>(input),
);
