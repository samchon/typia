import typia from "typia";
import * as __typia_transform__ProtobufReader from "typia/lib/internal/_ProtobufReader.js";

export const decode = (() => {
  const _pdo0 = (reader, length = -1) => {
    length = length < 0 ? reader.size() : reader.index() + length;
    const output = {
      id: new Uint8Array([]),
      name: null,
      children: [],
      keywords: new Map(),
      thumbnail: new Uint8Array([]),
      email: "",
      hobbies: [],
    };
    while (reader.index() < length) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 13:
          // bytes;
          output.id = reader.bytes();
          break;
        case 12:
          // uint64;
          output.id = Number(reader.uint64());
          break;
        case 11:
          // string;
          output.id = reader.string();
          break;
        case 20:
          // string;
          output.name = reader.string();
          break;
        case 30:
          // Array<IMember>;
          output.children.push(_pdo0(reader, reader.uint32()));
          break;
        case 40:
          // Map<string, string>;
          (() => {
            output.keywords ??= new Map();
            const piece = reader.uint32() + reader.index();
            const entry = {
              key: "",
              value: "",
            };
            while (reader.index() < piece) {
              const kind = reader.uint32();
              switch (kind >>> 3) {
                case 1:
                  // string;
                  entry.key = reader.string();
                  break;
                case 2:
                  // string;
                  entry.value = reader.string();
                  break;
                default:
                  reader.skipType(kind & 7);
                  break;
              }
            }
            output.keywords.set(entry.key, entry.value);
          })();
          break;
        case 41:
          // bytes;
          output.thumbnail = reader.bytes();
          break;
        case 42:
          // string;
          output.thumbnail = reader.string();
          break;
        case 43:
          // string;
          output.email = reader.string();
          break;
        case 44:
          // Array<IHobby>;
          output.hobbies.push(_pdo1(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return output;
  };
  const _pdo1 = (reader, length = -1) => {
    length = length < 0 ? reader.size() : reader.index() + length;
    const output = {
      id: "",
      name: "",
      valid: undefined,
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
          output.name = reader.string();
          break;
        case 3:
          // bool;
          output.valid = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return output;
  };
  return (input) => {
    const reader = new __typia_transform__ProtobufReader._ProtobufReader(input);
    return _pdo0(reader);
  };
})();
