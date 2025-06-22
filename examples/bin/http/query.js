import typia from "typia";
import * as __typia_transform__httpQueryParseURLSearchParams from "typia/lib/internal/_httpQueryParseURLSearchParams.js";
import * as __typia_transform__httpQueryReadArray from "typia/lib/internal/_httpQueryReadArray.js";
import * as __typia_transform__httpQueryReadBoolean from "typia/lib/internal/_httpQueryReadBoolean.js";
import * as __typia_transform__httpQueryReadNumber from "typia/lib/internal/_httpQueryReadNumber.js";
import * as __typia_transform__httpQueryReadString from "typia/lib/internal/_httpQueryReadString.js";

(() => {
  return (input) => {
    input =
      __typia_transform__httpQueryParseURLSearchParams._httpQueryParseURLSearchParams(
        input,
      );
    const output = {
      limit:
        __typia_transform__httpQueryReadNumber._httpQueryReadNumber(
          input.get("limit"),
        ) ?? undefined,
      enforce: __typia_transform__httpQueryReadBoolean._httpQueryReadBoolean(
        input.get("enforce"),
      ),
      values: __typia_transform__httpQueryReadArray._httpQueryReadArray(
        input
          .getAll("values")
          .map((elem) =>
            __typia_transform__httpQueryReadString._httpQueryReadString(elem),
          ),
        undefined,
      ),
      atomic: __typia_transform__httpQueryReadString._httpQueryReadString(
        input.get("atomic"),
      ),
      indexes: input
        .getAll("indexes")
        .map((elem) =>
          __typia_transform__httpQueryReadNumber._httpQueryReadNumber(elem),
        ),
    };
    return output;
  };
})();
