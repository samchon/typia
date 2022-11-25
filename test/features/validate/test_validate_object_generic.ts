import TSON from "../../../src";
import { ObjectGeneric } from "../../structures/ObjectGeneric";
import { _test_validate } from "../internal/_test_validate";

export const test_validate_object_generic = _test_validate(
    "generic object",
    ObjectGeneric.generate,
    (input) => TSON.validate(input),
    ObjectGeneric.SPOILERS,
);
