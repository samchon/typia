import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_is_stringify } from "./_test_is_stringify";

export const test_is_stringify_object_internal = _test_is_stringify(
    "object internal",
    ObjectInternal.generate,
    (input) => TSON.isStringify(input),
    ObjectInternal.SPOILERS,
);
