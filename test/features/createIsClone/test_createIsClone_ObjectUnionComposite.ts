import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_isClone } from "../internal/_test_isClone";

export const test_createIsClone_ObjectUnionComposite = _test_isClone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    TSON.createIsClone<ObjectUnionComposite>(),
    ObjectUnionComposite.SPOILERS,
);