import { IJsonSchema } from "../../src/schemas/IJsonSchema";

import typia from "../../src";

const assert = (input: IJsonSchema) => typia.assert(input);
const is = (input: IJsonSchema) => typia.is(input);
const stringify = (input: IJsonSchema) => typia.stringify(input);

assert;
is;
stringify;
