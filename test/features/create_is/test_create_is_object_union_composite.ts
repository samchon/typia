import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_is } from "../internal/_test_is";

export const test_create_is_object_union_composite = _test_is(
    "union object",
    ObjectUnionComposite.generate,
    TSON.createIs<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);
