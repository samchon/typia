import { definePlugin } from "../plugin";

export default definePlugin(() => ({
  name: "typia",
  nativeMode: "typia" as const,
}));
