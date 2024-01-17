import { NamingConvention } from "../../utils/NamingConvention";
import { $convention } from "../$convention";
import { $throws } from "../$throws";
import { is } from "../is";

export const camel = (method: string) => ({
  ...base(method),
  any: $convention(NamingConvention.camel),
});
export const pascal = (method: string) => ({
  ...base(method),
  any: $convention(NamingConvention.pascal),
});
export const snake = (method: string) => ({
  ...base(method),
  any: $convention(NamingConvention.snake),
});

const base = (method: string) => ({
  ...is(),
  throws: $throws(`notations.${method}`),
});
