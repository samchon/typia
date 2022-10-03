import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_assert } from "./_test_assert";

export const test_assert_dynamic_tree = _test_assert(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.assertType(input),
    [
        (input) => {
            const [key, value] = Object.entries(input.children)[0];
            value.id = null!;
            return `$input.children["${key}"].id`;
        },
        (input) => {
            const [topKey, topValue] = Object.entries(input.children)[0];
            const [key, value] = Object.entries(topValue.children)[0];
            value.sequence = "one" as any;

            return `$input.children["${topKey}"].children["${key}"].sequence`;
        },
    ],
);
