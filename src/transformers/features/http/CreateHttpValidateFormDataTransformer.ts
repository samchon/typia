import { HttpValidateFormDataProgrammer } from "../../../programmers/http/HttpValidateFormDataProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace CreateHttpValidateFormDataTransformer {
  export const transform = GenericTransformer.factory(
    "http.createValidateFormData",
  )(
    (project) => (modulo) =>
      HttpValidateFormDataProgrammer.write(project)(modulo),
  );
}
