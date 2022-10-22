import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_validate } from "./_test_validate";

export const test_validate_object_optional = _test_validate(
    "optional object",
    ObjectOptional.generate,
    (input) => TSON.validate(input),
    ObjectOptional.SPOILERS,
);
