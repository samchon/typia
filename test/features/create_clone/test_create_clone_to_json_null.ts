import TSON from "../../../src";
import { ToJsonNull } from "../../structures/ToJsonNull";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_to_json_null = _test_clone(
    "toJSON() returning null",
    ToJsonNull.generate,
    TSON.createClone<ToJsonNull>(),
);
