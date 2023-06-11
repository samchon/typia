import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createClone_DynamicComposite = _test_clone(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createClone<DynamicComposite>(),
);
