---
title: Helper Register
---

## Laravel 8

1. Create new folder App/Helpers
2. Create new file with helper functions
3. Add new file path to composer.json

    ```json
    "autoload": {
        "files": [
            "app/Helpers/new-file.php"
        ]
    }
    ```

4. Run command

    ```sh
    composer dump-autoload
    ```
