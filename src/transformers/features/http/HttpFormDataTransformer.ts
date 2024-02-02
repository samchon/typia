import { HttpFormDataProgrammer } from "../../../programmers/http/HttpFormDataProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace HttpFormDataTransformer {
  export const transform = GenericTransformer.scalar("http.formdata")(
    (project) => (modulo) => HttpFormDataProgrammer.write(project)(modulo),
  );
}
