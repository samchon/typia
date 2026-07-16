import vm from "node:vm";

/**
 * Ask the JavaScript engine whether a generated SDK function declaration
 * compiles.
 *
 * This is the contract `IHttpMigrateRoute` actually has to satisfy: the
 * accessor becomes the function name and each parameter key becomes one of its
 * parameters. Compiling the whole declaration — rather than each name in
 * isolation — additionally proves the parameter keys neither collide with each
 * other nor with `connection`, since strict mode rejects duplicate parameter
 * names.
 *
 * The `"use strict"` + `async` context reproduces the module goal generated SDK
 * artifacts are emitted into; see `_isLegalBinding` for why `vm.Script` is used
 * rather than `vm.SourceTextModule`.
 *
 * @param props.name Function name taken from the route accessor
 * @param props.parameters Parameter names taken from the route parameter keys
 * @returns True when the engine accepts the declaration
 */
export const _isLegalDeclaration = (props: {
  name: string;
  parameters: string[];
}): boolean => {
  const parameters: string = props.parameters.join(", ");
  try {
    new vm.Script(
      `"use strict"; async function ${props.name}(${parameters}) { return [${parameters}]; }`,
    );
    return true;
  } catch {
    return false;
  }
};
