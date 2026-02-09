import { TestValidator } from "@nestia/e2e";
import {
  HttpLlm,
  IHttpLlmApplication,
  ILlmSchema,
  IMcpLlmApplication,
  IMcpLlmFunction,
  LlmTypeChecker,
  McpLlm,
  OpenApi,
} from "@samchon/openapi";
import fs from "fs";

import { TestGlobal } from "../TestGlobal";

export const test_mcp_application = async (): Promise<void> => {
  const http: IHttpLlmApplication = HttpLlm.application({
    document: OpenApi.convert(
      await fetch(
        "https://raw.githubusercontent.com/samchon/shopping-backend/refs/heads/master/packages/api/swagger.json",
      ).then((r) => r.json()),
    ),
  });
  const mcp: IMcpLlmApplication = McpLlm.application({
    tools: http.functions.map((f) => ({
      name: f.name,
      description: f.description,
      inputSchema: f.parameters,
    })),
  });
  TestValidator.equals(
    "functions",
    http.functions.length,
    mcp.functions.length,
  );
  TestValidator.equals("errors", 0, mcp.errors.length);

  http.functions.forEach((x) => {
    const parameters: ILlmSchema.IParameters = { ...x.parameters };
    const visited: Set<string> = new Set<string>();
    LlmTypeChecker.visit({
      closure: (schema: any) => {
        if (typeof schema.$ref === "string")
          visited.add(schema.$ref.split("/").pop()!);
      },
      schema: parameters,
      $defs: parameters.$defs,
    });
    (parameters as any).$defs = Object.fromEntries(
      Object.entries((parameters as any).$defs).filter(([key]) =>
        visited.has(key),
      ),
    );
    const y: IMcpLlmFunction | undefined = mcp.functions.find(
      (y) => y.name === x.name,
    );
    TestValidator.equals(
      `parameters: ${x.name}`,
      parameters,
      (y?.parameters as any) ?? {},
      (key) =>
        key === "description" ||
        key === "discriminator" ||
        key === "x-discriminator",
    );
  });

  if (process.argv.includes("--file"))
    await fs.promises.writeFile(
      `${TestGlobal.ROOT}/examples/mcp/application.json`,
      JSON.stringify(mcp, null, 2),
      "utf8",
    );
};
