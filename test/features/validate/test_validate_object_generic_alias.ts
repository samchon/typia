import TSON from "../../../src";
import { ObjectGenericAlias } from "../../structures/ObjectGenericAlias";
import { _test_validate } from "./_test_validate";

export const test_validate_object_generic_alias = _test_validate(
    "generic aliased object",
    ObjectGenericAlias.generate,
    (input) => TSON.validate(input),
    // [
    //     (input) => {
    //         input.value = { value: "value" } as any;
    //         return ["$input.value"];
    //     },
    //     (input) => {
    //         input.value = null!;
    //         return ["$input.value"];
    //     },
    //     (input) => {
    //         input.value = 1 as any;
    //         return ["$input.value"];
    //     },
    // ],
);
