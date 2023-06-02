import typia from "../../../src";

import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_createStringify_ToJsonDouble = _test_stringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    typia.createStringify<ToJsonDouble>(),
);
