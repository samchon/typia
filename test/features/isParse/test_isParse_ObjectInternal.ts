import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_isParse } from "../internal/_test_isParse";

export const test_isParse_ObjectInternal = _test_isParse(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => TSON.isParse<ObjectInternal>(input),
    ObjectInternal.SPOILERS,
);
