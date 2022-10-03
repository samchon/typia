import TSON from "../../../src";
import { DynamicTree } from "../../structures/DynamicTree";
import { _test_is } from "./_test_is";

export const test_is_dynamic_tree = _test_is(
    "dynamic tree",
    DynamicTree.generate,
    (input) => TSON.is(input),
    [
        (input) => {
            const tree = Object.values(input.children)[0]!;
            tree.id = null!;
        },
        (input) => {
            const tree = Object.values(
                Object.values(input.children)[0]!.children,
            )[0]!;
            tree.sequence = "one" as any;
        },
    ],
);
