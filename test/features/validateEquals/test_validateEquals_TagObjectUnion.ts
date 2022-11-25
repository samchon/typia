import TSON from "../../../src";
import { TagObjectUnion } from "../../structures/TagObjectUnion";
import { _test_validateEquals } from "../internal/_test_validateEquals";

export const test_validateEquals_TagObjectUnion = _test_validateEquals(
    "TagObjectUnion",
    TagObjectUnion.generate,
    (input) => TSON.validateEquals(input),
);