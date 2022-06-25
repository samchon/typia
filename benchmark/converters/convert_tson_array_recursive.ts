import TSON from "../../src";
import { ArrayRecursive } from "../../test/structures/ArrayRecursive";

export const convert_tson_array_recursive = (input: ArrayRecursive) =>
    TSON.stringify(input);
