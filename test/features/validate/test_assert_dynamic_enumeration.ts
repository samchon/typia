import TSON from "../../../src";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";
import { _test_validate } from "./_test_validate";

export const test_validate_dynamic_enumeration = _test_validate(
    "dynamic enumeration",
    DynamicEnumeration.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            input["fr"] = null!;
            return ["$input.fr"];
        },
        (input) => {
            input["ar"] = 0 as any;
            return ["$input.ar"];
        },
    ],
);
