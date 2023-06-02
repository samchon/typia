import typia from "../../../src";
import { _test_stringify } from "../../internal/_test_stringify";
import { DynamicJsonValue } from "../../structures/DynamicJsonValue";

export const test_createStringify_DynamicJsonValue = _test_stringify(
    "DynamicJsonValue",
    DynamicJsonValue.generate,
    typia.createStringify<DynamicJsonValue>(),
);
