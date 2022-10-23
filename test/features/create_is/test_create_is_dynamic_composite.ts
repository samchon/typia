import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_is } from "./../is/_test_is";

export const test_create_is_dynamic_composite = _test_is(
    "dynamic composite",
    DynamicComposite.generate,
    TSON.createIs<DynamicComposite>(),
    DynamicComposite.SPOILERS,
);
