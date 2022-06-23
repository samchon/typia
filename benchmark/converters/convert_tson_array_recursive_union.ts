import TSON from "../../src";
import { ArrayRecursiveUnion } from "../../test/structures/ArrayRecursiveUnion";

export const convert_tson_array_recursive_union = (
    input: ArrayRecursiveUnion,
) => TSON.stringify(input);
