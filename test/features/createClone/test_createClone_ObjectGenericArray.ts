import typia from "../../../src";

import { ObjectGenericArray } from "../../structures/ObjectGenericArray";
import { _test_clone } from "../internal/_test_clone";

export const test_createClone_ObjectGenericArray = _test_clone(
    "ObjectGenericArray",
    ObjectGenericArray.generate,
    typia.createClone<ObjectGenericArray>(),
);
