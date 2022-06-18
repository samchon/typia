import TSON from "../../src";
import { ObjectRecursive } from "../../test/structures/ObjectRecursive";

export const tson_recursive = (input: ObjectRecursive) => TSON.stringify(input);
