import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_is_clone } from "./../is_clone/_test_is_clone";

export const test_create_is_clone_to_json_double = _test_is_clone(
    "twice duplicated toJSON() method type",
    ToJsonDouble.generate,
    TSON.createIsClone<ToJsonDouble>(),
);
