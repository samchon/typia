import typia from "../../../../src";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";
import { _test_prune } from "../../../internal/_test_prune";
export const test_prune_TupleHierarchical = _test_prune("TupleHierarchical", TupleHierarchical.generate, (input) => ((input: [boolean, null, number, [boolean, null, [number, [boolean, string]]], [number, Array<[string, boolean, Array<[number, number, [boolean, string]]>]>]]): void => {
})(input));
