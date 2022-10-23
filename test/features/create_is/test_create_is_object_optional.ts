import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_is } from "./../is/_test_is";

export const test_create_is_object_optional = _test_is(
    "optional object",
    ObjectOptional.generate,
    TSON.createIs<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
