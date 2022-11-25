import TSON from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_validate } from "../internal/_test_validate";

export const test_createValidate_ToJsonDouble = _test_validate(
    "ToJsonDouble",
    ToJsonDouble.generate,
    TSON.createValidate<ToJsonDouble>(),
);