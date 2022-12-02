import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectInternal = _test_validate(
    "ObjectInternal",
    ObjectInternal.generate,
    TSON.createValidate<ObjectInternal>(),
    ObjectInternal.SPOILERS,
);
