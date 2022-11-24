import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_is_clone } from "../internal/_test_is_clone";

export const test_create_is_clone_object_optional = _test_is_clone(
    "optional object",
    ObjectOptional.generate,
    TSON.createIsClone<ObjectOptional>(),
    ObjectOptional.SPOILERS,
);
