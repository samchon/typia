import { MiscIsCloneProgrammer } from "../../../programmers/misc/MiscIsCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreateIsCloneTransformer {
  export const transform = GenericTransformer.factory("misc.createIsClone")(
    (project) => (modulo) => MiscIsCloneProgrammer.write(project)(modulo),
  );
}
