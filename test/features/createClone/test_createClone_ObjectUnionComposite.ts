import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";

export const test_createClone_ObjectUnionComposite = _test_clone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createClone<ObjectUnionComposite>(),
);
