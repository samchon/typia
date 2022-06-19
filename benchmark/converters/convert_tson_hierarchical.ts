import TSON from "../../src";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";

export const convert_tson_hierarchical = (input: ObjectHierarchical) =>
    TSON.stringify(input);
