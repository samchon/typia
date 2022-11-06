import TSON from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_is_clone } from "./_test_is_clone";

export const test_is_clone_to_json_null = _test_is_clone(
    "toJSON() returning null",
    ToJsonNull.generate,
    (input) => TSON.isClone(input),
);
