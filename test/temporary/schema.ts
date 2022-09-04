import { IJsonSchema } from "../../src/schemas/IJsonSchema";

import TSON from "../../src";

const assertType = (input: IJsonSchema) => TSON.assertType(input);
const is = (input: IJsonSchema) => TSON.is(input);
const stringify = (input: IJsonSchema) => TSON.stringify(input);

assertType;
is;
stringify;
