import typia from "../../../../src";
import { ObjectOptional } from "../../../structures/ObjectOptional";
import { _test_stringify } from "../../../internal/_test_stringify";
export const test_stringify_ObjectOptional = _test_stringify("ObjectOptional", ObjectOptional.generate, (input) => ((input: ObjectOptional): string => {
    const $string = (typia.stringify as any).string;
    const $number = (typia.stringify as any).number;
    const $tail = (typia.stringify as any).tail;
    const $so0 = (input: any): any => `{${$tail(`${undefined === input.id ? "" : `"id":${undefined !== input.id ? $string(input.id) : undefined},`}${undefined === input.name ? "" : `"name":${undefined !== input.name ? $string(input.name) : undefined},`}${undefined === input.email ? "" : `"email":${undefined !== input.email ? $string(input.email) : undefined},`}${undefined === input.sequence ? "" : `"sequence":${undefined !== input.sequence ? $number(input.sequence) : undefined}`}`)}}`;
    return $so0(input);
})(input));
