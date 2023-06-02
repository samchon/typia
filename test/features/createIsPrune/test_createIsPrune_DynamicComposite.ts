import typia from "../../../src";
import { _test_isPrune } from "../../internal/_test_isPrune";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_createIsPrune_DynamicComposite = _test_isPrune(
    "DynamicComposite",
    DynamicComposite.generate,
    typia.createIsPrune<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
