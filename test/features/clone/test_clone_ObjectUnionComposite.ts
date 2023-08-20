import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_clone_ObjectUnionComposite = _test_clone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    (input) => typia.clone<ObjectUnionComposite>(input),
);
