import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_equals } from "./_test_equals";

export const test_equals_object_union_composite = _test_equals(
    "union object",
    ObjectUnionComposite.generate,
    (input) => TSON.equals(input),
);
