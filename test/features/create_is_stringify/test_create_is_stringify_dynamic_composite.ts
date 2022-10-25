import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_is_stringify } from "./../is_stringify/_test_is_stringify";

export const test_create_is_stringify_dynamic_composite = _test_is_stringify(
    "dynamic composite",
    DynamicComposite.generate,
    TSON.createIsStringify<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
