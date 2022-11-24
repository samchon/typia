import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_clone } from "../internal/_test_clone";

export const test_create_clone_object_optional = _test_clone(
    "optional object",
    ObjectOptional.generate,
    TSON.createClone<ObjectOptional>(),
);
