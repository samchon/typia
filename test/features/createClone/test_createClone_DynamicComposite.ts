import typia from "../../../src";

import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_clone } from "../../internal/_test_clone";

export const test_createClone_DynamicComposite = _test_clone(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createClone<DynamicComposite>(),
);
