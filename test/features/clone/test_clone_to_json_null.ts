import TSON from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_clone } from "./_test_clone";

export const test_clone_to_json_null = _test_clone(
    "toJSON() returning null",
    ToJsonNull.generate,
    (input) => TSON.clone(input),
);
