import TSON from "../../src";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";

export const convert_tson_recursive = (input: ObjectRecursive) =>
    TSON.stringify(input);
