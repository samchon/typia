import TSON from "../../../src";
import { DynamicComposite } from "../../structures/DynamicComposite";
import { _test_equals } from "./../equals/_test_equals";

export const test_create_equals_dynamic_composite = _test_equals(
    "dynamic composite",
    DynamicComposite.generate,
    TSON.createEquals<DynamicComposite>(),
);
