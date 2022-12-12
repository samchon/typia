import typia from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_isParse } from "../internal/_test_isParse";

export const test_createIsParse_ObjectInternal = _test_isParse(
    "ObjectInternal",
    ObjectInternal.generate,
    typia.createIsParse<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
