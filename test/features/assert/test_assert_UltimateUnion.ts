import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { UltimateUnion } from "../../structures/UltimateUnion";

export const test_assert_UltimateUnion = _test_assert<UltimateUnion>(
    UltimateUnion,
)((input) => typia.assert<UltimateUnion>(input));
