import TSON from "../../src";
import { IJsonSchema } from "../../src/schemas/IJsonSchema";

const assertType = (input: IJsonSchema) => TSON.assertType(input);
const is = (input: IJsonSchema) => TSON.is(input);
const stringify = (input: IJsonSchema) => TSON.stringify(input);

assertType;
is;
stringify;
