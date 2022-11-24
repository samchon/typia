import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_is_stringify } from "../internal/_test_is_stringify";

export const test_create_is_stringify_object_optional = _test_is_stringify(
    "optional object",
    ObjectOptional.generate,
    TSON.createIsStringify<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
