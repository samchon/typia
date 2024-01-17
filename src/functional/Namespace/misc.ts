import { $any } from "../$any";
import { $throws } from "../$throws";
import { is } from "../is";

export const clone = (method: string) => ({
  ...is(),
  throws: $throws(`misc.${method}`),
  any: $any,
});

export const prune = (method: string) => ({
  ...is(),
  throws: $throws(`misc.${method}`),
});
