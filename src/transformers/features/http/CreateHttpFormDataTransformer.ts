import { HttpFormDataProgrammer } from "../../../programmers/http/HttpFormDataProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpFormDataTransformer {
  export const transform = GenericTransformer.factory("http.createFormData")(
    (project) => (modulo) => HttpFormDataProgrammer.write(project)(modulo),
  );
}
