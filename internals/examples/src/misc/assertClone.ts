import typia from "typia";

const department: IDepartment = typia.random<IDepartment>();
const cloned: IDepartment = typia.misc.assertClone(department);

console.log(cloned);

interface IDepartment {
  /** @format uuid */
  id: string;

  /** @minLength 3 */
  name: string;

  /** @type int */
  limit: number;

  clerks: IClerk[];
}
interface IClerk {
  name: string;

  /**
   * @exclusiveMinimum 19
   * @maximum 100
   */
  age: number;

  authority: number;

  /** @format date */
  joined_at: string;
}
