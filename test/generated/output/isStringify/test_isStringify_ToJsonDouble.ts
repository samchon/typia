import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_isStringify_ToJsonDouble = _test_isStringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) =>
        ((input: ToJsonDouble.Parent): string | null => {
            const is: any = (input: any): input is ToJsonDouble.Parent => {
                return "object" === typeof input && null !== input && true;
            };
            const stringify: any = (input: ToJsonDouble.Parent): string => {
                const $number: any = (typia.isStringify as any).number;
                const $so0: any = (input: any): any =>
                    `{"id":${$number(input.id)},"flag":${input.flag}}`;
                return $so0(input.toJSON());
            };
            return is(input) ? stringify(input) : null;
        })(input),
);
