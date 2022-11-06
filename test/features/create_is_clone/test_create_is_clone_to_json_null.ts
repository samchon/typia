import TSON from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_to_json_null = _test_is_clone(
    "toJSON() returning null",
    ToJsonNull.generate,
    TSON.createIsClone<ToJsonNull>(),
);
