import typia from "typia";

/**
 * Hello World.
 *
 * Will the title be?
 */
interface NoTitleTag {
  /**
   * Test whether title is working or not.
   *
   * The title should not be the first line.
   */
  property: string;
}

/**
 * Title tagged interface.
 *
 * @title This is the title tag
 */
interface WithTitleTag {
  /**
   * @title This is title tag.
   */
  title: string;

  /**
   * The title with description.
   *
   * @title The title
   */
  title_with_description: string;
}

const r = typia.json.schemas<[NoTitleTag, WithTitleTag]>();
console.log(JSON.stringify(r, null, 2));
