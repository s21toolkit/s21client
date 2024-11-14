# s21client 🤰👍

Клиент для внутреннего GQL API платформы edu.21-school.ru.
Используется в связке с [s21client-schema](https://github.com/s21toolkit/s21client-schema) - автогенерируемым пакетом со схемой апи.
При обновлении схемы апи нужно обновлять именно `s21client-schema`.

```sh
npm install @s21toolkit/{client,client-schema}
```

## Использование

```ts
import { Client, UserAuthProvider } from "@s21toolkit/client"
import { Schema } from "@s21toolkit/client-schema"

const client = new Client(Schema, new UserAuthProvider("username", "p4ssw0rd"))

const user = await client.api.getCurrentUser()
```
