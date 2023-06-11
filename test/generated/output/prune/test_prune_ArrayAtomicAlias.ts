import typia from "../../../../src";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";
import { _test_prune } from "../../../internal/_test_prune";
export const test_prune_ArrayAtomicAlias = _test_prune("ArrayAtomicAlias", ArrayAtomicAlias.generate, (input) => ((input: [ArrayAtomicAlias.Alias<boolean>, ArrayAtomicAlias.Alias<number>, ArrayAtomicAlias.Alias<string>]): void => {
})(input));
