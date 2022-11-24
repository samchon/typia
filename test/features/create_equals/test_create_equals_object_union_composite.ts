import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_object_union_composite = _test_equals(
    "union object",
    ObjectUnionComposite.generate,
    TSON.createEquals<ObjectUnionComposite>(),
);
