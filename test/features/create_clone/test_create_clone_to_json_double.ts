import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_clone } from "./../clone/_test_clone";

export const test_create_clone_to_json_double = _test_clone(
    "twice duplicated toJSON() method type",
    ToJsonDouble.generate,
    TSON.createClone<ToJsonDouble>(),
);
