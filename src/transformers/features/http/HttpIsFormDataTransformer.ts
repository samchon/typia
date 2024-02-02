import { HttpIsFormDataProgrammer } from "../../../programmers/http/HttpIsFormDataProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpIsFormDataTransformer {
  export const transform = GenericTransformer.scalar("http.isFormData")(
    (project) => (modulo) => HttpIsFormDataProgrammer.write(project)(modulo),
  );
}
