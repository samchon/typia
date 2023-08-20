import typia from "../../../src";
import { _test_isClone } from "../../internal/_test_isClone";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_isClone_ObjectUnionComposite = _test_isClone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.isClone<ObjectUnionComposite>(input),
    ObjectUnionComposite.SPOILERS,
);
