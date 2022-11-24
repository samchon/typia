import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_equals } from "../internal/_test_equals";

export const test_create_equals_object_internal = _test_equals(
    "object internal",
    ObjectInternal.generate,
    TSON.createEquals<ObjectInternal>(),
);
