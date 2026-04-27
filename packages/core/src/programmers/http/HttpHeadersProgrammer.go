package http

var HttpHeadersProgrammer = httpHeadersProgrammerNamespace{}

type httpHeadersProgrammerNamespace struct{}

func (httpHeadersProgrammerNamespace) Write(typeText string) string {
	return httpDecodeHeadersFunction()
}
