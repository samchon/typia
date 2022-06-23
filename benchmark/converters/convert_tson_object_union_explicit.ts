import TSON from "../../src";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";

export const convert_tson_object_union_explicit = (input: ObjectUnionExplicit) =>
    TSON.stringify(input);
