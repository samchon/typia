export type NativeRewriteMode = string;
export type NativePluginContractVersion = 1;

export interface TtscNativeBackend {
  mode: NativeRewriteMode;
  binary?: string;
  contractVersion?: NativePluginContractVersion;
  capabilities?: readonly string[];
}

export interface TtscNativePluginShape {
  name: string;
  native?: TtscNativeBackend;
  nativeMode?: NativeRewriteMode;
  nativeBinary?: string;
}

export function resolveNativeBackend(
  plugin: TtscNativePluginShape,
): TtscNativeBackend | null {
  if (plugin.native && (plugin.nativeMode || plugin.nativeBinary)) {
    throw new Error(
      `ttsc: plugin "${plugin.name}" must use either native or nativeMode/nativeBinary, not both`,
    );
  }
  if (!plugin.native) {
    if (
      plugin.nativeBinary &&
      (!plugin.nativeMode || plugin.nativeMode === "none")
    ) {
      throw new Error(
        `ttsc: plugin "${plugin.name}" declared nativeBinary without a non-empty nativeMode`,
      );
    }
    if (!plugin.nativeMode || plugin.nativeMode === "none") {
      return null;
    }
    return {
      binary: plugin.nativeBinary,
      contractVersion: 1,
      mode: plugin.nativeMode,
    };
  }

  const backend = plugin.native;
  if (!backend.mode || backend.mode === "none") {
    throw new Error(
      `ttsc: plugin "${plugin.name}" declared native without a non-empty mode`,
    );
  }
  if (backend.contractVersion !== undefined && backend.contractVersion !== 1) {
    throw new Error(
      `ttsc: plugin "${plugin.name}" requested unsupported native contract version ${backend.contractVersion}`,
    );
  }
  return {
    ...backend,
    contractVersion: backend.contractVersion ?? 1,
  };
}
