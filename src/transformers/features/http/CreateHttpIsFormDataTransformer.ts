import { HttpIsFormDataProgrammer } from "../../../programmers/http/HttpIsFormDataProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpIsFormDataTransformer {
  export const transform = GenericTransformer.factory("http.createIsFormData")(
    (project) => (modulo) => HttpIsFormDataProgrammer.write(project)(modulo),
  );
}
