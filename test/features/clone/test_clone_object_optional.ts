import TSON from "../../../src";
import { ObjectOptional } from "../../structures/ObjectOptional";
import { _test_clone } from "./_test_clone";

export const test_clone_object_optional = _test_clone(
    "optional object",
    ObjectOptional.generate,
    (input) => TSON.clone(input),
);
