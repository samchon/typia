import typia from "../../../src";
import { _test_equals } from "../../internal/_test_equals";
import { ToJsonTuple } from "../../structures/ToJsonTuple";

export const test_createEquals_ToJsonTuple = _test_equals(
    "ToJsonTuple",
    ToJsonTuple.generate,
    typia.createEquals<ToJsonTuple>(),
);
