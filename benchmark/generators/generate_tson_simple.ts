import TSON from "../../src";
import { ObjectSimple } from "../../test/structures/ObjectSimple";

export const generate_tson_simple = (input: ObjectSimple) =>
    TSON.stringify(input);
