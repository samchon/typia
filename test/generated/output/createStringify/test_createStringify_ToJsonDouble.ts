import typia from "../../../../src";
import { _test_stringify } from "../../../internal/_test_stringify";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";
export const test_createStringify_ToJsonDouble = _test_stringify("ToJsonDouble", ToJsonDouble.generate, (input: ToJsonDouble): string => {
    const $number = (typia.createStringify as any).number;
    const $so0 = (input: any): any => `{"id":${$number(input.id)},"flag":${input.flag}}`;
    return $so0(input.toJSON());
});
