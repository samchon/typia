import typia from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ToJsonDouble = _test_stringify("ToJsonDouble", ToJsonDouble.generate, (input) => ((input: Parent): string => {
    const $number = (typia.stringify as any).number;
    const $so0 = (input: any) => `{"id":${$number(input.id)},"flag":${input.flag}}`;
    return $so0(input.toJSON());
})(input));
