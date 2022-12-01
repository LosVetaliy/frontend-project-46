### Hexlet tests and linter status:
[![Actions Status](https://github.com/LosVetaliy/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/LosVetaliy/frontend-project-46/actions)
### Maintainability codeclimate
[![Maintainability](https://api.codeclimate.com/v1/badges/069dd49af2c2d1d5dec1/maintainability)](https://codeclimate.com/github/LosVetaliy/frontend-project-46/maintainability)
### Test Coverage Badge
[![Test Coverage](https://api.codeclimate.com/v1/badges/069dd49af2c2d1d5dec1/test_coverage)](https://codeclimate.com/github/LosVetaliy/frontend-project-46/test_coverage)

## Вычислитель отличий

### Вычислитель отличий определяет разницу между двумя файлами форматов: yaml, json. Вывод в виде plain, stylish и json.

## Установка приложения
### Перед запуском программы выполните следующие действия:
1. Установите пакет Node.js [Node.js](https://nodejs.org/en/) и обновите его до версии не ниже 14: ```node -v```.
2. Установите пакет npm.
3. Клонируйте репозиторий ```git@github.com:LosVetaliy/frontend-project-46.git```.
4. Смените директорию на frontend-project-46 и выполните команду ```make install```.

## Использование приложения:
Вы можете использовать проект как скрипт в терминале или как библиотеку в вашем JavaScript проекте. Вы можете выводить различия в трёх форматах: stylish (default), plain and json. Для получения информации введите команду ```gendiff -h```.
```shell
$ gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>
Compares two configuration files and shows a difference.
Options:
  -V, --version          output the version number
  -f, --format <type>    output format (choices: "stylish", "plain", "json", default: "stylish")
  -h, --help             display help for command
```

## Рекомендуемые минимальные требования к системе:
### Минимальные версии ОС:
* Windows 10
* MacOS 10.1
* Ubuntu 16, либо удобный вам дистрибутив Linux
### Процессор: 
* Intel i3 / AMD Ryzen 3
### Операционная память: 
* от 8GB

### Запуск программы. Обращение к json файлам через относительный и абсолютный путь:
[![asciicast](https://asciinema.org/a/y0HtJF38PV9jDWCl5mzUQtO03.svg)](https://asciinema.org/a/y0HtJF38PV9jDWCl5mzUQtO03)
### Сравнение файлов в формате yaml:
[![asciicast](https://asciinema.org/a/YsFuwOsXGE5vo7zJYmx1rA4eo.svg)](https://asciinema.org/a/YsFuwOsXGE5vo7zJYmx1rA4eo)
### Пример сравнения файлов со вложенной структурой данных:
[![asciicast](https://asciinema.org/a/pHfBwhhnCE2rFVrC8JiV81P8q.svg)](https://asciinema.org/a/pHfBwhhnCE2rFVrC8JiV81P8q)
### Пример вывода в формате plain:
[![asciicast](https://asciinema.org/a/hdaHEXD5NdvMQ5xJ0GBN8J2PN.svg)](https://asciinema.org/a/hdaHEXD5NdvMQ5xJ0GBN8J2PN)
### Пример вывода в формате json файла:
[![asciicast](https://asciinema.org/a/ESEooHWvsBgrUCSmrSA7WNZ7N.svg)](https://asciinema.org/a/ESEooHWvsBgrUCSmrSA7WNZ7N)