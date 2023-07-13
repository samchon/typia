import typia from "../../../src";
import { _test_validate } from "../../internal/_test_validate";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_validate_ToJsonDouble = _test_validate(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.createValidate<ToJsonDouble>(),
);
