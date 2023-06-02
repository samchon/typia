import typia from "../../../../src";
import { _test_assertStringify } from "../../../internal/_test_assertStringify";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_assertStringify_ToJsonDouble = _test_assertStringify(
    "ToJsonDouble",
    ToJsonDouble.generate,
    (input) =>
        ((input: any): string => {
            const assert: any = (input: any): ToJsonDouble.Parent => {
                const __is: any = (
                    input: any,
                ): input is ToJsonDouble.Parent => {
                    return "object" === typeof input && null !== input && true;
                };
                const $guard: any = (typia.assertStringify as any).guard;
                if (false === __is(input))
                    ((
                        input: any,
                        _path: string,
                        _exceptionable: boolean = true,
                    ): input is ToJsonDouble.Parent => {
                        const $ao0: any = (
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
                                    expected: "ToJsonDouble.Parent",
                                    value: input,
                                })) &&
                            $ao0(input, _path + "", true)
                        );
                    })(input, "$input", true);
                return input;
            };
            const stringify: any = (input: ToJsonDouble.Parent): string => {
                const $number: any = (typia.assertStringify as any).number;
                const $so0: any = (input: any): any =>
                    `{"id":${$number(input.id)},"flag":${input.flag}}`;
                return $so0(input.toJSON());
            };
            return stringify(assert(input));
        })(input),
);
