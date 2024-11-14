# GMS Artilary Tests

Нагрузочные тесты для мобильного приложения

## Инструкция

Для тестирование потребуется установить [nodejs](https://nodejs.org/en/download/package-manager) и [artillery](https://www.artillery.io/docs/get-started/get-artillery).

После того как основныйе пакеты установлены необходимо перейти в корень проекта и выполнить команду
```
npm install
```

Для запуска сценария выполняем комнду
```
artillery run multiple_user.yml -k
```
Опция -k позволяет игнорировать настройку ssl.

