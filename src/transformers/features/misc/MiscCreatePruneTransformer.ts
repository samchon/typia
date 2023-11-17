import { MiscPruneProgrammer } from "../../../programmers/misc/MiscPruneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreatePruneTransformer {
  export const transform = GenericTransformer.factory("misc.createPrune")(
    (project) => (modulo) => MiscPruneProgrammer.write(project)(modulo),
  );
}
