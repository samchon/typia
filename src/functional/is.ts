import { $is_between } from "./$is_between";
import { $is_bigint_string } from "./$stoll";

/**
 * @internal
 */
export const is = () => ({
  is_between: $is_between,
  is_bigint_string: $is_bigint_string,
});
