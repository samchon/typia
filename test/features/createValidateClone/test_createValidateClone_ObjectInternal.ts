import typia from "../../../src";

import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validateClone } from "../../internal/_test_validateClone";

export const test_createValidateClone_ObjectInternal = _test_validateClone(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createValidateClone<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
