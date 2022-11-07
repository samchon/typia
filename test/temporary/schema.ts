import { IJsonSchema } from "../../src/schemas/IJsonSchema";

import TSON from "../../src";

const assert = (input: IJsonSchema) => TSON.assert(input);
const is = (input: IJsonSchema) => TSON.is(input);
const stringify = (input: IJsonSchema) => TSON.stringify(input);

assert;
is;
stringify;
