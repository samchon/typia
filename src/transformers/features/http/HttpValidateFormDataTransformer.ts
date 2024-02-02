import { HttpValidateFormDataProgrammer } from "../../../programmers/http/HttpValidateFormDataProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpValidateFormDataTransformer {
  export const transform = GenericTransformer.scalar("http.validateFormData")(
    (project) => (modulo) =>
      HttpValidateFormDataProgrammer.write(project)(modulo),
  );
}
