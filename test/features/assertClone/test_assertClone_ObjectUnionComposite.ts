import typia from "../../../src";
import { _test_assertClone } from "../../internal/_test_assertClone";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_assertClone_ObjectUnionComposite = _test_assertClone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.assertClone<ObjectUnionComposite>(input),
    ObjectUnionComposite.SPOILERS,
);
