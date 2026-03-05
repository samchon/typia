import typia from "typia";

const data: TypeTag = typia.random<TypeTag>();
console.log(data);

interface TypeTag {
  /** @type int */
  type: number;

  /**
   * @exclusiveMinimum 19
   * @maximum 100
   */
  number?: number;

  /** @minLength 3 */
  string: string;

  /** @pattern ^[a-z]+$ */
  pattern: string;

  /** @format date-time */
  format: string | null;
}
