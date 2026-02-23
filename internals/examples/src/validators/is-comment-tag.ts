import typia, { tags } from "typia";

export const checkCustomTag = typia.createIs<CustomTag>();

interface CustomTag {
  /** @type uint32 */
  type: number;

  number?: number & tags.ExclusiveMinimum<19> & tags.Maximum<100>;

  /** @minLength 3 */
  string: string;

  pattern: string & tags.Pattern<"^[a-z]+$">;

  /**
   * Type tag can perform union type.
   *
   * In here case, format can be oneof `ipv4` or `ipv6` format.
   */
  format: (string & (tags.Format<"ipv4"> | tags.Format<"ipv6">)) | null;

  /** In the Array case, only type tag can restrict element type. */
  array: Array<string & tags.Format<"uuid">> &
    tags.MinItems<3> &
    tags.MaxItems<100>;

  /** Also, only type tag can handle map type. */
  map: Map<
    number & tags.Type<"uint32">,
    Array<string & tags.Format<"uuid">> & tags.MinItems<1>
  >;
}
