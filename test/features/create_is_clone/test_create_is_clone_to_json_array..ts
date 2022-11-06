import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_to_json_array = _test_is_clone(
    "toJSON() returning array",
    ToJsonArray.generate,
    TSON.createIsClone<ToJsonArray>(),
);
