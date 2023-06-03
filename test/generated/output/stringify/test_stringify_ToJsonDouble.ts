import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_stringify_ToJsonDouble = _test_stringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) =>
        ((input: ToJsonDouble.Parent): string => {
            const $number = (typia.stringify as any).number;
            const $so0 = (input: any): any =>
                `{"id":${$number(input.id)},"flag":${input.flag}}`;
            return $so0(input.toJSON());
        })(input),
);
