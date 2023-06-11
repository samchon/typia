import typia from "../../../src";

import { DynamicNever } from "../../structures/DynamicNever";
import { _test_stringify } from "../../internal/_test_stringify";

export const test_createStringify_DynamicNever = _test_stringify(
    "DynamicNever",
    DynamicNever.generate,
    typia.createStringify<DynamicNever>(),
);
