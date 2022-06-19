import TSON from "../../src";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";

export const generate_tson_hierarchical = (input: ObjectHierarchical) =>
    TSON.stringify(input);
