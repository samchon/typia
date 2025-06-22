import typia from "typia";
import * as __typia_transform__httpHeaderReadBoolean from "typia/lib/internal/_httpHeaderReadBoolean.js";
import * as __typia_transform__httpHeaderReadNumber from "typia/lib/internal/_httpHeaderReadNumber.js";

(() => {
  return (input) => {
    const output = {
      "x-Category": input["x-category"],
      "x-MEMO": input["x-memo"],
      "x-nAmE": input["x-name"],
      "x-Values": Array.isArray(input["x-values"])
        ? input["x-values"].map(
            __typia_transform__httpHeaderReadNumber._httpHeaderReadNumber,
          )
        : (input["x-values"]
            ?.split(", ")
            ?.map(
              __typia_transform__httpHeaderReadNumber._httpHeaderReadNumber,
            ) ?? []),
      "x-FlAgS": Array.isArray(input["x-flags"])
        ? input["x-flags"].map(
            __typia_transform__httpHeaderReadBoolean._httpHeaderReadBoolean,
          )
        : (input["x-flags"]
            ?.split(", ")
            ?.map(
              __typia_transform__httpHeaderReadBoolean._httpHeaderReadBoolean,
            ) ?? []),
      "X-Descriptions": Array.isArray(input["x-descriptions"])
        ? input["x-descriptions"].map((str) => str.trim())
        : (input["x-descriptions"]?.split(", ")?.map((str) => str.trim()) ??
          []),
    };
    return output;
  };
})();
