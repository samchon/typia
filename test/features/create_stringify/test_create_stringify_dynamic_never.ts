import TSON from "../../../src";
import { DynamicNever } from "../../structures/DynamicNever";
import { _test_stringify } from "./../stringify/_test_stringify";

export const test_create_stringify_dynamic_never = _test_stringify(
    "dynamic tree",
    DynamicNever.generate,
    TSON.createStringify<DynamicNever>(),
);
