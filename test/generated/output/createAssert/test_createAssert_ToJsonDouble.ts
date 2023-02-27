import typia from "../../../../src";
import { _test_assert } from "../../../internal/_test_assert";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_createAssert_ToJsonDouble = _test_assert(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input: any): ToJsonDouble => {
        const $guard = (typia.createAssert as any).guard;
        ((
            input: any,
            _path: string,
            _exceptionable: boolean = true,
        ): input is ToJsonDouble => {
            const $ao0 = (
                input: any,
                _path: string,
                _exceptionable: boolean = true,
            ): boolean => true;
            return (
                (("object" === typeof input &&
                    null !== input &&
                    false === Array.isArray(input)) ||
                    $guard(true, {
                        path: _path + "",
                        expected: "Resolve<ToJsonDouble.Parent>",
                        value: input,
                    })) &&
                $ao0(input, _path + "", true)
            );
        })(input, "$input", true);
        return input;
    },
);
