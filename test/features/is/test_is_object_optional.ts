import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_is } from "./_test_is";

export const test_is_object_optional = _test_is(
    "optional object",
    ObjectOptional.generate,
    (input) => TSON.is(input),
    ObjectOptional.SPOILERS,
);
