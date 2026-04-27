package http

var HttpAssertHeadersProgrammer = httpAssertHeadersProgrammerNamespace{}

type httpAssertHeadersProgrammerNamespace struct{}

func (httpAssertHeadersProgrammerNamespace) Write(typeText string) string {
	return httpAssertWrap("http.assertHeaders", httpDecodeHeadersFunction(), typeText)
}
