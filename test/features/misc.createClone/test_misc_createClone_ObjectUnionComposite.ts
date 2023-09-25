import typia from "../../../src";
import { _test_misc_clone } from "../../internal/_test_misc_clone";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_misc_createClone_ObjectUnionComposite = _test_misc_clone(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(ObjectUnionComposite)(
    typia.misc.createClone<ObjectUnionComposite>(),
);
