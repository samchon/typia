import typia from "../../../src";
import { _test_isParse } from "../../internal/_test_isParse";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createIsParse_DynamicComposite = _test_isParse(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createIsParse<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
