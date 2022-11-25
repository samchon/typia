import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_is } from "../internal/_test_is";

export const test_createIs_ObjectUnionComposite = _test_is(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    TSON.createIs<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);