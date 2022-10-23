import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validate } from "./../validate/_test_validate";

export const test_create_validate_object_optional = _test_validate(
    "optional object",
    ObjectOptional.generate,
    TSON.createValidate<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
