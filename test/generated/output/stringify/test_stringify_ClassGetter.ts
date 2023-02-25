import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ClassGetter = _test_stringify("ClassGetter", ClassGetter.generate, (input) => ((input: Person): string => {
    const $string = (typia.stringify as any).string;
    return `{"id":${$string(input.id)},"name":${$string(input.name)},"dead":${input.dead}}`;
})(input));
