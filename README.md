# Задание

В системе передачи цифровой информации передается речь в цифровом виде. Речевые пакеты передаются через два транзитных канала, буферируясь в накопителях перед каждым каналом. Время передачи пакета по каналу составляет 5 мс. Пакеты поступают через 6±3мс. Пакеты, передававшиеся более 10 мс, на выходе системы уничтожаются, так как их появление в декодере значительно снизит качество передаваемой речи. Уничтожение более 30% пакетов недопустимо. При достижении такого уровня система за счет ресурсов ускоряет передачу до 4 мс на канал. При снижении уровня до приемлемого происходит отключение ресурсов. Смоделировать 10 часов работы системы. Определить частоту уничтожения пакетов и частоту подключения ресурсов.

# Question

In a digital information transmission system, speech is transmitted in digital form. Voice packets are transmitted through two backhaul channels, buffered in accumulators before each channel. The packet transmission time over the channel is 5 ms. Packets arrive in 6±3ms. Packets transmitted for more than 10 ms are destroyed at the output of the system, since their appearance in the decoder will significantly reduce the quality of the transmitted speech. Destruction of more than 30% of packages is unacceptable. When this level is reached, the system at the expense of resources accelerates the transmission up to 4 ms per channel. When the level drops to an acceptable level, resources are disabled. Simulate 10 hours of system operation. Determine how often packets are destroyed and how often resources are connected.

# Lee

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
