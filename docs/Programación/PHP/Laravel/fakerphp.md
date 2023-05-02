---
title: Faker PHP
---

## Repair image load

```php
# Search --> curl_setopt($ch, CURLOPT_FILE, $fp);
# add:
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
```