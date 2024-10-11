import typia, { tags } from "typia";

export const test_issue_1108_recursive_array_with_items_tag = () => {
  typia.createIs<Tree>();
  typia.createAssert<Tree>();
  typia.createValidate<Tree>();
  typia.json.createAssertStringify<Tree>();
  typia.json.schemas<[Tree]>();
  typia.protobuf.createAssertEncode<Tree>();
};
interface Tree {
  children?: Tree[] & tags.MinItems<1>;
}
