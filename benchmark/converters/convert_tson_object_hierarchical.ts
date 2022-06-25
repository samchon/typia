import TSON from "../../src";
import { ObjectHierarchical } from "../../test/structures/ObjectHierarchical";

export const convert_tson_object_hierarchical = (input: ObjectHierarchical) =>
    TSON.stringify(input);
