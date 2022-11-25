import TSON from "../../../src";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_isClone } from "../internal/_test_isClone";

export const test_isClone_ObjectUnionComposite = _test_isClone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => TSON.isClone(input),
    ObjectUnionComposite.SPOILERS,
);