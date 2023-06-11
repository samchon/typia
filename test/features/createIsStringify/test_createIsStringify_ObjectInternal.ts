import typia from "../../../src";

import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_isStringify } from "../../internal/_test_isStringify";

export const test_createIsStringify_ObjectInternal = _test_isStringify(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createIsStringify<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
