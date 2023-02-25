import typia from "../../../src";
import { ToJsonDouble } from "../../structures/ToJsonDouble";
import { _test_equals } from "../internal/_test_equals";
export const test_createEquals_ToJsonDouble = _test_equals("ToJsonDouble", ToJsonDouble.generate, (input: any, _exceptionable: boolean): input is Parent => {
    const $io0 = (input: any, _exceptionable: boolean) => 0 === Object.keys(input).length || Object.keys(input).every(key => {
        const value = input[key];
        if (undefined === value)
            return true;
        return false;
    });
    return "object" === typeof input && null !== input && false === Array.isArray(input) && $io0(input, true);
});
