import typia from "typia";

import { IJsonSchema } from "typia/lib/schemas/IJsonSchema";

const assert = (input: IJsonSchema) => typia.assert(input);
const is = (input: IJsonSchema) => typia.is(input);
const stringify = (input: IJsonSchema) => typia.stringify(input);

assert;
is;
stringify;
