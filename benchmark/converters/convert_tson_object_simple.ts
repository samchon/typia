import TSON from "../../src";
import { ObjectSimple } from "../../test/structures/ObjectSimple";

export const convert_tson_object_simple = (input: ObjectSimple) =>
    TSON.stringify(input);
