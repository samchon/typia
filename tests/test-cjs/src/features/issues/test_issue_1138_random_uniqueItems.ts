import typia, { tags } from "typia";

export function test_issue_1138_random_uniqueItems(): void {
  for (let i: number = 0; i < 100; ++i) {
    const member: IMember = typia.random<IMember>();
    typia.assert(member);
  }
}
interface IMember {
  uidArray: Array<number & tags.Type<"uint32"> & tags.Maximum<100>> &
    tags.UniqueItems &
    tags.MinItems<20> &
    tags.MaxItems<20>;
  tags: string[] & tags.UniqueItems;
}
