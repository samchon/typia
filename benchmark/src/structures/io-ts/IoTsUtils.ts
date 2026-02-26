import { fold } from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as t from "io-ts";

export namespace IoTsUtils {
  export function getPaths<A>(v: t.Validation<A>): Array<string> {
    return pipe(
      v,
      fold(
        (errors) =>
          errors.map((error) => error.context.map(({ key }) => key).join(".")),
        () => [],
      ),
    );
  }
}
