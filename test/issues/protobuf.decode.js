(input) => {
  const $Reader = typia_1.default.protobuf.createDecode.Reader;
  const $pdo0 = (reader, length = -1) => {
    length = length < 0 ? reader.size() : reader.index() + length;
    const output = {
      id: "",
      not_required: undefined,
    };
    while (reader.index() < length) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          // string;
          output.id = reader.string();
          break;
        case 2:
          // string;
          output.not_required = reader.string();
          break;
        case 3:
          // string;
          output.optional = reader.string();
          break;
        case 4:
          // string;
          output.optional_and_not_required = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return output;
  };
  const reader = new $Reader(input);
  return $pdo0(reader);
};
