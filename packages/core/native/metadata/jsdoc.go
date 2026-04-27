package metadata

// JsDocTagInfo mirrors TypeScript's ts.JSDocTagInfo shape as exposed through
// @typia/interface's IJsDocTagInfo.
type JsDocTagInfo struct {
	Name string      `json:"name"`
	Text []JsDocText `json:"text,omitempty"`
}

type JsDocText struct {
	Text string `json:"text"`
	Kind string `json:"kind"`
}
