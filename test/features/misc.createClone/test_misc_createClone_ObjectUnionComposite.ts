import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_misc_clone_ObjectUnionComposite = _test_misc_clone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.misc.createClone<ObjectUnionComposite>(),
);
