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
 * artifacts are emitted into. `vm.Script` needs no experimental VM module flag
 * and compiles this declaration without executing it.
 *
 * @param props.name Function name taken from the route accessor
 * @param props.parameters Parameter names taken from the route parameter keys
 *
 * @returns True when the engine accepts the declaration
 *
 * @evidence contracts/testing.md#behavioral-verification The helper compiles the generated declaration with node:vm in strict async mode and reports whether the engine accepts it, so a reserved word, duplicate parameter or invalid identifier is rejected exactly as the engine would.
 * @evidence contracts/testing.md#independent-expectations The JavaScript engine is the oracle and shares no code with NamingConvention or the migrator that produced the names.
 * @evidence contracts/testing.md#distinguishing-cases The helper owns no cases; the migration unit cases supply legal and illegal names and read the boolean.
 * @evidence contracts/testing.md#execution-ownership It runs in process inside the plugin-free test-utils test:unit command and only compiles a script without executing it.
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
