import typia from "../../../src";
import { ArrayAny } from "../../structures/ArrayAny";
import { _test_stringify } from "../internal/_test_stringify";
export const test_stringify_ArrayAny = _test_stringify("ArrayAny", ArrayAny.generate, (input) => ((input: ArrayAny): string => {
    const $so0 = (input: any) => `{"anys":${JSON.stringify(input.anys)},"undefindable1":${JSON.stringify(input.undefindable1)},"undefindable2":${JSON.stringify(input.undefindable2)},"nullables1":${JSON.stringify(input.nullables1)},"nullables2":${JSON.stringify(input.nullables2)},"both1":${JSON.stringify(input.both1)},"both2":${JSON.stringify(input.both2)},"both3":${JSON.stringify(input.both3)},"union":${JSON.stringify(input.union)}}`;
    return $so0(input);
})(input));
