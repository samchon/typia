import typia from "../../../src";
import { ClassGetter } from "../../structures/ClassGetter";
import { _test_clone } from "../internal/_test_clone";
export const test_clone_ClassGetter = _test_clone("ClassGetter", ClassGetter.generate, (input) => ((input: Person): typia.Primitive<Person> => {
    const $co0 = (input: any) => ({
        id: input.id,
        name: input.name,
        dead: input.dead
    });
    return "object" === typeof input && null !== input ? $co0(input) : input;
})(input));
