import typia from "typia";

/**
 * @title Something DTO
 * @description This is a description of the Something DTO.
 *
 *              Let's fill the content of it.
 * @author Samchon
 */
interface Something {
  /**
   * This is the title.
   *
   * This is the description.
   */
  id: string;

  /**
   * This is not the description.
   *
   * @title Name
   * @description This is the description of the name
   */
  name: string;

  /**
   * @description No title.
   *
   *              Only description.
   */
  description: string;
}

console.log(JSON.stringify(typia.json.application<[Something]>(), null, 2));
