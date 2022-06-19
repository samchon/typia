import TSON from "../../src";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";

export const generate_tson_tree = (input: ArrayRecursive) =>
    TSON.stringify(input);
