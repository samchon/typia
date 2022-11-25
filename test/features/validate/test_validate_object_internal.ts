import TSON from "../../../src";
import { ObjectInternal } from "../../structures/ObjectInternal";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_object_internal = _test_validate(
    "object internal",
    ObjectInternal.generate,
    (input) => TSON.validate(input),
    ObjectInternal.SPOILERS,
);
