import typia from "../../../src";
import { _test_clone } from "../../internal/_test_clone";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_createClone_DynamicJsonValue = _test_clone(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createClone<DynamicJsonValue>(),
);
