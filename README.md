# GMS Artilary Tests

Нагрузочные тесты для мобильного приложения

## Инструкция

Для тестирование потребуется установить [nodejs](https://nodejs.org/en/download/package-manager) и [artillery](https://www.artillery.io/docs/get-started/get-artillery).

После того как основные пакеты установлены необходимо перейти в корень проекта и выполнить команду
```
npm install
```

Для запуска сценария выполняем комнду
```
artillery run multiple_user.yml -k
```
Опция -k позволяет игнорировать настройку ssl.

Сервис artillery позволяет бесплатно отправить статистику и сгенерировать диаграммы на основе статистики.
Для этого нужно залогинится на офицацльном сайте [artillery](https://www.artillery.io/) под гид хаб или гугл профилем.
После этого идем в настройки  профиля в раздел API Keys и копируем api ключ.
![image](https://github.com/user-attachments/assets/ada93196-dbf8-4cd0-b92a-42fd88449dfa)

Команда для запуска тестов с генерацией отчета
```
 artillery run multiple_users.yml -k --record --key <your_api_key>
```

Если нужно посмотерть логи http запросов логкально то перед запуском тестов выполняем команду

```
$Env:DEBUG = 'http'
```