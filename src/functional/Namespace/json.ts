import { $number } from "../$number";
import { $rest } from "../$rest";
import { $string } from "../$string";
import { $tail } from "../$tail";
import { $throws } from "../$throws";
import { is } from "../is";

export const stringify = (method: string) => ({
  ...is(),
  number: $number,
  string: $string,
  tail: $tail,
  rest: $rest,
  throws: $throws(`json.${method}`),
});
