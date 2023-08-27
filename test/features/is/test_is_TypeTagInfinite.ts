import typia from "../../../src";
import { _test_is } from "../../internal/_test_is";
import { TypeTagInfinite } from "../../structures/TypeTagInfinite";

export const test_is_TypeTagInfinite = _test_is(
    "TypeTagInfinite",
)<TypeTagInfinite>(TypeTagInfinite)((input) =>
    typia.is<TypeTagInfinite>(input),
);
