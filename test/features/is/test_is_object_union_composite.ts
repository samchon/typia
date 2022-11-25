import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_is } from "../internal/_test_is";

export const test_is_object_union_composite = _test_is(
    "union object",
    ObjectUnionComposite.generate,
    (input) => TSON.is(input),
    ObjectUnionComposite.SPOILERS,
);
