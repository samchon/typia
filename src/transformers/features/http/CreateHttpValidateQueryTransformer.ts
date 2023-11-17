import { HttpValidateQueryProgrammer } from "../../../programmers/http/HttpValidateQueryProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpValidateQueryTransformer {
  export const transform = GenericTransformer.factory(
    "http.createValidateQuery",
  )(
    (project) => (modulo) => HttpValidateQueryProgrammer.write(project)(modulo),
  );
}
