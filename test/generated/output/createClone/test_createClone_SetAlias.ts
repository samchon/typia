import typia from "../../../src";
import { SetAlias } from "../../structures/SetAlias";
import { _test_clone } from "../internal/_test_clone";
export const test_createClone_SetAlias = _test_clone("SetAlias", SetAlias.generate, (input: SetAlias): typia.Primitive<SetAlias> => {
    const $io1 = (input: any) => "string" === typeof input.id && "string" === typeof input.name && "number" === typeof input.age;
    const $co0 = (input: any) => ({
        booleans: input.booleans instanceof Set ? {} : input.booleans,
        numbers: input.numbers instanceof Set ? {} : input.numbers,
        strings: input.strings instanceof Set ? {} : input.strings,
        arrays: input.arrays instanceof Set ? {} : input.arrays,
        objects: input.objects instanceof Set ? {} : input.objects
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
});
