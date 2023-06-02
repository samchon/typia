import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_createStringify_ToJsonDouble = _test_stringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.createStringify<ToJsonDouble>(),
);
