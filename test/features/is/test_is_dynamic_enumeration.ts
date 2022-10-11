import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_is } from "./_test_is";

export const test_is_dynamic_enumeration = _test_is(
    "dynamic enumeration",
    DynamicEnumeration.generate,
    (input) => TSON.is(input),
    [(input) => (input["fr"] = null!), (input) => (input["ar"] = 0 as any)],
);
