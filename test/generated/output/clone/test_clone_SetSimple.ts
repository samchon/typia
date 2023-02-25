import typia from "../../../src";
import { SetSimple } from "../../structures/SetSimple";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_SetSimple = _test_clone("SetSimple", SetSimple.generate, (input) => ((input: SetSimple): typia.Primitive<SetSimple> => {
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $co0 = (input: any) => ({
        booleans: input.booleans instanceof Set ? {} : input.booleans,
        numbers: input.numbers instanceof Set ? {} : input.numbers,
        strings: input.strings instanceof Set ? {} : input.strings,
        arrays: input.arrays instanceof Set ? {} : input.arrays,
        objects: input.objects instanceof Set ? {} : input.objects
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
})(input));
