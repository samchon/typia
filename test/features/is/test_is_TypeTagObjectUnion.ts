import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TypeTagObjectUnion } from "../../structures/TypeTagObjectUnion";

export const test_is_TypeTagObjectUnion = _test_is(
    "TypeTagObjectUnion",
)<TypeTagObjectUnion>(TypeTagObjectUnion)((input) =>
    typia.is<TypeTagObjectUnion>(input),
);
