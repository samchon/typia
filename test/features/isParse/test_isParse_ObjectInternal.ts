import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { ObjectInternal } from "../../structures/ObjectInternal";

export const test_isParse_ObjectInternal = _test_isParse(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => typia.isParse<ObjectInternal>(input),
    ObjectInternal.SPOILERS,
);
