import typia from "../../../src";
import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_misc_assertClone_TypeTagRange = _test_misc_assertClone(
    "TypeTagRange",
)<TypeTagRange>(TypeTagRange)((input) =>
    typia.misc.assertClone<TypeTagRange>(input),
);
