import typia from "typia";

/**
 * Something DTO.
 *
 * @x-autobe-database-schema somethings
 */
interface ISomething {
  /**
   * Primary Key.
   *
   * @x-autobe-database-schema-member id x y
   * @x-autobe-database-schema-member Hello everyone,
   *                                  my name is John Doe.
   *
   *                                  Let's play with me
   *                                  in the world of TypeScript!
   * @x-custom-tag 3
   */
  id: string;
}

console.log(JSON.stringify(typia.json.schema<ISomething>(), null, 2));
