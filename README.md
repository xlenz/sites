# uashield compliant sites list 

[![Test](https://github.com/xlenz/sites/actions/workflows/test.yml/badge.svg)](https://github.com/xlenz/sites/actions/workflows/test.yml)

### Examples

```json
[
  { "method": "dns", "host": "IPv4 or IPv6", "port": 53 },
  { "method": "get", "page": "https://..." },
  { "method": "get", "page": "https://...", "ip": "192.168...." }, // override the ip address with a static one
  { "method": "get", "page": "https://...", "useBrowser": true } // use real browser to overcome antiddos protection
]
```
