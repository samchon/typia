import typia, { tags } from "typia";

interface Something {
  /**
   * @type int64
   */
  value: number & tags.Minimum<3>;
}

console.log(
  typia.json.application<[Something]>().components.schemas?.Something,
);
