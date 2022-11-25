import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_is } from "../internal/_test_is";

export const test_is_ObjectInternal = _test_is(
    "ObjectInternal",
    ObjectInternal.generate,
    (input) => TSON.is(input),
    ObjectInternal.SPOILERS,
);
