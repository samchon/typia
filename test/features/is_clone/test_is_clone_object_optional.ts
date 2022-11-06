import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_object_optional = _test_is_clone(
    "optional object",
    ObjectOptional.generate,
    (input) => TSON.isClone(input),
    ObjectOptional.SPOILERS,
);
