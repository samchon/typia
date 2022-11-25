import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_equals } from "../internal/_test_equals";

export const test_createEquals_ObjectUnionComposite = _test_equals(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    TSON.createEquals<ObjectUnionComposite>(),
);