// import { TestValidator } from "@nestia/e2e";
// import { IHttpLlmApplication, IHttpLlmFunction } from "@typia/interface";
// import { HttpLlm, LlmTypeChecker } from "@typia/utils";

// export const test_mcp_schema_ref = async (): Promise<void> => {
//   const http: IHttpLlmApplication = HttpLlm.application({
//     document: await fetch(
//       "https://raw.githubusercontent.com/samchon/shopping-backend/refs/heads/master/packages/api/swagger.json",
//     ).then((r) => r.json()),
//   });
//   const func: IHttpLlmFunction | undefined = http.functions.find(
//     (x) =>
//       Object.keys(x.parameters.$defs).length !== 0 &&
//       Object.keys(x.parameters.properties).length !== 0 &&
//       x.parameters.properties.body !== undefined &&
//       false ===
//         isEmptyBody(x.parameters.$defs, x.parameters.properties.body ?? {}),
//   );
//   if (func === undefined) throw new Error("Function not found");

//   const visited: Set<string> = new Set<string>();
//   LlmTypeChecker.visit({
//     closure: (schema) => {
//       if (LlmTypeChecker.isReference(schema))
//         visited.add(schema.$ref.split("/").pop()!);
//     },
//     $defs: func.parameters.$defs,
//     schema: func.parameters,
//   });

//   const mcp: IMcpLlmApplication = McpLlm.application({
//     tools: [
//       {
//         name: func.name,
//         description: func.description,
//         inputSchema: func.parameters,
//       },
//     ],
//   });
//   TestValidator.equals(
//     "schema",
//     {
//       ...func.parameters,
//       $defs: Object.fromEntries(
//         Object.entries(func.parameters.$defs).filter(([key]) =>
//           visited.has(key),
//         ),
//       ),
//     },
//     mcp.functions[0]!.parameters,
//     (key) => key === "description",
//   );
// };

// const isEmptyBody = ($defs: Record<string, any>, input: any): boolean => {
//   if (LlmTypeChecker.isReference(input)) {
//     const name: string = input.$ref.split("/").pop()!;
//     return $defs[name] && isEmptyBody($defs, $defs[name]);
//   }
//   return (
//     LlmTypeChecker.isObject(input) &&
//     Object.keys(input.properties ?? {}).length === 0
//   );
// };
