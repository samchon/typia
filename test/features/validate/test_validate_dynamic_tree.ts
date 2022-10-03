import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_validate } from "./_test_validate";

export const test_validate_dynamic_tree = _test_validate(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.validate(input),
    [
        (input) => {
            const [key, value] = Object.entries(input.children)[0];
            value.id = null!;
            return [`$input.children["${key}"].id`];
        },
        (input) => {
            const [topKey, topValue] = Object.entries(input.children)[0];
            const [key, value] = Object.entries(topValue.children)[0];
            value.sequence = "one" as any;

            return [`$input.children["${topKey}"].children["${key}"].sequence`];
        },
    ],
);
