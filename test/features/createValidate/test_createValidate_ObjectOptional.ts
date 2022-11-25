import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ObjectOptional = _test_validate(
    "ObjectOptional",
    ObjectOptional.generate,
    TSON.createValidate<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);