import typia from "typia";

interface IJsConfigTemplate {
  id: string;
  value: number;
}

export const isJsConfig = typia.createIs<IJsConfigTemplate>();
