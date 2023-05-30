import typia from "../../../../src";
import { _test_prune } from "../../../internal/_test_prune";
import { AtomicClass } from "../../../structures/AtomicClass";
export const test_prune_AtomicClass = _test_prune("AtomicClass", AtomicClass.generate, (input) => ((input: [Boolean, false | Boolean, boolean | Boolean, Number, Number | 1, number | Number, String, String | 'characters', string | String]): void => {
})(input));
