import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_is } from "../internal/_test_is";

export const test_is_object_internal = _test_is(
    "object internal",
    ObjectInternal.generate,
    (input) => TSON.is(input),
    ObjectInternal.SPOILERS,
);
