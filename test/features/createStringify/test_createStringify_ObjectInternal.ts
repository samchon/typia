import typia from "../../../src";

import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_stringify } from "../internal/_test_stringify";

export const test_createStringify_ObjectInternal = _test_stringify(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createStringify<ObjectInternal>(),
);
