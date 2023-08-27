import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_assert_TypeTagPattern = _test_assert(
    "TypeTagPattern",
)<TypeTagPattern>(TypeTagPattern)((input) =>
    typia.assert<TypeTagPattern>(input),
);
