import typia from "../../../../src";
import { _test_isStringify } from "../../../internal/_test_isStringify";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_createIsStringify_ToJsonDouble = _test_isStringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input: ToJsonDouble): string | null => {
        const is: any = (input: any): input is ToJsonDouble => {
            return "object" === typeof input && null !== input && true;
        };
        const stringify: any = (input: ToJsonDouble): string => {
            const $number: any = (typia.createIsStringify as any).number;
            const $so0: any = (input: any): any =>
                `{"id":${$number(input.id)},"flag":${input.flag}}`;
            return $so0(input.toJSON());
        };
        return is(input) ? stringify(input) : null;
    },
);
