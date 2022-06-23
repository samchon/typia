import TSON from "../../src";
import { ObjectUnionImplicit } from "../../test/structures/ObjectUnionImplicit";

export const convert_tson_object_union_implicit = (input: ObjectUnionImplicit) =>
    TSON.stringify(input);
