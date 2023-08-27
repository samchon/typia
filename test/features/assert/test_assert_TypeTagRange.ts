import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_assert_TypeTagRange = _test_assert(
    "TypeTagRange",
)<TypeTagRange>(TypeTagRange)((input) => typia.assert<TypeTagRange>(input));
