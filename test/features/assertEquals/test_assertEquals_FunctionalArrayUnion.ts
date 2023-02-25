import typia from "../../../src";
import { FunctionalArrayUnion } from "../../structures/FunctionalArrayUnion";
import { _test_assertEquals } from "../internal/_test_assertEquals";

export const test_assertEquals_FunctionalArrayUnion = _test_assertEquals(
    "FunctionalArrayUnion",
    FunctionalArrayUnion.generate,
    (input) => typia.assertEquals(input),
);
