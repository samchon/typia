import TSON from "../../src";
import { ArrayHierarchical } from "../../test/structures/ArrayHierarchical";

export const convert_tson_array_hierarchical = (input: ArrayHierarchical) =>
    TSON.stringify(input);
