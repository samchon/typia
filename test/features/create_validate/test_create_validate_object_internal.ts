import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_object_internal = _test_validate(
    "object internal",
    ObjectInternal.generate,
    TSON.createValidate<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
