import typia from "typia";

export const createRandomMember = typia.createRandom<IMember>();

interface IMember {
  /**
   * @format uuid
   */
  id: string;

  /**
   * @format email
   */
  email: string;

  /**
   * @type int
   * @exclusiveMinimum 19
   * @maximum 100
   */
  age: number;
}
