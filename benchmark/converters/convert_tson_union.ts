import TSON from "../../src";
import { ObjectUnionExplicit } from "../../test/structures/ObjectUnionExplicit";

export const convert_tson_union = (input: ObjectUnionExplicit) =>
    TSON.stringify(input);
