import { ILlmSchema } from "@samchon/openapi";
import typia, { tags } from "typia";

const $defs: Record<string, ILlmSchema> = {};

export const schema: ILlmSchema = typia.llm.schema<Special>($defs);

interface Special {
  /**
   * Deprecated tags are just used for marking.
   *
   * @deprecated
   * @title Unsigned integer
   */
  type: number & tags.Type<"int32">;

  /**
   * Internal tagged property never be shown in JSON schema.
   *
   * It even doesn't be shown in other `typia` functions like `assert<T>()`.
   *
   * @internal
   */
  internal: number[];

  /**
   * Hidden tagged property never be shown in JSON schema.
   *
   * However, it would be shown in other `typia` functions like
   * `stringify<T>()`.
   *
   * @ignore
   */
  hidden: boolean;

  /**
   * You can limit the range of number.
   *
   * @exclusiveMinimum 19
   * @maximum 100
   */
  number?: number;

  /**
   * You can limit the length of string.
   *
   * Also, multiple range conditions are also possible.
   */
  string: string &
    (
      | (tags.MinLength<3> & tags.MaxLength<24>)
      | (tags.MinLength<40> & tags.MaxLength<100>)
    );

  /**
   * You can limit the pattern of string.
   *
   * @pattern ^[a-z]+$
   */
  pattern: string;

  /**
   * You can limit the format of string.
   *
   * @format date-time
   */
  format: string | null;

  /** In the Array case, possible to restrict its elements. */
  array: Array<string & tags.Format<"uuid">> & tags.MinItems<3>;
}
