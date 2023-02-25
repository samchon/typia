import typia from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_isStringify } from "../internal/_test_isStringify";
export const test_createIsStringify_ToJsonDouble = _test_isStringify("ToJsonDouble", ToJsonDouble.generate, (input: Parent): string | null => { const is = (input: any): input is Parent => {
    return "object" === typeof input && null !== input && true;
}; const stringify = (input: Parent): string => {
    const $so0 = (input: any) => `{"id":${input.id},"flag":${input.flag}}`;
    return $so0(input.toJSON());
}; return is(input) ? stringify(input) : null; });
