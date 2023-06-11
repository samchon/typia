import typia from "../../../src";

import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_clone } from "../../internal/_test_clone";

export const test_createClone_ObjectInternal = _test_clone(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createClone<ObjectInternal>(),
);
