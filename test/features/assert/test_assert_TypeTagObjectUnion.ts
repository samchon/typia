import typia from "../../../src";
import { _test_assert } from "../../internal/_test_assert";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_assert_TypeTagObjectUnion = _test_assert(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
    typia.assert<TypeTagObjectUnion>(input),
);
