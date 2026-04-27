package http

var HttpIsHeadersProgrammer = httpIsHeadersProgrammerNamespace{}

type httpIsHeadersProgrammerNamespace struct{}

func (httpIsHeadersProgrammerNamespace) Write(typeText string) string {
	return httpIsWrap(httpDecodeHeadersFunction(), typeText)
}
