import typia from "../../../src";
import { _test_misc_isClone } from "../../internal/_test_misc_isClone";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_misc_isClone_ObjectUnionComposite = _test_misc_isClone(
    "ObjectUnionComposite",
)<ObjectUnionComposite>(ObjectUnionComposite)(
    typia.misc.createIsClone<ObjectUnionComposite>(),
);
