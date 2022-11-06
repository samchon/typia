import TSON from "../../../src";
import { ToJsonArray } from "../../structures/ToJsonArray";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_to_json_array = _test_clone(
    "toJSON() returning array",
    ToJsonArray.generate,
    TSON.createClone<ToJsonArray>(),
);
