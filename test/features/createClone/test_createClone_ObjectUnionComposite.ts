import typia from "../../../src";

import { ObjectUnionComposite } from "../../structures/ObjectUnionComposite";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectUnionComposite = _test_clone(
    "ObjectUnionComposite",
    ObjectUnionComposite.generate,
    typia.createClone<ObjectUnionComposite>(),
);
